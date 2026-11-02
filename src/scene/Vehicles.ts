import { CylinderGeometry, ConeGeometry, TorusGeometry, type Group, type Mesh, type MeshStandardMaterial, type Object3D } from 'three';
import type { DeviceId, SimState, TruckId } from '../types';
import { MATERIAL_META } from '../simulation/data';
import { pointAlong } from '../spatial/layout';
import { bar, boltRow, pipe, rod, slab } from './kit';
import { box, cylinder, group, mesh, sphere, standard } from './three';
import { glow, surface } from './materials';
import { PALETTE } from './palette';
import { deviceShell, type DeviceShellHandle } from './parts';
import { balePose, unitPose, type Pose } from './unitPositions';

const TRUCK_DEVICE: Record<TruckId, DeviceId> = {
  TRUCK_A: 'TRUCK_A',
  TRUCK_B: 'TRUCK_B',
  TRUCK_C: 'TRUCK_C',
};

const FORKLIFT_DEVICE = { FL1: 'FORKLIFT_1', FL2: 'FORKLIFT_2' } as const;

/** 六个车轮（三轴货车）：[x, y, z]。 */
const WHEEL_POSITIONS: [number, number, number][] = [
  [-1.15, 0.52, 2.6],
  [1.15, 0.52, 2.6],
  [-1.15, 0.52, -0.6],
  [1.15, 0.52, -0.6],
  [-1.15, 0.52, -2.6],
  [1.15, 0.52, -2.6],
];

export interface VehiclesHandle {
  update(state: SimState, reducedMotion: boolean): void;
  setSelected(selected: DeviceId | null): void;
  dispose(): void;
}

export interface AirPuffHandle {
  update(state: SimState, reducedMotion: boolean, delta: number): void;
}

/** 车轮：轮胎 + 轮辋 + 一圈螺栓。 */
function buildWheel(parent: Object3D, options: { position: [number, number, number]; radius?: number; width?: number; bolts?: number }): void {
  const { position, radius = 0.52, width = 0.36, bolts = 6 } = options;
  const node = group(parent, position);
  rod(node, radius, width, { axis: 'x', color: '#1b2126', kind: 'rubber', segments: 18 });
  rod(node, radius * 0.62, width + 0.03, { axis: 'x', color: PALETTE.alu, kind: 'aluminium', segments: 16, castShadow: false });
  rod(node, radius * 0.2, width + 0.06, { axis: 'x', color: PALETTE.steelDark, kind: 'steel', segments: 12, castShadow: false });
  for (let index = 0; index < bolts; index += 1) {
    const angle = (index / bolts) * Math.PI * 2;
    mesh(node, {
      geometry: new CylinderGeometry(0.028, 0.028, 0.03, 6),
      material: standard(surface('steel', PALETTE.steel)),
      position: [width / 2 + 0.02, Math.cos(angle) * radius * 0.42, Math.sin(angle) * radius * 0.42],
      rotation: [0, 0, Math.PI / 2],
      castShadow: false,
    });
  }
}

