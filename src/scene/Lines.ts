import { TorusGeometry, type Group, type Mesh, type MeshStandardMaterial, type Object3D } from 'three';
import type { DeviceId, SiloId, SimState, ViewMode } from '../types';
import { MATERIAL_META, SILO_CONFIG } from '../simulation/data';
import { PLANT, PLASTIC_BELTS, SCALE, SILO_POINTS, TEXTILE_BELTS } from '../spatial/layout';
import {
  bar,
  boltRow,
  cabinet,
  ladder,
  legs,
  louver,
  motor,
  pallet,
  pipe,
  rod,
  slab,
  statusLamp,
} from './kit';
import { box, cylinder, group, mesh, standard } from './three';
import { surface } from './materials';
import { PALETTE } from './palette';
import { beltMesh, deviceShell, type DeviceShellHandle } from './parts';

const SILO_IDS: SiloId[] = ['SILO_PET', 'SILO_HDPE', 'SILO_COTTON', 'SILO_POLYESTER', 'SILO_BLEND'];

type BeltSpec = { from: { x: number; z: number }; to: { x: number; z: number }; fromY: number; toY: number };

/** 每帧回调：从仿真读状态并改姿态。 */
export interface LinesFrameState {
  state: SimState;
  timeInShift: number;
  reducedMotion: boolean;
}

export interface LinesHandle {
  /** 每帧更新（由 SceneHost 的帧循环调用）。 */
  update(frame: LinesFrameState): void;
  setSelected(selected: DeviceId | null): void;
  setViewMode(mode: ViewMode): void;
  dispose(): void;
}

/**
 * 输送机：带面 + 侧挡边 + 头尾滚筒 + 托辊 + 支腿 + 驱动电机 + 头部导料板。
 * 带面变换来自 `beltMesh`，与仿真的行程、物料高度同源，所以物料永远压在带面上。
 */
function conveyorBelt(parent: Object3D, spec: BeltSpec, options: { motor?: boolean; legs?: boolean } = {}): void {
  const { motor: withMotor = true, legs: withLegs = true } = options;
  const belt = beltMesh(spec.from, spec.to, spec.fromY, spec.toY, 0.62);
  const rollerCount = Math.max(2, Math.round(belt.length / 1.3));
  const legCount = Math.max(2, Math.round(belt.length / 2.6));

  const root = group(parent, belt.position, [0, belt.yaw, 0]);
  const tilted = group(root, undefined, [belt.pitch, 0, 0]);

  // 带面：橡胶带
  slab(tilted, [0.62, 0.1, belt.length], { radius: 0.02, color: PALETTE.rubberBelt, kind: 'rubber' });
  // 两侧挡边
  for (const side of [-1, 1]) {
    slab(tilted, [0.07, 0.24, belt.length], {
      radius: 0.02,
      position: [(side * 0.62) / 2 - side * 0.02, 0.13, 0],
      color: PALETTE.steelBlue,
      kind: 'steelPainted',
    });
  }
  // 机架纵梁
  for (const side of [-1, 1]) {
    rod(tilted, 0.045, belt.length, {
      axis: 'z',
      position: [(side * (0.62 + 0.14)) / 2, -0.1, 0],
      color: PALETTE.steelDark,
      kind: 'steel',
      castShadow: false,
    });
  }
  // 托辊
  for (let index = 0; index < rollerCount; index += 1) {
    const z = -belt.length / 2 + (belt.length * (index + 0.5)) / rollerCount;
    rod(tilted, 0.055, 0.62 + 0.1, { axis: 'x', position: [0, -0.1, z], color: PALETTE.alu, kind: 'aluminium', castShadow: false });
  }
  // 头尾滚筒
  for (const end of [-1, 1]) {
    rod(tilted, 0.13, 0.62 + 0.16, {
      axis: 'x',
      position: [0, -0.02, (end * belt.length) / 2],
      color: PALETTE.alu,
      kind: 'aluminium',
      castShadow: false,
    });
  }
  // 支腿：从带面下沿垂直落地。倾斜带上每条腿按各自的带面高度取长度，
  // 否则斜带会整段悬空（以前把腿关掉了，爬坡机看着像浮在空中）。
  if (withLegs) {
    for (let index = 0; index < legCount; index += 1) {
      const z = -belt.length / 2 + (belt.length * (index + 0.5)) / legCount;
      const deckY = belt.position[1] - Math.sin(belt.pitch) * z;
      const legHeight = Math.max(0.3, deckY - 0.14);
      const legNode = group(tilted, [0, -0.14, z]);
      for (const side of [-1, 1]) {
        rod(legNode, 0.055, legHeight, {
          position: [(side * (0.62 + 0.12)) / 2, -legHeight / 2, 0],
          color: PALETTE.steelDark,
          kind: 'steel',
          castShadow: false,
        });
      }
      bar(legNode, [-((0.62 + 0.12) / 2), -legHeight * 0.55, 0], [(0.62 + 0.12) / 2, -legHeight * 0.55, 0], {
        thickness: 0.045,
        color: PALETTE.steelDark,
        castShadow: false,
      });
      slab(legNode, [0.62 + 0.3, 0.05, 0.16], {
        radius: 0,
        position: [0, -legHeight + 0.02, 0],
        color: PALETTE.steelDark,
        kind: 'steel',
        castShadow: false,
      });
    }
  }
  // 驱动电机（放在机头一侧）
  if (withMotor) {
    motor(tilted, {
      radius: 0.15,
      length: 0.4,
      axis: 'x',
      position: [(0.62 + 0.42) / 2, -0.02, belt.length / 2 - 0.5],
      color: PALETTE.machineBodyDark,
    });
  }
  // 头部导料板：把物料收进料仓
  slab(tilted, [0.62 - 0.1, 0.5, 0.03], {
    radius: 0.02,
    position: [0, -0.22, belt.length / 2 + 0.16],
    rotation: [0.6, 0, 0],
    color: PALETTE.steelBlue,
    kind: 'steelPainted',
    castShadow: false,
  });
}

