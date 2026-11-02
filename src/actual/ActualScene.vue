<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import {
  BufferGeometry,
  Color,
  DirectionalLight,
  GridHelper,
  Group,
  HemisphereLight,
  InstancedMesh,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  Scene,
  SphereGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
  BoxGeometry,
  CapsuleGeometry,
  CylinderGeometry,
  TorusGeometry,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { ActualSimulation, openGate } from './engine';
import {
  CAPACITY,
  EQUIPMENT,
  MANUAL_PATH,
  MATERIALS,
  ROUTES,
  SMALL_GRADES,
  along,
  center,
  smallPosition,
  type EquipmentId,
  type Point,
} from './process';
import cad from './cad-layout.json';
import { batchPlant } from './cad';

export type CameraView = 'overview' | 'top' | 'focus';

const props = defineProps<{
  simulation: ActualSimulation;
  selected: EquipmentId;
  xray: boolean;
  paths: boolean;
  shell: boolean;
  view: CameraView;
}>();

const emit = defineEmits<{
  (event: 'select', id: EquipmentId): void;
}>();

const SILOS = ['E02', 'E03', 'E04', 'E05'] as const;

const routeColor = (id: string) =>
  id === 'air3A' || id === 'discharge3A'
    ? MATERIALS['3A'].color
    : id.includes('Mixed')
      ? MATERIALS.MIXED.color
      : id.includes('Misc') || id.includes('manual')
        ? '#e9bf75'
        : '#5adcb0';

const container = ref<HTMLDivElement | null>(null);
const loadState = ref('正在加载真实 CAD…');
const labelLayer = ref<HTMLDivElement | null>(null);

let renderer: WebGLRenderer | null = null;
let camera: PerspectiveCamera | null = null;
let scene: Scene | null = null;
let controls: OrbitControls | null = null;
let frameHandle = 0;
let disposed = false;

/** 场景内可复用的句柄，供每帧更新。 */
let plantRoot: Group | null = null;
const equipmentRoots = new Map<string, Object3D>();
let bottleBody: InstancedMesh | null = null;
let bottleNeck: InstancedMesh | null = null;
let siloFills = new Map<string, Mesh>();
let siloGates = new Map<string, Mesh>();
let deltaBars: Mesh[] = [];
let deltaGripper: Mesh | null = null;
let smallFills = new Map<string, Mesh>();
let workerArms: Group[] = [];
let platen: Mesh | null = null;
let balestack: InstancedMesh | null = null;
let cartGroup: Group | null = null;
let slatInstances: InstancedMesh | null = null;
let decanteryRotors: Group | null = null;
let screwGroup: Group | null = null;
let pathLines: Group | null = null;
let labelElements = new Map<string, HTMLElement>();

const dummy = new Object3D();
const tmpColor = new Color();
const tmpDirection = new Vector3();
const upVector = new Vector3(0, 1, 0);

/* 相机机位：与原实现一致（全景略高俯视，聚焦按设备包围盒拉近）。 */
let cameraClock = 3;
const desiredCamera = new Vector3();
const desiredTarget = new Vector3();

const setCamera = (view: CameraView, selected: EquipmentId, width: number, height: number) => {
  const fit = Math.max(1, Math.min(1.5, height / Math.max(1, width)));
  desiredTarget.set(-2.5, 2.5, -0.4);
  if (view === 'focus') {
    desiredTarget.set(...center(selected));
    const b = cad[selected].bounds;
    const span = Math.max(b[3] - b[0], b[4] - b[1], b[5] - b[2]);
    desiredCamera.copy(desiredTarget).add(new Vector3(1, 0.8, 1).normalize().multiplyScalar(Math.max(9, span * 2.8) * fit));
  } else {
    desiredCamera
      .copy(desiredTarget)
      .add(view === 'top' ? new Vector3(0, 48 * fit, 0.01) : new Vector3(25 * fit, 25 * fit, 30 * fit));
  }
  cameraClock = 0;
};

/** 帧更新：瓶子、料仓、机械手、小仓位、打包、设备运动、标签投影。 */
function updateScene(simulation: ActualSimulation, delta: number) {
  if (!camera || !controls || !scene) return;
  const state = simulation.current;

  // 相机平滑
  if (cameraClock < 2.8) {
    cameraClock += delta;
    const amount = 1 - Math.exp(-delta * 5);
    camera.position.lerp(desiredCamera, amount);
    controls.target.lerp(desiredTarget, amount);
  }
  controls.update();

  // 瓶子
  if (bottleBody && bottleNeck) {
    let index = 0;
    for (const unit of state.units) {
      if (unit.stage !== 'moving' || index >= 2048) continue;
      const route = ROUTES[unit.route];
      const p = along(route.points, unit.progress);
      const before = along(route.points, Math.max(0, unit.progress - 0.01));
      const after = along(route.points, Math.min(1, unit.progress + 0.01));
      tmpDirection.set(after[0] - before[0], after[1] - before[1], after[2] - before[2]);
      if (tmpDirection.lengthSq() < 0.00001) tmpDirection.set(1, 0, 0);
      tmpDirection.normalize();
      const spread = ((unit.id % 3) - 1) * (route.mode === 'air' ? 0.04 : 0.15);
      p[0] += tmpDirection.z * spread;
      p[2] -= tmpDirection.x * spread;
      if (route.mode === 'screw') {
        p[0] += Math.cos(unit.progress * 28) * 0.08;
        p[1] += Math.sin(unit.progress * 28) * 0.08;
      }
      dummy.position.set(p[0], p[1], p[2]);
      dummy.quaternion.setFromUnitVectors(upVector, tmpDirection);
      dummy.updateMatrix();
      bottleBody.setMatrixAt(index, dummy.matrix);
      dummy.position.addScaledVector(tmpDirection, 0.23);
      dummy.updateMatrix();
      bottleNeck.setMatrixAt(index, dummy.matrix);
      tmpColor.set(MATERIALS[unit.grade].color);
      bottleBody.setColorAt(index, tmpColor);
      bottleNeck.setColorAt(index, tmpColor);
      index += 1;
    }
    for (const mesh of [bottleBody, bottleNeck]) {
      mesh.count = index;
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    }
  }

  // 料仓存量与仓门
  for (const id of SILOS) {
    const fill = siloFills.get(id);
    const gate = siloGates.get(id);
    const amount = state.stocks[id].length;
    const p = center(id);
    if (fill) {
      const height = Math.max(0.04, (amount / CAPACITY) * 3.7);
      fill.scale.y = height;
      fill.position.set(p[0], 2.85 + height / 2, p[2]);
      fill.visible = amount > 0;
    }
    if (gate) gate.position.x = p[0] + (openGate(state) === id ? 0.7 : 0);
  }

  // 并联机械手
  {
    const unit = state.units.find((u) => u.stage === 'moving' && (u.route === 'robotGreen' || u.route === 'robotBrown'));
    const returning = state.armReturn;
    const drop = returning ? smallPosition(returning.grade) : null;
    const point: [number, number, number] = unit
      ? along(ROUTES[unit.route].points, unit.progress)
      : returning && drop
        ? along(
            [
              [drop[0], 1.9, drop[2]],
              [drop[0], 2.9, 5.9],
              [-4.475, 2.35, 5.329],
            ],
            returning.progress,
          )
        : [-4.475, 2.35, 5.329];
    if (deltaGripper) deltaGripper.position.set(point[0], point[1], point[2]);
    deltaBars.forEach((bar, index) => {
      const angle = (index * Math.PI * 2) / 3;
      const startX = -4.475 + Math.cos(angle) * 0.7;
      const startZ = 5.329 + Math.sin(angle) * 0.7;
      tmpDirection.set(point[0] - startX, point[1] - 3.45, point[2] - startZ);
      bar.position.set((startX + point[0]) / 2, (3.45 + point[1]) / 2, (startZ + point[2]) / 2);
      bar.scale.y = tmpDirection.length();
      bar.quaternion.setFromUnitVectors(upVector, tmpDirection.normalize());
    });
  }

  // 小仓位
  for (const grade of SMALL_GRADES) {
    const mesh = smallFills.get(grade);
    if (mesh) mesh.scale.y = Math.max(0.03, (state.stocks[grade].length / 24) * 0.5);
  }

  // 人工臂
  for (const arm of workerArms) arm.rotation.z = Math.sin(state.motion.E14 * 3) * 0.5;

  // 打包
  {
    const job = state.job;
    if (platen) {
      platen.visible = job?.phase === 'COMPRESSING';
      platen.position.x = 0.8 - (job?.phase === 'COMPRESSING' ? Math.sin((job.elapsed / 6) * Math.PI) * 1.4 : 0);
    }
    if (cartGroup) {
      cartGroup.visible = job?.phase === 'MANUAL_TRANSFER';
      if (job?.phase === 'MANUAL_TRANSFER') {
        const point = along(MANUAL_PATH, job.elapsed / 14);
        cartGroup.position.set(point[0], point[1], point[2]);
      }
    }
    if (balestack) {
      const visible = state.bales.slice(-24);
      visible.forEach((bale, index) => {
        const progress = Math.min(1, (state.time - bale.at) / 2);
        dummy.position.set(
          -5 + progress * (-1.2 - (index % 3)),
          1.6 + Math.floor(index / 6) * 0.7 * progress,
          1.85 + Math.floor((index % 6) / 3) * 1.1 * progress,
        );
        dummy.updateMatrix();
        balestack!.setMatrixAt(index, dummy.matrix);
        tmpColor.set(MATERIALS[bale.grade].color);
        balestack!.setColorAt(index, tmpColor);
      });
      balestack.count = visible.length;
      balestack.instanceMatrix.needsUpdate = true;
      if (balestack.instanceColor) balestack.instanceColor.needsUpdate = true;
    }
  }

  // 设备运动标记
  if (decanteryRotors) decanteryRotors.rotation.z = state.motion.E12 * 5;
  if (screwGroup) screwGroup.rotation.z = state.motion.E11 * 7;
  if (slatInstances) {
    let index = 0;
    for (const id of ['feed', 'manualIncline', 'incline2', 'chain', 'robotBelt'] as const) {
      const route = ROUTES[id];
      const clock = state.motion[route.device];
      for (let slot = 0; slot < 12; slot += 1) {
        const progress = (slot / 12 + clock * 0.12) % 1;
        const p = along(route.points, progress);
        const ahead = along(route.points, Math.min(1, progress + 0.01));
        dummy.position.set(p[0], p[1] - 0.18, p[2]);
        dummy.lookAt(ahead[0], ahead[1] - 0.18, ahead[2]);
        dummy.updateMatrix();
        slatInstances.setMatrixAt(index++, dummy.matrix);
      }
    }
    slatInstances.count = index;
    slatInstances.instanceMatrix.needsUpdate = true;
  }

  // 标签投影
  projectLabels(simulation, props.selected);

  void plantRoot;
}

function projectLabels(simulation: ActualSimulation, selected: EquipmentId) {
  if (!camera) return;
  const width = renderer?.domElement.clientWidth ?? 1;
  const height = renderer?.domElement.clientHeight ?? 1;
  const occupied: { x: number; y: number }[] = [];
  const vector = new Vector3();
  for (const [id, element] of labelElements) {
    let point: Point;
    if (id === 'cart') {
      const job = simulation.current.job;
      element.hidden = job?.phase !== 'MANUAL_TRANSFER';
      if (element.hidden || !job) continue;
      point = along(MANUAL_PATH, job.elapsed / 14);
      point[1] += 2;
    } else if ((SILOS as readonly string[]).includes(id)) {
      point = center(id as EquipmentId);
      point[1] = 7.3;
      element.hidden = false;
    } else {
      const grade = SMALL_GRADES.find((entry) => entry === id);
      if (!grade) continue;
      element.hidden = !(
        (selected === 'E14' && !['GREEN', 'BROWN'].includes(grade)) ||
        (selected === 'E15' && ['GREEN', 'BROWN'].includes(grade))
      );
      if (element.hidden) continue;
      point = smallPosition(grade);
      point[1] += 0.9;
    }
    vector.set(point[0], point[1], point[2]).project(camera);
    if (vector.z < -1 || vector.z > 1 || Math.abs(vector.x) > 1.1 || Math.abs(vector.y) > 1.1) {
      element.hidden = true;
      continue;
    }
    const x = Math.max(55, Math.min(width - 55, ((vector.x + 1) / 2) * width));
    let y = Math.max(70, ((1 - vector.y) / 2) * height);
    while (occupied.some((p) => Math.abs(p.x - x) < 100 && Math.abs(p.y - y) < 25)) y -= 27;
    occupied.push({ x, y });
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  }
}

function buildScene(target: Scene) {
  // 地面与网格
  const floor = new Mesh(
    new PlaneGeometry(cad.E01.bounds[3] - cad.E01.bounds[0], cad.E01.bounds[5] - cad.E01.bounds[2]),
    new MeshStandardMaterial({ color: '#b9c8ce', roughness: 0.95 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(cad.E01.center[0], 1.16, cad.E01.center[2]);
  target.add(floor);

  const grid = new GridHelper(50, 50, '#8ea6b1', '#b0c0c8');
  grid.position.set(cad.E01.center[0], 1.175, cad.E01.center[2]);
  target.add(grid);

  // 流向线
  pathLines = new Group();
  for (const [id, route] of Object.entries(ROUTES)) {
    const geometry = new BufferGeometry().setFromPoints(route.points.map((p) => new Vector3(p[0], p[1], p[2])));
    const line = new Line(
      geometry,
      new LineBasicMaterial({ color: routeColor(id), transparent: true, opacity: 0.35, depthTest: false }),
    );
    pathLines.add(line);
  }
  target.add(pathLines);

  // 瓶子（实例化）
  bottleBody = new InstancedMesh(new CapsuleGeometry(0.115, 0.24, 3, 8), new MeshStandardMaterial({ roughness: 0.25, metalness: 0.06, emissive: '#ffffff', emissiveIntensity: 0.15 }), 2048);
  bottleBody.frustumCulled = false;
  bottleBody.renderOrder = 4;
  target.add(bottleBody);
  bottleNeck = new InstancedMesh(new CylinderGeometry(0.045, 0.07, 0.12, 6), new MeshStandardMaterial({ roughness: 0.3 }), 2048);
  bottleNeck.frustumCulled = false;
  bottleNeck.renderOrder = 4;
  target.add(bottleNeck);

  // 料仓
  siloFills = new Map();
  siloGates = new Map();
  for (const id of SILOS) {
    const p = center(id);
    const color =
      id === 'E04' ? MATERIALS['3A'].color : id === 'E05' ? MATERIALS.MIXED.color : id === 'E03' ? '#e7bd73' : '#6cdcb2';
    const fill = new Mesh(new BoxGeometry(3.35, 1, 3.35), new MeshStandardMaterial({ color, transparent: true, opacity: 0.8, roughness: 0.9 }));
    fill.renderOrder = 2;
    fill.userData.deviceId = id;
    target.add(fill);
    siloFills.set(id, fill);
    if (id === 'E04' || id === 'E05') {
      const gate = new Mesh(new BoxGeometry(1, 0.08, 0.8), new MeshStandardMaterial({ color, metalness: 0.5, roughness: 0.4 }));
      gate.position.set(p[0], 2.24, 11.3);
      gate.renderOrder = 3;
      target.add(gate);
      siloGates.set(id, gate);
    }
  }

  // 并联机械手
  deltaBars = [];
  const robotGroup = new Group();
  for (let i = 0; i < 3; i += 1) {
    const bar = new Mesh(new CylinderGeometry(0.035, 0.035, 1, 6), new MeshStandardMaterial({ color: '#62d9b2', metalness: 0.55, roughness: 0.3 }));
    bar.renderOrder = 3;
    robotGroup.add(bar);
    deltaBars.push(bar);
  }
  const gripper = new Mesh(new BoxGeometry(0.3, 0.1, 0.28), new MeshStandardMaterial({ color: '#163c38' }));
  gripper.renderOrder = 4;
  robotGroup.add(gripper);
  deltaGripper = gripper;
  target.add(robotGroup);

  // 小仓位与人工
  smallFills = new Map();
  workerArms = [];
  for (const grade of SMALL_GRADES) {
    const p = smallPosition(grade);
    const node = new Group();
    node.position.set(p[0], p[1], p[2]);
    const wire = new Mesh(new BoxGeometry(0.66, 0.56, 0.6), new MeshStandardMaterial({ color: '#53727e', wireframe: true }));
    wire.position.y = 0.28;
    node.add(wire);
    const fill = new Mesh(new BoxGeometry(0.6, 1, 0.54), new MeshStandardMaterial({ color: MATERIALS[grade].color }));
    fill.position.y = 0.12;
    node.add(fill);
    smallFills.set(grade, fill);
    target.add(node);
  }
  for (const z of [-4.8, -3.3, -1.9]) {
    const worker = buildWorker([-4.25, 3.25, z]);
    workerArms.push(worker.arm);
    target.add(worker.node);
  }

  // 打包
  platen = new Mesh(new BoxGeometry(0.2, 1.2, 1.2), new MeshStandardMaterial({ color: '#5bdec0', metalness: 0.5 }));
  platen.position.set(0.8, 2.1, 1.84);
  platen.renderOrder = 3;
  target.add(platen);

  balestack = new InstancedMesh(new BoxGeometry(0.9, 0.65, 0.85), new MeshStandardMaterial({ roughness: 0.85 }), 24);
  balestack.frustumCulled = false;
  target.add(balestack);

  cartGroup = new Group();
  const cartBase = new Mesh(new BoxGeometry(0.9, 0.15, 1.2), new MeshStandardMaterial({ color: '#334e5d' }));
  cartBase.position.y = 0.25;
  cartGroup.add(cartBase);
  const cartLoad = new Mesh(new BoxGeometry(0.75, 0.7, 0.9), new MeshStandardMaterial({ color: '#dcb269' }));
  cartLoad.position.y = 0.65;
  cartGroup.add(cartLoad);
  const cartWorker = buildWorker([-0.7, 0, 0]);
  workerArms.push(cartWorker.arm);
  cartGroup.add(cartWorker.node);
  target.add(cartGroup);

  // 设备运动标记
  slatInstances = new InstancedMesh(new BoxGeometry(0.58, 0.035, 0.08), new MeshStandardMaterial({ color: '#4b9f8a', transparent: true, opacity: 0.65 }), 60);
  slatInstances.frustumCulled = false;
  slatInstances.renderOrder = 2;
  target.add(slatInstances);

  decanteryRotors = new Group();
  decanteryRotors.position.set(-8.05, 2.85, -3.3);
  const ring = new Mesh(new TorusGeometry(0.36, 0.025, 6, 20), new MeshStandardMaterial({ color: '#62dfb5' }));
  decanteryRotors.add(ring);
  const spoke = new Mesh(new BoxGeometry(0.68, 0.035, 0.035), new MeshStandardMaterial({ color: '#62dfb5' }));
  decanteryRotors.add(spoke);
  target.add(decanteryRotors);

  screwGroup = new Group();
  screwGroup.position.set(-7.415, 3.2, -7.5);
  screwGroup.rotation.x = -0.54;
  const screwRing = new Mesh(new TorusGeometry(0.2, 0.025, 6, 16), new MeshStandardMaterial({ color: '#62dfb5' }));
  screwGroup.add(screwRing);
  const screwBlade = new Mesh(new BoxGeometry(0.36, 0.025, 0.025), new MeshStandardMaterial({ color: '#62dfb5' }));
  screwGroup.add(screwBlade);
  target.add(screwGroup);

  // 拾取：点设备选中（把网格上溯到带 deviceId 的父节点）
  renderer!.domElement.addEventListener('click', handleClick);
}

function buildWorker(position: Point): { node: Group; arm: Group } {
  const node = new Group();
  node.position.set(position[0], position[1], position[2]);
  const head = new Mesh(new SphereGeometry(0.17, 10, 8), new MeshStandardMaterial({ color: '#e2c4aa' }));
  head.position.y = 1.45;
  node.add(head);
  const torso = new Mesh(new BoxGeometry(0.4, 0.58, 0.26), new MeshStandardMaterial({ color: '#dfaa53' }));
  torso.position.y = 0.98;
  node.add(torso);
  for (const x of [-0.12, 0.12]) {
    const leg = new Mesh(new BoxGeometry(0.14, 0.7, 0.16), new MeshStandardMaterial({ color: '#3b5262' }));
    leg.position.set(x, 0.35, 0);
    node.add(leg);
  }
  const arm = new Group();
  arm.position.set(0.24, 1.15, 0);
  const limb = new Mesh(new BoxGeometry(0.12, 0.52, 0.12), new MeshStandardMaterial({ color: '#e2c4aa' }));
  limb.position.set(0.2, -0.1, 0);
  limb.rotation.z = -0.9;
  arm.add(limb);
  node.add(arm);
  return { node, arm };
}

/** 点选：把命中的网格上溯到最近的设备根节点。 */
const raycaster = new Raycaster();
const pickPointer = new Vector2();
function handleClick(event: MouseEvent) {
  if (!camera || !scene || !renderer) return;
  const rect = renderer.domElement.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  pickPointer.set(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    -((event.clientY - rect.top) / rect.height) * 2 + 1,
  );
  raycaster.setFromCamera(pickPointer, camera);
  const hits = raycaster.intersectObject(scene, true);
  for (const hit of hits) {
    let node: Object3D | null = hit.object;
    while (node) {
      const name = node.name;
      if (name && name in EQUIPMENT) {
        emit('select', name as EquipmentId);
        return;
      }
      const tagged = node.userData.deviceId as string | undefined;
      if (tagged && tagged in EQUIPMENT) {
        emit('select', tagged as EquipmentId);
        return;
      }
      node = node.parent;
    }
  }
}

/** 加载实际 CAD 并进行批处理。 */
async function loadPlant(simulationTarget: Scene) {
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  try {
    const gltf = await loader.loadAsync(new URL('./actual-assets/plant-review.glb', document.baseURI).href);
    if (disposed) return;
    const batched = batchPlant(gltf.scene);
    batched.traverse((object) => {
      if (!/^E\d{2}$/.test(object.name)) return;
      equipmentRoots.set(object.name, object);
      const materials = new Map<string, MeshStandardMaterial>();
      object.traverse((child) => {
        if (!(child instanceof Mesh)) return;
        const originals = Array.isArray(child.material) ? child.material : [child.material];
        const copies = originals.map((original) => {
          if (!materials.has(original.uuid)) materials.set(original.uuid, (original as MeshStandardMaterial).clone());
          return materials.get(original.uuid)!;
        });
        child.material = Array.isArray(child.material) ? copies : copies[0];
      });
    });
    plantRoot = batched;
    simulationTarget.add(batched);
    loadState.value = '已加载真实 CAD · 17 个设备已对应';
  } catch {
    if (!disposed) loadState.value = 'CAD 加载失败，请检查 actual-assets/plant-review.glb；仿真与数据面板仍可使用。';
  }
}

/** 应用透视/厂房/选中态的材质与可见性。 */
function applyAppearance() {
  for (const [id, root] of equipmentRoots) {
    root.visible = id !== 'E01' || props.shell;
  }
  for (const [id, root] of equipmentRoots) {
    const stock = ['E02', 'E03', 'E04', 'E05'].includes(id);
    root.traverse((object) => {
      if (!(object instanceof Mesh)) return;
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        const standard = material as MeshStandardMaterial;
        standard.transparent = props.xray && id !== 'E01';
        standard.opacity = props.xray && id !== 'E01' ? (stock ? 0.16 : 0.78) : 1;
        standard.depthWrite = !standard.transparent;
        if (standard.emissive) {
          standard.emissive.set(id === props.selected ? '#1a6354' : '#000000');
          standard.emissiveIntensity = 0.32;
        }
        standard.roughness = Math.max(0.45, standard.roughness);
      }
    });
  }
}

onMounted(() => {
  const el = container.value;
  if (!el) return;
  try {
    renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio || 1));
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    el.appendChild(renderer.domElement);

    const width = el.clientWidth || 1;
    const height = el.clientHeight || 1;
    camera = new PerspectiveCamera(38, width / height, 0.1, 300);
    camera.position.set(26.5, 31.5, 33.6);

    scene = new Scene();
    scene.background = new Color('#d3dce0');
    scene.add(new HemisphereLight('#ffffff', '#758995', 2.2));
    const keyLight = new DirectionalLight('#fff3df', 2.7);
    keyLight.position.set(18, 30, 12);
    scene.add(keyLight);
    const rimLight = new DirectionalLight('#c4e3ff', 0.7);
    rimLight.position.set(-20, 12, -20);
    scene.add(rimLight);

    buildScene(scene);
    void loadPlant(scene);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 5;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI / 2.05;
    controls.target.set(-2.5, 2.5, -0.4);
    controls.addEventListener('start', () => {
      cameraClock = 3;
    });

    setCamera(props.view, props.selected, width, height);

    const loop = () => {
      if (disposed || !renderer || !scene || !camera) return;
      frameHandle = requestAnimationFrame(loop);
      const delta = 1 / 60;
      updateScene(props.simulation, delta);
      renderer.render(scene, camera);
    };
    loop();
  } catch {
    loadState.value = '三维画面暂不可用，仿真与面板仍可操作。';
  }
});

onBeforeUnmount(() => {
  disposed = true;
  cancelAnimationFrame(frameHandle);
  renderer?.domElement.removeEventListener('click', handleClick);
  controls?.dispose();
  scene?.traverse((node) => {
    const candidate = node as { geometry?: { dispose(): void }; material?: { dispose(): void } | { dispose(): void }[] };
    candidate.geometry?.dispose();
    const material = candidate.material;
    if (Array.isArray(material)) material.forEach((entry) => entry.dispose());
    else material?.dispose();
  });
  renderer?.dispose();
  if (renderer && renderer.domElement.parentNode === container.value) container.value?.removeChild(renderer.domElement);
});

watch(
  () => [props.xray, props.shell, props.selected] as const,
  () => applyAppearance(),
);

watch(
  () => props.paths,
  (visible) => {
    if (pathLines) pathLines.visible = visible;
  },
);

watch(
  () => [props.view, props.selected] as const,
  () => {
    if (renderer) {
      setCamera(props.view, props.selected, renderer.domElement.clientWidth || 1, renderer.domElement.clientHeight || 1);
    }
  },
);

const setLabel = (id: string) => (node: unknown) => {
  if (node instanceof HTMLElement) labelElements.set(id, node);
  else labelElements.delete(id);
};
</script>

<template>
  <div class="actual-scene">
    <div ref="container" class="actual-canvas" />
    <div ref="labelLayer" class="actual-projected-labels">
      <button
        v-for="id in SILOS"
        :key="id"
        :ref="setLabel(id)"
        class="silo-label"
        @click="emit('select', id)"
      >
        <i
          :style="{
            background:
              id === 'E04' ? MATERIALS['3A'].color : id === 'E05' ? MATERIALS.MIXED.color : id === 'E03' ? '#e7bd73' : '#6cdcb2',
          }"
        />
        {{ id }} · {{ id === 'E02' ? '三色中转' : id === 'E03' ? '杂瓶中转' : id === 'E04' ? '3A' : '杂色 PET' }}
      </button>
      <span v-for="grade in SMALL_GRADES" :key="grade" :ref="setLabel(grade)" class="stock-label" hidden>
        {{ MATERIALS[grade].name }}
      </span>
      <span :ref="setLabel('cart')" class="stock-label" hidden>人工转运至打包机</span>
    </div>
    <div class="model-status">
      <span />
      {{ loadState }}
    </div>
    <div class="scene-instruction">拖动旋转 · 滚轮缩放 · 点击设备聚焦</div>
  </div>
</template>