/** 厢式货车：驾驶室 + 导流罩 + 车厢（带波纹肋与后门）+ 底盘 + 六轮 + 灯组。 */
function buildTruck(parent: Object3D, id: TruckId): { root: Group; shell: DeviceShellHandle } {
  const root = group(parent);
  const shell = deviceShell(root, { device: TRUCK_DEVICE[id], size: [2.6, 3.6, 9] });
  const node = shell.node;
  const paint = id === 'TRUCK_C' ? PALETTE.plastic : '#dfe5e9';

  // 底盘大梁
  for (const side of [-1, 1]) {
    slab(node, [0.14, 0.24, 8.6], { radius: 0.02, position: [side * 0.92, 0.74, 0.2], color: PALETTE.steelDark, kind: 'steel' });
  }
  // 驾驶室
  slab(node, [2.4, 2.1, 2.2], { radius: 0.09, position: [0, 1.62, 3.3], color: paint, kind: 'steelPainted' });
  // 前挡风与侧窗
  slab(node, [2.1, 0.95, 0.08], {
    radius: 0.02,
    position: [0, 2.05, 4.36],
    rotation: [-0.12, 0, 0],
    color: PALETTE.glass,
    kind: 'glass',
    opacity: 0.72,
    castShadow: false,
  });
  for (const side of [-1, 1]) {
    slab(node, [0.06, 0.62, 1.1], { radius: 0.02, position: [side * 1.19, 1.98, 3.5], color: PALETTE.glass, kind: 'glass', opacity: 0.6, castShadow: false });
  }
  // 前脸：格栅、保险杠、雾灯
  slab(node, [2.06, 0.62, 0.08], { radius: 0.02, position: [0, 1.22, 4.4], color: PALETTE.panelFace, kind: 'steelPainted', castShadow: false });
  slab(node, [2.42, 0.3, 0.26], { radius: 0.04, position: [0, 0.72, 4.42], color: PALETTE.steelDark, kind: 'steelPainted' });
  for (const side of [-1, 1]) {
    mesh(node, { geometry: box(0.34, 0.2, 0.06), material: standard(glow(PALETTE.lampWarm, 1.6)), position: [side * 0.9, 0.98, 4.42], castShadow: false });
  }
  for (const side of [-1, 1]) {
    mesh(node, { geometry: box(0.2, 0.12, 0.05), material: standard(glow(PALETTE.lampCool, 1.4)), position: [side * 1.02, 0.74, 4.5], castShadow: false });
  }
  // 后视镜
  for (const side of [-1, 1]) {
    const mirror = group(node, [side * 1.34, 2.15, 4.1]);
    bar(mirror, [0, 0, 0], [side * 0.14, 0.2, -0.1], { thickness: 0.035, color: PALETTE.steelDark, castShadow: false });
    slab(mirror, [0.06, 0.4, 0.16], { radius: 0.02, position: [side * 0.16, 0.22, -0.1], color: PALETTE.panelFace, kind: 'plastic', castShadow: false });
  }
  // 导流罩
  slab(node, [2.2, 0.5, 1.3], { radius: 0.08, position: [0, 2.88, 2.9], color: paint, kind: 'steelPainted', castShadow: false });
  // 排气管与油箱
  rod(node, 0.07, 1.5, { axis: 'y', position: [1.28, 1.5, 2.05], color: PALETTE.alu, kind: 'aluminium', castShadow: false });
  rod(node, 0.28, 1.1, { axis: 'z', position: [-1.32, 0.78, 1.2], color: PALETTE.alu, kind: 'aluminium' });
  // 车厢
  slab(node, [2.5, 2.6, 6.2], { radius: 0.07, position: [0, 1.92, -0.9], color: id === 'TRUCK_C' ? '#cdd4d8' : '#c3ccd2', kind: 'steelPainted' });
  // 车厢波纹肋
  for (let index = 0; index < 7; index += 1) {
    const z = 1.8 - index * 0.9;
    for (const side of [-1, 1]) {
      slab(node, [0.06, 2.4, 0.14], { radius: 0, position: [side * 1.26, 1.92, z], color: PALETTE.wallPanelDark, kind: 'steelPainted', castShadow: false });
    }
  }
  // 后门与锁杆
  slab(node, [2.44, 2.44, 0.08], { radius: 0.03, position: [0, 1.92, -4.04], color: id === 'TRUCK_C' ? '#c1c9ce' : '#b7c0c6', kind: 'steelPainted' });
  for (const x of [-0.62, 0, 0.62]) {
    rod(node, 0.035, 2.3, { axis: 'y', position: [x, 1.92, -4.1], color: PALETTE.steel, kind: 'steel', castShadow: false });
  }
  // 侧裙与尾部反光条
  slab(node, [0.1, 0.5, 5.4], { radius: 0.02, position: [0, 0.85, -1.4], color: PALETTE.safetyYellow, kind: 'steelPainted', castShadow: false });
  for (const x of [-0.72, 0.72]) {
    mesh(node, {
      geometry: box(0.34, 0.22, 0.06),
      material: standard({ color: PALETTE.warningRed, emissive: PALETTE.warningRed, emissiveIntensity: 1.2, roughness: 0.4, toneMapped: false }),
      position: [x, 1.18, -4.06],
      castShadow: false,
    });
  }
  // 挡泥板
  for (const side of [-1, 1]) {
    slab(node, [0.4, 0.5, 0.05], { radius: 0.02, position: [side * 1.15, 0.35, -3.1], color: PALETTE.rubber, kind: 'rubber', castShadow: false });
  }
  // 车轮
  for (const position of WHEEL_POSITIONS) buildWheel(node, { position });
  return { root, shell };
}