/** 料仓：筒体 + 加强环 + 锥底 + 支腿 + 爬梯 + 料位灯带 + 顶部除尘与进料管。 */
function buildSilo(options: { id: SiloId; shell: DeviceShellHandle }): { fill: Mesh; strip: Mesh; height: number } {
  const { id, shell } = options;
  const material = SILO_CONFIG[id].material;
  const color = MATERIAL_META[material].color;
  const radius = 0.62;
  const height = 2.1;

  const node = shell.node;

  // 支腿与底环
  legs(node, { width: 1.1, depth: 1.1, height: 0.42, color: PALETTE.steelDark, thickness: 0.075, brace: true });
  rod(node, 0.68, 0.06, { axis: 'y', position: [0, 0.42, 0], color: PALETTE.steelDark, kind: 'steel', castShadow: false });
  // 锥底
  mesh(node, {
    geometry: cylinder(radius, 0.26, 0.42, 20, true),
    material: standard(surface('steelPainted', PALETTE.steelBlue)),
    position: [0, 0.66, 0],
  });
  // 筒体（半透明，能看到内部物料）
  mesh(node, {
    geometry: cylinder(radius, radius, height, 22, true),
    material: standard(surface('glass', '#7d98a6', { opacity: 0.3, side: 2 })),
    position: [0, 0.87 + height / 2, 0],
  });
  // 加强环
  for (const ratioY of [0.25, 0.62, 0.95]) {
    mesh(node, {
      geometry: new TorusGeometry(radius + 0.02, 0.035, 6, 24),
      material: standard(surface('steel', PALETTE.steel)),
      position: [0, 0.87 + height * ratioY, 0],
      castShadow: false,
    });
  }
  // 内部料位柱
  const fill = mesh(node, {
    geometry: cylinder(radius - 0.07, radius - 0.07, height - 0.18, 20),
    material: standard(surface('plastic', color)),
    position: [0, 0.9, 0],
  });
  fill.scale.y = 0.001;
  // 外侧料位灯带：数字孪生式的液位指示
  const strip = mesh(node, {
    geometry: box(0.06, height - 0.24, 0.11),
    material: standard(surface('lamp', color, { emissive: color, emissiveIntensity: 1.9 })),
    position: [radius + 0.05, 0.12, 0],
  });
  strip.scale.y = 0.001;
  slab(node, [0.1, height - 0.18, 0.16], {
    radius: 0,
    position: [radius + 0.05, 0.87 + height / 2 - 0.06, 0],
    color: PALETTE.panelFace,
    kind: 'plastic',
    castShadow: false,
  });
  // 顶部封头、除尘器与进料弯管
  slab(node, [0.98, 0.08, 0.98], { radius: 0.03, position: [0, 0.87 + height, 0], color: PALETTE.steelBlue, kind: 'steelPainted', castShadow: false });
  slab(node, [0.5, 0.36, 0.5], {
    radius: 0.04,
    position: [0.24, 0.87 + height + 0.24, 0.2],
    color: PALETTE.machineTrim,
    kind: 'steelPainted',
    castShadow: false,
  });
  louver(node, { width: 0.4, height: 0.24, slats: 4, position: [0.24, 0.87 + height + 0.24, 0.46], color: PALETTE.steelDark });
  pipe(node, [-radius - 0.5, 0.87 + height + 0.5, 0], [-0.1, 0.87 + height + 0.06, 0], { radius: 0.13, color: PALETTE.alu, kind: 'aluminium' });
  // 侧面爬梯与人孔
  ladder(node, { height: height - 0.2, width: 0.34, position: [-radius - 0.12, 0.9, 0.18], rotation: [0, Math.PI / 2, 0] });
  rod(node, 0.13, 0.05, { axis: 'z', position: [0.1, 1.5, radius + 0.02], color: PALETTE.alu, kind: 'aluminium', castShadow: false });
  boltRow(node, { count: 5, spacing: 0.1, position: [0.1, 1.5, radius + 0.06], rotation: [0, 0, Math.PI / 2], radius: 0.02 });
  // 支腿上的称重传感器
  slab(node, [0.18, 0.1, 0.18], { radius: 0.02, position: [0.55, 0.16, 0.55], color: PALETTE.safetyYellow, kind: 'steelPainted', castShadow: false });

  statusLamp(node, { status: 'RUNNING', position: [radius + 0.05, 0.87 + height + 0.1, 0.2] });
  return { fill, strip, height };
}

const BALER_OF_BALE = (source: string): DeviceId =>
  source === 'BALER_CARDBOARD' ? 'BALER_CARDBOARD' : source === 'SILO_PET' || source === 'SILO_HDPE' ? 'BALER_PLASTIC' : 'BALER_TEXTILE';

/** 打包机：压缩室 + 料斗 + 液压站 + 油管 + 操作柜 + 安全门 + 出包导轨。 */
function buildBaler(parent: Object3D, options: { device: DeviceId; color: string }): { plunger: Group } {
  const { color } = options;
  const node = parent;
  // 底座
  slab(node, [1.7, 0.12, 1.7], { radius: 0.03, position: [0, 0.06, -0.3], color: PALETTE.steelDark, kind: 'steelPainted' });
  // 压缩室
  slab(node, [1.5, 0.9, 1.5], { radius: 0.05, position: [0, 0.57, -0.3], color: PALETTE.machineBodyDark, kind: 'steelPainted' });
  // 压缩室外的加强筋
  for (const z of [-0.55, 0.55]) {
    slab(node, [1.56, 0.1, 0.09], { radius: 0, position: [0, 0.57, z - 0.3], color: PALETTE.machineTrim, kind: 'steelPainted', castShadow: false });
  }
  boltRow(node, { count: 5, spacing: 0.22, position: [0, 0.16, 0.46], radius: 0.024 });
  // 顶部料斗（四片斜板围成）
  const hopper: { pos: [number, number, number]; rot: [number, number, number]; size: [number, number, number] }[] = [
    { pos: [0, 1.12, 0.42], rot: [0.5, 0, 0], size: [1.3, 0.5, 0.04] },
    { pos: [0, 1.12, -1.02], rot: [-0.5, 0, 0], size: [1.3, 0.5, 0.04] },
    { pos: [0.68, 1.12, -0.3], rot: [0, 0, -0.5], size: [0.04, 0.5, 1.1] },
    { pos: [-0.68, 1.12, -0.3], rot: [0, 0, 0.5], size: [0.04, 0.5, 1.1] },
  ];
  for (const panel of hopper) {
    slab(node, panel.size, { radius: 0.02, position: panel.pos, rotation: panel.rot, color: PALETTE.steelBlue, kind: 'steelPainted' });
  }
  // 顶盖
  slab(node, [1.6, 0.12, 1.6], { radius: 0.03, position: [0, 1.05, -0.3], color, kind: 'steelPainted' });
  // 液压推头（随压制动画横移）
  const plunger = group(node, [0.62, 0.57, -0.3]);
  slab(plunger, [0.16, 0.62, 1.1], { radius: 0.02, color: PALETTE.alu, kind: 'aluminium' });
  rod(plunger, 0.07, 0.5, { axis: 'x', position: [0.32, 0, 0], color: PALETTE.steel, kind: 'steel', castShadow: false });
  // 液压站：油箱 + 电机 + 压力表
  rod(node, 0.26, 0.5, { axis: 'y', position: [-1.05, 0.35, 0.55], color: PALETTE.machineBody, kind: 'steelPainted' });
  motor(node, { radius: 0.13, length: 0.32, axis: 'y', position: [-1.05, 0.78, 0.55], color: PALETTE.machineBodyDark });
  rod(node, 0.09, 0.05, { axis: 'z', position: [-1.05, 0.62, 0.82], color: PALETTE.stripeWhite, kind: 'steelPainted', castShadow: false });
  pipe(node, [-1.05, 0.66, 0.66], [-0.62, 0.95, 0.2], { radius: 0.045, color: PALETTE.steelDark });
  pipe(node, [-0.8, 0.35, 0.62], [-0.5, 0.5, 0.35], { radius: 0.035, color: PALETTE.steelDark });
  // 操作柜
  cabinet(node, { size: [0.6, 1.35, 0.42], position: [1.16, 0.7, 0.5], rotation: [0, -0.35, 0] });
  statusLamp(node, { status: 'IDLE', position: [1.16, 1.55, 0.5], rotation: [0, -0.35, 0] });
  // 安全门与出包导轨
  slab(node, [0.05, 0.8, 1.2], { radius: 0.02, position: [0.78, 0.6, -0.3], color: PALETTE.safetyYellow, kind: 'steelPainted' });
  for (const offset of [-0.28, 0.28]) {
    bar(node, [-0.76, 0.22, -0.3 + offset], [-2.2, 0.18, -0.3 + offset], { thickness: 0.08, color: PALETTE.steel, kind: 'steel', castShadow: false });
  }
  return { plunger };
}