/** 叉车：车身 + 配重 + 座椅/方向盘 + 护顶架 + 门架与货叉 + 警示灯。 */
function buildForklift(
  parent: Object3D,
  id: 'FL1' | 'FL2',
): { root: Group; shell: DeviceShellHandle; mast: Group; cargoBlock: Group; indicator: Mesh } {
  const root = group(parent);
  const shell = deviceShell(root, { device: FORKLIFT_DEVICE[id], size: [1.6, 2.7, 3.2] });
  const node = shell.node;

  // 车身与配重
  slab(node, [1.32, 0.92, 1.8], { radius: 0.08, position: [0, 0.9, -0.3], color: PALETTE.safetyYellow, kind: 'steelPainted' });
  slab(node, [1.26, 0.78, 0.66], { radius: 0.12, position: [0, 0.84, -1.42], color: PALETTE.steelDark, kind: 'steelPainted' });
  boltRow(node, { count: 4, spacing: 0.24, position: [0, 0.6, -1.76], radius: 0.03 });
  // 踏板与侧向护板
  slab(node, [1.4, 0.1, 0.9], { radius: 0.03, position: [0, 0.44, 0.2], color: PALETTE.steelDark, kind: 'steelPainted', castShadow: false });
  // 座椅与方向盘
  slab(node, [0.5, 0.16, 0.5], { radius: 0.05, position: [0, 1.4, -0.62], color: PALETTE.panelFace, kind: 'plastic' });
  slab(node, [0.5, 0.5, 0.12], { radius: 0.05, position: [0, 1.66, -0.86], color: PALETTE.panelFace, kind: 'plastic' });
  rod(node, 0.06, 0.7, { axis: 'y', position: [0, 1.5, -0.05], rotation: [0.5, 0, 0], color: PALETTE.steelDark, kind: 'steel', castShadow: false });
  mesh(node, { geometry: new TorusGeometry(0.16, 0.03, 6, 16), material: standard({ color: '#1e262b', roughness: 0.6 }), position: [0, 1.72, 0.18], rotation: [1.1, 0, 0], castShadow: false });
  // 护顶架
  for (const [x, z] of [
    [-0.62, -1.02],
    [0.62, -1.02],
    [-0.62, 0.42],
    [0.62, 0.42],
  ]) {
    bar(node, [x, 1.36, z], [x * 0.82, 2.34, z], { thickness: 0.075, color: PALETTE.steelDark, kind: 'steel', castShadow: false });
  }
  slab(node, [1.5, 0.07, 1.7], { radius: 0.03, position: [0, 2.36, -0.3], color: PALETTE.steelDark, kind: 'steelPainted' });
  for (const x of [-1, 0, 1]) {
    slab(node, [0.08, 0.05, 1.6], { radius: 0, position: [x * 0.5, 2.32, -0.3], color: PALETTE.steel, kind: 'steel', castShadow: false });
  }
  // 警示灯
  rod(node, 0.045, 0.14, { axis: 'y', position: [0, 2.45, -1.0], color: PALETTE.steelDark, kind: 'steel', castShadow: false });
  mesh(node, { geometry: sphere(0.09, 12, 10), material: standard(glow(PALETTE.lampWarm, 2.6)), position: [0, 2.56, -1.0], castShadow: false });
  // 门架与货叉
  const mast = group(node, [0, 0.9, 1.05]);
  for (const side of [-1, 1]) {
    bar(mast, [side * 0.62, -0.5, 0], [side * 0.62, 1.15, 0], { thickness: 0.11, color: PALETTE.steelDark, kind: 'steel' });
  }
  for (const y of [-0.5, 0.1, 0.7]) {
    bar(mast, [-0.62, y, 0], [0.62, y, 0], { thickness: 0.07, color: PALETTE.steel, kind: 'steel', castShadow: false });
  }
  rod(mast, 0.07, 1.3, { axis: 'y', position: [0, 0.3, 0.16], color: PALETTE.machineTrim, kind: 'steelPainted', castShadow: false });
  pipe(mast, [-0.5, 1.1, 0.1], [-0.5, -0.35, 0.1], { radius: 0.018, color: PALETTE.alu, kind: 'aluminium', castShadow: false });
  // 货叉架与货叉
  slab(mast, [1.3, 0.5, 0.08], { radius: 0.03, position: [0, -0.62, 0.1], color: PALETTE.steel, kind: 'steel' });
  for (const side of [-1, 1]) {
    slab(mast, [0.16, 0.06, 1.05], { radius: 0.02, position: [side * 0.42, -0.84, 0.6], color: PALETTE.alu, kind: 'aluminium', castShadow: false });
  }
  // 载货块（可见性由 update 控制）
  const cargoBlock = group(mast, [0, -0.5, 0.55]);
  slab(cargoBlock, [1.15, 0.58, 0.85], { radius: 0.05, color: '#8a6a3a', kind: 'cardboard' });
  cargoBlock.visible = false;
  // 车轮：前大后小
  buildWheel(node, { position: [-0.72, 0.42, 1.0], radius: 0.42, width: 0.3, bolts: 5 });
  buildWheel(node, { position: [0.72, 0.42, 1.0], radius: 0.42, width: 0.3, bolts: 5 });
  buildWheel(node, { position: [-0.62, 0.3, -1.05], radius: 0.3, width: 0.24, bolts: 4 });
  buildWheel(node, { position: [0.62, 0.3, -1.05], radius: 0.3, width: 0.24, bolts: 4 });
  // 顶灯指示载货状态
  const indicator = mesh(root, {
    geometry: box(0.9, 0.16, 0.24),
    material: standard({ color: PALETTE.steelBlue, emissive: '#000000', emissiveIntensity: 0, roughness: 0.4, metalness: 0.1, toneMapped: false }),
    position: [0, 2.78, -0.75],
    castShadow: false,
  });
  return { root, shell, mast, cargoBlock, indicator };
}