/** 机械臂：底座 + 两级臂 + 腕部 + 双指夹爪 + 线缆包。 */
function buildRobotArm(parent: Object3D): { boom: Group; wrist: Group } {
  const node = parent;
  rod(node, 0.42, 0.12, { axis: 'y', position: [0, 0.06, 0], color: PALETTE.steelDark, kind: 'steel' });
  rod(node, 0.3, 0.5, { axis: 'y', position: [0, 0.37, 0], color: PALETTE.machineBody, kind: 'steelPainted' });
  boltRow(node, { count: 6, spacing: 0.16, position: [0, 0.12, 0.3], radius: 0.026 });
  slab(node, [0.5, 0.42, 0.36], { radius: 0.04, position: [0, 0.62, 0], color: PALETTE.machineBodyDark, kind: 'steelPainted' });

  const boom = group(node, [0, 0.6, 0]);
  // 肩关节
  rod(boom, 0.14, 0.34, { axis: 'z', position: [0, 0.12, 0], color: PALETTE.alu, kind: 'aluminium' });
  // 第一级臂
  slab(boom, [0.24, 1.7, 0.24], { radius: 0.05, position: [0, 0.98, 0], color: PALETTE.machineTrim, kind: 'steelPainted' });
  bar(boom, [-0.2, 0.3, 0], [0.2, 1.6, 0], { thickness: 0.05, color: PALETTE.steelDark, castShadow: false });
  bar(boom, [0.2, 0.3, 0], [-0.2, 1.6, 0], { thickness: 0.05, color: PALETTE.steelDark, castShadow: false });

  const wrist = group(boom, [0, 1.8, 0]);
  // 肘关节
  rod(wrist, 0.12, 0.3, { axis: 'z', color: PALETTE.alu, kind: 'aluminium' });
  // 第二级臂
  slab(wrist, [0.2, 0.2, 0.8], { radius: 0.04, position: [0.45, 0, 0], rotation: [0, 0, Math.PI / 2], color: PALETTE.machineTrim, kind: 'steelPainted' });
  // 腕部与夹爪
  slab(wrist, [0.26, 0.24, 0.26], { radius: 0.04, position: [0.86, -0.04, 0], color: PALETTE.machineBodyDark, kind: 'steelPainted' });
  for (const side of [-1, 1]) {
    slab(wrist, [0.06, 0.34, 0.14], { radius: 0.02, position: [0.98, -0.26, side * 0.12], color: PALETTE.safetyYellow, kind: 'steelPainted' });
  }
  rod(wrist, 0.05, 0.24, { axis: 'x', position: [0.86, -0.24, 0], color: PALETTE.alu, kind: 'aluminium', castShadow: false });
  // 线缆包
  pipe(wrist, [0.3, 0.06, 0.12], [0.8, -0.2, 0.12], { radius: 0.035, color: '#22282c', kind: 'rubber', castShadow: false });
  pipe(wrist, [0.3, 0.06, -0.12], [0.8, -0.2, -0.12], { radius: 0.035, color: '#22282c', kind: 'rubber', castShadow: false });
  // 控制柜
  cabinet(node, { size: [0.55, 1.2, 0.4], position: [-0.95, 0.6, 0.35], screen: false });
  return { boom, wrist };
}