/** 打包块（主体 + 捆扎带）与移动中的物料包：按仿真 ID 动态增删网格。 */

/**
 * 货车、叉车、打包块、物料包与气吹特效。
 *
 * React 版用 `state.units.map(...)` / `state.bales.map(...)` 声明式渲染，
 * 数量变化时由 fiber 增删节点；命令式版改为「按 ID 池化」：
 * 每帧遍历仿真数组，缺的建、多余的隐藏。这样帧循环里没有 DOM 或 VDOM 开销。
 */
export function buildVehicles(parent: Object3D): VehiclesHandle {
  const root = group(parent);

  const trucks = (['TRUCK_A', 'TRUCK_B', 'TRUCK_C'] as TruckId[]).map((id) => ({ id, ...buildTruck(root, id) }));
  const forklifts = (['FL1', 'FL2'] as const).map((id) => ({ id, ...buildForklift(root, id) }));

  // 打包块主体
  const baleBodies = new Map<number, Mesh>();
  const baleStraps = new Map<number, Group>();
  const baleLayer = group(root);
  const strapLayer = group(root);

  // 移动中的物料包
  const unitNodes = new Map<number, Group>();
  const unitLayer = group(root);

  const makeBaleBody = (material: keyof typeof MATERIAL_META): Mesh =>
    mesh(baleLayer, {
      geometry: box(0.95, 0.72, 0.85),
      material: standard({
        color: MATERIAL_META[material].color,
        roughness: 0.72,
        metalness: 0.05,
        envMapIntensity: 0.7,
      }),
    });

  const makeBaleStraps = (): Group => {
    const node = group(strapLayer);
    for (const z of [-0.26, 0.26]) {
      mesh(node, { geometry: box(0.98, 0.76, 0.05), material: standard({ color: '#2f3a40', roughness: 0.5, metalness: 0.35 }), position: [0, 0, z], castShadow: false });
    }
    return node;
  };

  const makeUnit = (kind: string, origin: keyof typeof MATERIAL_META, material: keyof typeof MATERIAL_META): Group => {
    const node = group(unitLayer);
    const color = MATERIAL_META[material].color;
    const tint = MATERIAL_META[origin].color;
    if (kind === 'PLASTIC') {
      mesh(node, { geometry: cylinder(0.16, 0.18, 0.42, 12), material: standard({ color: tint, roughness: 0.42, metalness: 0.06 }) });
      for (const y of [-0.11, 0.11]) {
        mesh(node, { geometry: cylinder(0.185, 0.185, 0.035, 12), material: standard({ color: '#333d43', roughness: 0.6 }), position: [0, y, 0], castShadow: false });
      }
    } else if (kind === 'TEXTILE') {
      mesh(node, { geometry: box(0.62, 0.24, 0.52), material: standard({ color: tint, roughness: 0.94, envMapIntensity: 0.35 }) });
      mesh(node, { geometry: box(0.64, 0.02, 0.12), material: standard({ color: '#6c767c', roughness: 0.8 }), position: [0, 0.125, 0], castShadow: false });
    } else {
      mesh(node, { geometry: box(0.6, 0.48, 0.5), material: standard({ color: color, roughness: 0.88, envMapIntensity: 0.4 }) });
      for (const z of [-0.22, 0.22]) {
        mesh(node, { geometry: box(0.62, 0.5, 0.04), material: standard({ color: '#4a5459', roughness: 0.6 }), position: [0, 0, z], castShadow: false });
      }
    }
    return node;
  };

  const applyPose = (node: Object3D, pose: Pose): void => {
    node.visible = pose.visible;
    node.position.set(pose.x, pose.y, pose.z);
    node.rotation.y = pose.rotY;
  };

  return {
    update(state: SimState) {
      // 货车：在门外等待时就不画。
      for (const truck of trucks) {
        const record = state.trucks[truck.id];
        truck.root.visible = record.status !== 'OFF_SITE';
        truck.root.position.set(record.x, 0, record.z);
      }
      // 叉车：车头朝行进方向，门架随装卸高度升降。
      for (const forklift of forklifts) {
        const record = state.forklifts[forklift.id];
        forklift.root.position.set(record.x, 0, record.z);
        if (record.route.length > 1) {
          const ahead = pointAlong(record.route, record.travelled + 0.8);
          const angle = Math.atan2(ahead.x - record.x, ahead.z - record.z);
          if (Number.isFinite(angle) && (ahead.x !== record.x || ahead.z !== record.z)) {
            forklift.root.rotation.y += (angle - forklift.root.rotation.y) * 0.08;
          }
        }
        const lifting = record.status === 'LOADING' || record.status === 'UNLOADING';
        const target = lifting ? 0.25 : record.loaded ? 0.45 : 0.9;
        forklift.mast.position.y += (target - forklift.mast.position.y) * 0.08;
        forklift.cargoBlock.visible = record.loaded;
        const idle = record.cargoLabel === '空载';
        const material = forklift.indicator.material as MeshStandardMaterial;
        material.color.set(idle ? PALETTE.steelBlue : PALETTE.ledRun);
        material.emissive.set(idle ? '#000000' : PALETTE.ledRun);
        material.emissiveIntensity = idle ? 0 : 1.6;
      }
      // 打包块：池化增删
      const seenBales = new Set<number>();
      for (const bale of state.bales) {
        seenBales.add(bale.id);
        if (!baleBodies.has(bale.id)) baleBodies.set(bale.id, makeBaleBody(bale.material));
        if (!baleStraps.has(bale.id)) baleStraps.set(bale.id, makeBaleStraps());
        const pose = balePose(bale, bale.id % 4);
        applyPose(baleBodies.get(bale.id)!, pose);
        applyPose(baleStraps.get(bale.id)!, pose);
      }
      for (const [id, node] of baleBodies) {
        if (!seenBales.has(id)) node.visible = false;
      }
      for (const [id, node] of baleStraps) {
        if (!seenBales.has(id)) node.visible = false;
      }
      // 物料包：槽位计数与场景分配一致
      const counters = new Map<string, number>();
      const seenUnits = new Set<number>();
      for (const unit of state.units) {
        const slot = counters.get(unit.stage) ?? 0;
        counters.set(unit.stage, slot + 1);
        seenUnits.add(unit.id);
        if (!unitNodes.has(unit.id)) unitNodes.set(unit.id, makeUnit(unit.kind, unit.origin, unit.material));
        applyPose(unitNodes.get(unit.id)!, unitPose(unit, state, slot));
      }
      for (const [id, node] of unitNodes) {
        if (!seenUnits.has(id)) node.visible = false;
      }
    },
    setSelected(selected: DeviceId | null) {
      // 每辆车/叉车都有自己的 DeviceShell，选中时显示包围盒描边（与设备外壳同一套机制）。
      for (const truck of trucks) truck.shell.setSelected(TRUCK_DEVICE[truck.id] === selected);
      for (const forklift of forklifts) forklift.shell.setSelected(FORKLIFT_DEVICE[forklift.id] === selected);
    },
    dispose() {
      root.traverse((node) => {
        const candidate = node as { geometry?: { dispose(): void }; material?: { dispose(): void } | { dispose(): void }[] };
        candidate.geometry?.dispose();
        const material = candidate.material;
        if (Array.isArray(material)) material.forEach((entry) => entry.dispose());
        else material?.dispose();
      });
    },
  };
}

/** 气吹特效：锥体随喷气强度缩放与淡出。 */
export function buildAirPuff(parent: Object3D, options: { device: 'SORTER_1' | 'SORTER_2'; position: [number, number, number] }): AirPuffHandle {
  const node = group(parent, options.position);
  const cone = mesh(node, {
    geometry: new ConeGeometry(0.42, 0.7, 12, 1, true),
    material: standard({ color: '#cfe9f5', emissive: '#8fd0f0', emissiveIntensity: 0.6, transparent: true, opacity: 0.45, side: 2 }),
    rotation: [Math.PI, 0, 0],
  });
  let intensity = 0;
  return {
    update(state: SimState, reducedMotion: boolean, delta: number) {
      const active = state.puffs.some((puff) => puff.device === options.device);
      intensity = active ? 1 : Math.max(0, intensity - delta * 2.6);
      const value = reducedMotion ? (active ? 0.6 : 0) : intensity;
      cone.scale.set(1, Math.max(0.001, value), 1);
      (cone.material as MeshStandardMaterial).opacity = value * 0.5;
      cone.visible = value > 0.02;
    },
  };
}