/** 塑料瓶线、纺织线、料仓、打包机与两条线的辅助设备。 */
export function buildLines(parent: Object3D): LinesHandle {
  const root = group(parent);
  const shells: { device: DeviceId; shell: DeviceShellHandle }[] = [];
  const siloFills: { id: SiloId; fill: Mesh; strip: Mesh; height: number }[] = [];
  const plungers: { device: DeviceId; node: Group }[] = [];
  const valveGroups: ValveGroup[] = [];
  let armBoom: Group | null = null;
  let armWrist: Group | null = null;
  let feederTray: Group | null = null;
  const track = (device: DeviceId, shell: DeviceShellHandle) => {
    shells.push({ device, shell });
    return shell;
  };

  /* --- 塑料瓶分拣线：振动上料机 --- */
  const feederShell = track(
    'VIB_FEEDER',
    deviceShell(root, { device: 'VIB_FEEDER', size: [2.1, 2.3, 2], position: [PLANT.vibFeeder.x, 0, PLANT.vibFeeder.z] }),
  );
  {
    const node = feederShell.node;
    // 料斗：四片斜板
    const hopper: { pos: [number, number, number]; rot: [number, number, number]; size: [number, number, number] }[] = [
      { pos: [0, 0.95, -0.72], rot: [-0.42, 0, 0], size: [1.5, 0.9, 0.05] },
      { pos: [0, 0.95, 0.72], rot: [0.42, 0, 0], size: [1.5, 0.9, 0.05] },
      { pos: [0.78, 0.95, 0], rot: [0, 0, 0.42], size: [0.05, 0.9, 1.3] },
      { pos: [-0.78, 0.95, 0], rot: [0, 0, -0.42], size: [0.05, 0.9, 1.3] },
    ];
    for (const panel of hopper) {
      slab(node, panel.size, { radius: 0.02, position: panel.pos, rotation: panel.rot, color: PALETTE.machineBody, kind: 'steelPainted' });
    }
    // 料斗下沿与出料口
    slab(node, [1.1, 0.1, 1.1], { radius: 0.02, position: [0, 0.5, 0], color: PALETTE.machineBodyDark, kind: 'steelPainted' });
    // 机座
    slab(node, [1.3, 0.34, 1.4], { radius: 0.05, position: [0, 0.28, 0], color: PALETTE.machineBodyDark, kind: 'steelPainted' });
    // 弹簧支腿
    for (const [x, z] of [
      [-0.55, -0.6],
      [0.55, -0.6],
      [-0.55, 0.6],
      [0.55, 0.6],
    ]) {
      const spring = group(node, [x, 0, z]);
      rod(spring, 0.075, 0.22, { axis: 'y', position: [0, 0.11, 0], color: PALETTE.alu, kind: 'aluminium', castShadow: false });
      rod(spring, 0.1, 0.05, { axis: 'y', position: [0, 0.05, 0], color: PALETTE.steelDark, kind: 'steel', castShadow: false });
    }
    // 振动电机
    motor(node, { radius: 0.12, length: 0.28, axis: 'z', position: [0.7, 0.3, 0], color: PALETTE.machineBodyDark });
    // 振动送料槽（动画）
    feederTray = group(node, [1.05, 0.52, 0]);
    slab(feederTray, [1.5, 0.16, 1.3], { radius: 0.02, color: PALETTE.steelBlue, kind: 'steelPainted' });
    for (const side of [-1, 1]) {
      slab(feederTray, [1.5, 0.26, 0.06], {
        radius: 0.02,
        position: [0, 0.16, (side * 1.3) / 2 - side * 0.03],
        color: PALETTE.machineTrim,
        kind: 'steelPainted',
        castShadow: false,
      });
    }
    cabinet(node, { size: [0.5, 1.15, 0.36], position: [-0.95, 0.58, 0.5], screen: false });
    statusLamp(node, { status: 'IDLE', position: [-0.95, 1.28, 0.5] });
  }

  /* 爬坡机 */
  track(
    'INCLINE',
    deviceShell(root, {
      device: 'INCLINE',
      size: [5.2, 2.4, 1.2],
      position: [(PLASTIC_BELTS.incline.from.x + PLASTIC_BELTS.incline.to.x) / 2, 0, PLASTIC_BELTS.incline.from.z],
    }),
  );
  conveyorBelt(shells[shells.length - 1].shell.node, PLASTIC_BELTS.incline, { legs: true });

  /* 两台光选机 */
  for (const id of ['SORTER_1', 'SORTER_2'] as const) {
    const belt = id === 'SORTER_1' ? PLASTIC_BELTS.sorter1 : PLASTIC_BELTS.sorter2;
    const grade = id === 'SORTER_1' ? 'PET' : 'HDPE';
    const centerX = (belt.from.x + belt.to.x) / 2;
    const shell = track(id, deviceShell(root, { device: id, size: [2.4, 2.8, 1.8], position: [centerX, 0, belt.from.z] }));
    const node = shell.node;
    // 皮带用世界坐标建，必须抵消 DeviceShell 的位移，否则整条带会被平移一次
    const beltNode = group(node, [-centerX, 0, -belt.from.z]);
    conveyorBelt(beltNode, belt);
    // 光选相机罩（带观察窗与遮光罩）
    rod(node, 0.09, 0.9, { axis: 'y', position: [-0.5, belt.fromY + 0.75, 0], color: PALETTE.steelDark, kind: 'steel', castShadow: false });
    slab(node, [1.5, 0.44, 0.9], { radius: 0.05, position: [0, belt.fromY + 1.2, 0], color: PALETTE.panelFace, kind: 'steelPainted' });
    slab(node, [1.1, 0.3, 0.03], { radius: 0.02, position: [0, belt.fromY + 1.2, 0.47], color: PALETTE.glass, kind: 'glass', opacity: 0.5, castShadow: false });
    boltRow(node, { count: 4, spacing: 0.32, position: [0, belt.fromY + 1.42, 0.3], radius: 0.02 });
    // 气吹阀排：喷气时发光（阀门排单独标记，逐帧改色）
    const valve = slab(node, [1.4, 0.1, 0.14], { radius: 0.02, position: [0, belt.fromY + 0.82, 0], color: PALETTE.steelBlue, kind: 'steelPainted', castShadow: false });
    const nozzles = group(node);
    for (let index = 0; index < 7; index += 1) {
      rod(nozzles, 0.022, 0.1, { axis: 'y', position: [-0.54 + index * 0.18, belt.fromY + 0.74, 0], color: PALETTE.alu, kind: 'aluminium', castShadow: false });
    }
    valveGroups.push({ device: id, valve, nozzles });
    // 分选标识罩：颜色对应被分出的材质
    slab(node, [1.5, 0.12, 0.86], { radius: 0.04, position: [0, belt.fromY + 1.48, 0], color: MATERIAL_META[grade].color, kind: 'steelPainted', castShadow: false });
    // 剔料斗与尾料口
    slab(node, [0.5, 0.4, 0.06], {
      radius: 0.02,
      position: [0.72, belt.fromY + 0.2, 0],
      rotation: [0, 0, -0.5],
      color: PALETTE.machineTrim,
      kind: 'steelPainted',
      castShadow: false,
    });
    cabinet(node, { size: [0.5, 1.25, 0.38], position: [-1.05, 0.62, 0.62] });
    statusLamp(node, { status: 'RUNNING', position: [-1.05, 1.4, 0.62] });
  }

  /* 输送机（五段皮带） */
  const conveyorShell = track('CONVEYOR', deviceShell(root, { device: 'CONVEYOR', size: [10.6, 2.2, 3.4], position: [-4.4, 0, -0.9] }));
  {
    // 五段皮带同样是世界坐标，用一层负位移把 DeviceShell 的偏移抵消掉
    const beltNode = group(conveyorShell.node, [4.4, 0, 0.9]);
    conveyorBelt(beltNode, PLASTIC_BELTS.pass1, { legs: true });
    conveyorBelt(beltNode, PLASTIC_BELTS.pass2, { legs: true });
    conveyorBelt(beltNode, PLASTIC_BELTS.lanePet, { motor: false, legs: true });
    conveyorBelt(beltNode, PLASTIC_BELTS.laneHdpe, { motor: false, legs: true });
    conveyorBelt(beltNode, PLASTIC_BELTS.laneTail, { motor: false, legs: true });
  }

  /* 五个料仓 */
  for (const id of SILO_IDS) {
    const point = SILO_POINTS[id];
    const shell = track(id, deviceShell(root, { device: id, size: [1.7, 2.1 + 1.3, 1.7], position: [point.x, 0, point.z] }));
    const parts = buildSilo({ id, shell });
    siloFills.push({ id, fill: parts.fill, strip: parts.strip, height: parts.height });
  }

  /* 三台打包机 */
  const balers: { device: DeviceId; color: string; position: { x: number; z: number } }[] = [
    { device: 'BALER_PLASTIC', color: PALETTE.machineTrim, position: PLANT.balerPlastic },
    { device: 'BALER_TEXTILE', color: PALETTE.safetyOrange, position: PLANT.balerTextile },
    { device: 'BALER_CARDBOARD', color: PALETTE.safetyOrange, position: PLANT.balerCardboard },
  ];
  for (const baler of balers) {
    const shell = track(baler.device, deviceShell(root, { device: baler.device, size: [2, 1.4, 2], position: [baler.position.x, 0, baler.position.z] }));
    const parts = buildBaler(shell.node, { device: baler.device, color: baler.color });
    plungers.push({ device: baler.device, node: parts.plunger });
  }

  /* --- 纺织品分拣线：上料平铺机构 --- */
  const spreaderShell = track('SPREADER', deviceShell(root, { device: 'SPREADER', size: [5.2, 1.8, 1.6], position: [PLANT.spreader.x, 0, PLANT.spreader.z] }));
  {
    const node = spreaderShell.node;
    const beltNode = group(node, [15, 0, -8.4]);
    conveyorBelt(beltNode, TEXTILE_BELTS.spreader, { legs: true });
    // 平铺辊与压料辊
    rod(node, 0.16, 1.5, { axis: 'x', position: [0, 1.02, 0.4], color: PALETTE.alu, kind: 'aluminium' });
    rod(node, 0.1, 1.4, { axis: 'x', position: [0, 1.16, -0.35], color: PALETTE.steelBlue, kind: 'steelPainted' });
  }

  /* 高光谱分选设备 */
  const hyperspecShell = track('HYPERSPEC', deviceShell(root, { device: 'HYPERSPEC', size: [4, 2.4, 1.8], position: [PLANT.hyperspec.x, 0, PLANT.hyperspec.z] }));
  {
    const node = hyperspecShell.node;
    const beltNode = group(node, [10.9, 0, -8.4]);
    conveyorBelt(beltNode, TEXTILE_BELTS.hyperspec, { legs: true });
    // 高光谱检测门架 + 光源箱
    for (const side of [-1, 1]) {
      rod(node, 0.075, 1.9, { axis: 'y', position: [side * 0.85, 1.1, 0], color: PALETTE.steelDark, kind: 'steel' });
    }
    slab(node, [2.2, 0.34, 1.1], { radius: 0.04, position: [0, 2.02, 0], color: PALETTE.panelFace, kind: 'steelPainted' });
    slab(node, [1.9, 0.1, 0.9], { radius: 0.02, position: [0, 1.82, 0], color: PALETTE.steelBlue, kind: 'steelPainted', castShadow: false });
    for (const x of [-0.7, 0.7]) {
      mesh(node, {
        geometry: box(0.5, 0.06, 0.7),
        material: standard(surface('lamp', PALETTE.lampCool, { emissive: PALETTE.lampCool, emissiveIntensity: 1.7 })),
        position: [x, 1.74, 0],
        castShadow: false,
      });
    }
    cabinet(node, { size: [0.55, 1.3, 0.4], position: [1.5, 0.65, 0.7] });
    statusLamp(node, { status: 'RUNNING', position: [1.5, 1.45, 0.7] });
  }

  /* 机械臂取件带 + 机械臂本体 */
  const pickCenterX = (TEXTILE_BELTS.pickBelt.from.x + TEXTILE_BELTS.pickBelt.to.x) / 2;
  const pickShell = track('ROBOT_ARM', deviceShell(root, { device: 'ROBOT_ARM', size: [5.2, 2.8, 1.4], position: [pickCenterX, 0, TEXTILE_BELTS.pickBelt.from.z] }));
  conveyorBelt(group(pickShell.node, [6.9, 0, -8.4]), TEXTILE_BELTS.pickBelt, { legs: true });
  const armShell = track('ROBOT_ARM', deviceShell(root, { device: 'ROBOT_ARM', size: [1.6, 2.6, 1.6], position: [PLANT.arm.x, 0, PLANT.arm.z] }));
  {
    const parts = buildRobotArm(armShell.node);
    armBoom = parts.boom;
    armWrist = parts.wrist;
  }

  /* --- 存储与地磅 --- */
  const cardboardShell = track('STORAGE_CARDBOARD', deviceShell(root, { device: 'STORAGE_CARDBOARD', size: [3.4, 2, 3], position: [PLANT.storageCardboard.x, 0, PLANT.storageCardboard.z] }));
  {
    // 纸板堆垛：木托盘 + 两层纸板包
    for (const [index, offset] of [
      [0, [0, 0, 0]],
      [1, [0.1, 0, 0.12]],
    ].map(([index, offset]) => [index, offset] as [number, [number, number, number]])) {
      const stack = group(cardboardShell.node, [offset[0], index * 0.78, offset[2]]);
      if (index === 0) pallet(stack, { size: [1.5, 0.14, 1.4], position: [0, 0.07, 0] });
      slab(stack, [1.35, 0.62, 1.2], { radius: 0.05, position: [0, 0.44, 0], color: '#b98a52', kind: 'cardboard' });
      bar(stack, [-0.7, 0.44, 0], [0.7, 0.44, 0], { thickness: 0.02, color: '#8a6a3a', castShadow: false });
    }
  }

  const miscShell = track('STORAGE_MISC', deviceShell(root, { device: 'STORAGE_MISC', size: [3.4, 2, 3], position: [PLANT.storageMisc.x, 0, PLANT.storageMisc.z] }));
  {
    // 杂项：几个不同尺寸的料箱堆在一起
    const boxes: { pos: [number, number, number]; size: [number, number, number]; color: string }[] = [
      { pos: [-0.62, 0.3, -0.5], size: [0.9, 0.6, 0.8], color: PALETTE.steelBlue },
      { pos: [0.45, 0.28, -0.62], size: [0.8, 0.56, 0.9], color: PALETTE.machineBody },
      { pos: [-0.3, 0.25, 0.55], size: [1.0, 0.5, 0.7], color: PALETTE.steelDark },
      { pos: [0.5, 0.24, 0.5], size: [0.7, 0.48, 0.7], color: PALETTE.machineBodyDark },
    ];
    for (const spec of boxes) {
      const bin = group(miscShell.node, spec.pos);
      slab(bin, spec.size, { radius: 0.03, color: spec.color, kind: 'steelPainted' });
      slab(bin, [spec.size[0] * 1.02, 0.05, spec.size[2] * 1.02], {
        radius: 0.01,
        position: [0, spec.size[1] / 2 - 0.02, 0],
        color: PALETTE.machineTrim,
        kind: 'steelPainted',
        castShadow: false,
      });
    }
  }

  const scaleShell = track('SCALE', deviceShell(root, { device: 'SCALE', size: [4.4, 0.7, 3.6], position: [SCALE.x, 0, SCALE.z] }));
  {
    const node = scaleShell.node;
    // 地磅：磅台 + 两侧引坡 + 挡轮条 + 仪表柜
    slab(node, [3.6, 0.2, 2.6], { radius: 0.02, position: [0, 0.1, 0], color: PALETTE.steel, kind: 'steel' });
    slab(node, [3.6, 0.03, 2.4], { radius: 0, position: [0, 0.22, 0], color: PALETTE.panelFace, kind: 'steelPainted', castShadow: false });
    for (const side of [-1, 1]) {
      slab(node, [0.5, 0.06, 2.4], {
        radius: 0,
        position: [side * 1.9, 0.06, 0],
        rotation: [0, 0, side * -0.25],
        color: PALETTE.steelDark,
        kind: 'steelPainted',
        castShadow: false,
      });
    }
    for (const side of [-1, 1]) {
      rod(node, 0.05, 2.6, { axis: 'z', position: [side * 1.7, 0.26, 0], color: PALETTE.safetyYellow, kind: 'steelPainted', castShadow: false });
    }
    cabinet(node, { size: [0.5, 1.1, 0.4], position: [2.4, 0.55, 1.3], rotation: [0, -0.6, 0] });
    statusLamp(node, { status: 'IDLE', position: [2.4, 1.28, 1.3], rotation: [0, -0.6, 0] });
  }

  let viewMode: ViewMode = 'xray';

  return {
    update({ state, timeInShift }: LinesFrameState) {
      // 料位柱与灯带跟随仿真存量，弹簧式逼近避免跳变。
      for (const silo of siloFills) {
        const record = state.silos[silo.id];
        const level = Math.max(0.001, record.capacity ? record.units / record.capacity : 0);
        silo.fill.scale.y += (level - silo.fill.scale.y) * 0.25;
        silo.strip.scale.y += (level - silo.strip.scale.y) * 0.25;
        silo.strip.position.y = 0.12 + ((silo.height - 0.24) * silo.strip.scale.y) / 2;
      }
      // 液压推头：压制时前移。
      for (const plunger of plungers) {
        const pressing = state.bales.some((bale) => bale.status === 'PRESSING' && BALER_OF_BALE(bale.source) === plunger.device);
        const target = pressing ? 0.2 : 0.6;
        plunger.node.position.x += (target - plunger.node.position.x) * 0.12;
      }
      // 机械臂：摆动与腕部姿态跟随仿真相位。
      if (armBoom) {
        const target = state.arm.phase === 'SWING_TO_SILO' || state.arm.phase === 'RELEASE' ? -0.9 : 0.55;
        armBoom.rotation.y += (target - armBoom.rotation.y) * 0.14;
      }
      if (armWrist) {
        const target = state.arm.phase === 'GRAB' ? 0.5 : 0.75;
        armWrist.rotation.z += (target - armWrist.rotation.z) * 0.18;
      }
      // 振动送料槽：随给料速率抖动。
      if (feederTray) {
        const amplitude = viewMode === 'xray' ? 0.012 : 0.014;
        feederTray.position.y = Math.sin(timeInShift * 22) * amplitude + 0.52;
      }
      // 气吹阀排：喷气时变亮。
      for (const valve of valveGroups) {
        const active = state.puffs.some((puff) => puff.device === valve.device);
        setValveActive(valve, active);
      }
    },
    setSelected(next: DeviceId | null) {
      for (const entry of shells) entry.shell.setSelected(entry.device === next);
    },
    setViewMode(mode: ViewMode) {
      viewMode = mode;
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

/* 气吹阀排的颜色随喷气状态切换：材质对象只建一次，逐帧只改颜色，避免每帧新建材质。 */
interface ValveGroup {
  device: 'SORTER_1' | 'SORTER_2';
  valve: Mesh;
  nozzles: Group;
}

function setValveActive(valve: ValveGroup, active: boolean): void {
  (valve.valve.material as MeshStandardMaterial).color.set(active ? PALETTE.safetyYellow : PALETTE.steelBlue);
  for (const node of valve.nozzles.children) {
    (node as Mesh<never, MeshStandardMaterial>).material.color.set(active ? PALETTE.lampWarm : PALETTE.alu);
  }
}

export { TorusGeometry };
