import type { Object3D, Texture } from 'three';
import { MeshStandardMaterial, Vector3 } from 'three';
import { roundedBoxGeometry } from './roundedBox';
import { box, cylinder, group, mesh, orientationBetween, sphere, standard, torus, type Vec3 } from './three';
import { glow, surface, type SurfaceKind } from './materials';
import { PALETTE, STATUS_LED } from './palette';

export type { Vec3 } from './three';

/**
 * 构件原语库 —— 用最少的代码堆出足够的构件密度（Vue 命令式版）。
 *
 * React 版里这些都是组件（`<Slab size={...} />`），由 fiber 负责挂载；
 * 这里改成「给父节点、返回建好的 Object3D」的函数，语义一一对应：
 *
 * - 大的外观件用 `slab`（倒角盒，边缘能吃到高光，是「精致」的关键）；
 * - 小的螺栓、栏杆、斜撑一律用普通盒/柱，避免为每个小件新建复杂几何；
 * - 颜色只从 `palette.ts` 取，材质只从 `materials.ts` 取。
 */

export interface PartOptions {
  position?: Vec3;
  rotation?: Vec3;
  color?: string;
  kind?: SurfaceKind;
  /** 小构件建议关掉，影子贴图会便宜很多 */
  castShadow?: boolean;
  receiveShadow?: boolean;
  opacity?: number;
  /** 程序化贴图（来自 textures.ts）。倒角件不贴图，避免 UV 被挤出几何拉伸。 */
  map?: Texture | null;
}

function materialFor(kind: SurfaceKind, color: string, opacity?: number, map?: Texture | null): MeshStandardMaterial {
  return standard(
    surface(kind, color, {
      ...(opacity === undefined ? {} : { transparent: opacity < 1, opacity }),
      ...(map ? { map } : {}),
    }),
  );
}

/** 倒角板/箱：厂房地面、设备外壳、面板都用它。 */
export function slab(
  parent: Object3D,
  size: Vec3,
  options: PartOptions & { radius?: number; smoothness?: number } = {},
) {
  const {
    radius = 0.035,
    smoothness = 2,
    position,
    rotation,
    color = PALETTE.steel,
    kind = 'steelPainted',
    castShadow = true,
    receiveShadow = true,
    opacity,
    map,
  } = options;
  // 倒角不能超过最短边的一半，否则几何会自交（roundedBoxGeometry 内部已兜底）。
  const geometry = roundedBoxGeometry(size[0], size[1], size[2], radius, smoothness);
  return mesh(parent, {
    geometry,
    material: materialFor(kind, color, opacity, map),
    position,
    rotation,
    castShadow,
    receiveShadow,
  });
}

const AXIS_ROTATION: Record<'x' | 'y' | 'z', Vec3> = {
  y: [0, 0, 0],
  x: [0, 0, Math.PI / 2],
  z: [Math.PI / 2, 0, 0],
};

export interface RodOptions extends PartOptions {
  axis?: 'x' | 'y' | 'z';
  segments?: number;
}

/** 圆柱：滚筒、支腿、立柱、油管。 */
export function rod(parent: Object3D, radius: number, length: number, options: RodOptions = {}) {
  const {
    axis = 'y',
    position,
    rotation,
    color = PALETTE.steel,
    kind = 'steel',
    castShadow = true,
    receiveShadow = true,
    segments = 14,
    opacity,
    map,
  } = options;
  return mesh(parent, {
    geometry: cylinder(radius, radius, length, segments),
    material: materialFor(kind, color, opacity, map),
    position,
    rotation: rotation ?? AXIS_ROTATION[axis],
    castShadow,
    receiveShadow,
  });
}

/** 轴心沿 Y 的圆盘（轮子、法兰、滚筒端盖）。 */
export function disc(parent: Object3D, radius: number, options: RodOptions & { thickness?: number } = {}) {
  const { thickness = 0.06, ...rest } = options;
  return rod(parent, radius, thickness, { ...rest, axis: 'y' });
}

/** 任意两点之间的圆管：油管、气管、斜拉杆。 */
export function pipe(
  parent: Object3D,
  from: Vec3,
  to: Vec3,
  options: { radius?: number; color?: string; kind?: SurfaceKind; castShadow?: boolean } = {},
) {
  const { radius = 0.04, color = PALETTE.steel, kind = 'steel', castShadow = true } = options;
  const start = new Vector3(...from);
  const end = new Vector3(...to);
  if (end.distanceTo(start) < 1e-4) return null;
  const orientation = orientationBetween(start, end);
  return mesh(parent, {
    geometry: cylinder(radius, radius, orientation.length, 10),
    material: standard(surface(kind, color)),
    position: orientation.position,
    rotation: orientation.rotation,
    castShadow,
  });
}

/** 任意两点之间的方管：桁架杆、斜撑、检修梯侧梁。 */
export function bar(
  parent: Object3D,
  from: Vec3,
  to: Vec3,
  options: { thickness?: number; color?: string; kind?: SurfaceKind; castShadow?: boolean } = {},
) {
  const { thickness = 0.08, color = PALETTE.steel, kind = 'steel', castShadow = true } = options;
  const start = new Vector3(...from);
  const end = new Vector3(...to);
  if (end.distanceTo(start) < 1e-4) return null;
  const orientation = orientationBetween(start, end);
  return mesh(parent, {
    geometry: box(thickness, orientation.length, thickness),
    material: standard(surface(kind, color)),
    position: orientation.position,
    rotation: orientation.rotation,
    castShadow,
  });
}

/** 四条支腿（含底部横撑），设备落地的基本件。 */
export function legs(
  parent: Object3D,
  options: {
    width: number;
    depth: number;
    height: number;
    axis?: 'y' | 'z';
    color?: string;
    kind?: SurfaceKind;
    thickness?: number;
    brace?: boolean;
  },
) {
  const { width, depth, height, axis = 'y', color = PALETTE.steelDark, kind = 'steel', thickness = 0.07, brace = false } = options;
  const node = group(parent);
  const size = axis === 'y' ? 0.075 : thickness;
  for (const [sx, sz] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ]) {
    if (axis === 'y') {
      rod(node, size, height, { position: [(sx * width) / 2, height / 2, (sz * depth) / 2], color, kind });
    } else {
      rod(node, size, depth, { axis: 'z', position: [(sx * width) / 2, height, (sz * depth) / 2], color, kind });
    }
  }
  if (brace) {
    for (const sz of [-1, 1]) {
      bar(node, [-width / 2, height * 0.32, (sz * depth) / 2], [width / 2, height * 0.32, (sz * depth) / 2], {
        thickness: thickness * 0.7,
        color,
        kind,
      });
    }
  }
  return node;
}

/** 沿 X 或 Z 方向的防护栏杆：两道横杆 + 立柱。 */
export function rail(
  parent: Object3D,
  from: Vec3,
  to: Vec3,
  options: { height?: number; posts?: number; color?: string; kind?: SurfaceKind } = {},
) {
  const { height = 1.05, posts = 4, color = PALETTE.guard, kind = 'steelPainted' } = options;
  const start = new Vector3(...from);
  const end = new Vector3(...to);
  const direction = end.clone().sub(start);
  const length = direction.length();
  const angle = Math.atan2(direction.x, direction.z);
  const mid = start.clone().add(end).multiplyScalar(0.5);
  const node = group(parent, [mid.x, 0, mid.z], [0, angle, 0]);
  for (const y of [height, height * 0.55]) {
    rod(node, 0.032, length, { axis: 'z', position: [0, y, 0], color, kind });
  }
  const count = Math.max(2, posts);
  for (let index = 0; index < count; index += 1) {
    const z = -length / 2 + (length * index) / (count - 1);
    rod(node, 0.035, height, { position: [0, height / 2, z], color, kind });
  }
  return node;
}

/** 屋面桁架：上下弦 + 斜腹杆 + 竖杆，跨 X 方向、高 Y 方向。 */
export function truss(
  parent: Object3D,
  options: { span: number; height: number; bays?: number; thickness?: number; color?: string; kind?: SurfaceKind },
) {
  const { span, height, bays = 8, thickness = 0.075, color = PALETTE.roofRib, kind = 'steel' } = options;
  const segments = Math.max(2, bays);
  const step = span / segments;
  const nodes: [number, number][] = Array.from({ length: segments + 1 }, (_, index) => [-span / 2 + step * index, 0]);
  const node = group(parent);
  bar(node, [nodes[0][0], 0, 0], [nodes[segments][0], 0, 0], { thickness, color, kind });
  bar(node, [nodes[0][0], height, 0], [nodes[segments][0], height, 0], { thickness, color, kind });
  nodes.slice(0, -1).forEach((current, index) => {
    const next = nodes[index + 1];
    const up = index % 2 === 0;
    bar(node, [current[0], up ? height : 0, 0], [next[0], up ? 0 : height, 0], { thickness: thickness * 0.62, color, kind });
  });
  nodes
    .filter((_, index) => index % 2 === 1 && index < segments)
    .forEach((current) => {
      bar(node, [current[0], 0, 0], [current[0], height, 0], { thickness: thickness * 0.55, color, kind });
    });
  return node;
}

/** 百叶/散热格栅：一排倾斜薄片。 */
export function louver(
  parent: Object3D,
  options: {
    width: number;
    height: number;
    slats?: number;
    position?: Vec3;
    rotation?: Vec3;
    color?: string;
    kind?: SurfaceKind;
  },
) {
  const { width, height, slats = 6, position, rotation, color = PALETTE.steelDark, kind = 'steel' } = options;
  const count = Math.max(2, slats);
  const gap = height / count;
  const node = group(parent, position, rotation);
  for (let index = 0; index < count; index += 1) {
    slab(node, [width, gap * 0.55, 0.02], {
      radius: 0,
      position: [0, -height / 2 + gap * (index + 0.5), 0],
      rotation: [Math.PI / 5, 0, 0],
      color,
      kind,
      receiveShadow: false,
    });
  }
  return node;
}

/** 一排螺栓/铆钉，用来给大面板加尺度参照。 */
export function boltRow(
  parent: Object3D,
  options: { count: number; spacing: number; position?: Vec3; rotation?: Vec3; radius?: number; color?: string },
) {
  const { count, spacing, position, rotation, radius = 0.022, color = PALETTE.alu } = options;
  const node = group(parent, position, rotation);
  for (let index = 0; index < Math.max(1, count); index += 1) {
    mesh(node, {
      geometry: sphere(radius, 8, 6),
      material: standard(surface('aluminium', color)),
      position: [(index - (count - 1) / 2) * spacing, 0, 0],
      castShadow: false,
    });
  }
  return node;
}

/** 电机：机身 + 散热筋 + 出轴。 */
export function motor(
  parent: Object3D,
  options: {
    radius?: number;
    length?: number;
    axis?: 'x' | 'y' | 'z';
    position?: Vec3;
    rotation?: Vec3;
    color?: string;
    kind?: SurfaceKind;
  } = {},
) {
  const { radius = 0.16, length = 0.42, axis = 'x', position, rotation, color = PALETTE.machineBodyDark, kind = 'steelPainted' } = options;
  const node = group(parent, position, rotation);
  rod(node, radius, length, { axis, color, kind });
  const fins = 8;
  for (let index = 0; index < fins; index += 1) {
    const angle = (index / fins) * Math.PI * 2;
    const y = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    if (axis === 'x') {
      bar(node, [-length / 2, y, z], [length / 2, y, z], { thickness: 0.022, color, kind, castShadow: false });
    }
  }
  rod(node, radius * 0.28, 0.16, {
    axis: axis === 'x' ? 'x' : 'y',
    position: axis === 'x' ? [length / 2 + 0.07, 0, 0] : [0, length / 2 + 0.07, 0],
    color: PALETTE.alu,
    kind: 'aluminium',
  });
  return node;
}

/** 控制柜：柜体 + 门缝 + 屏幕 + 两颗指示灯。 */
export function cabinet(
  parent: Object3D,
  options: {
    size?: Vec3;
    position?: Vec3;
    rotation?: Vec3;
    screen?: boolean;
    color?: string;
    kind?: SurfaceKind;
  } = {},
) {
  const { size = [0.7, 1.5, 0.45], position, rotation, screen = true, color = PALETTE.panelFace, kind = 'steelPainted' } = options;
  const [w, h, d] = size;
  const node = group(parent, position, rotation);
  slab(node, size, { radius: 0.03, color, kind });
  for (const offset of [0.2, -0.2]) {
    bar(node, [offset * w, -h / 2 + 0.02, d / 2], [offset * w, h / 2 - 0.02, d / 2], {
      thickness: 0.014,
      color: PALETTE.steelDark,
      kind: 'steelPainted',
      castShadow: false,
    });
  }
  slab(node, [w * 0.62, h * 0.26, 0.03], { radius: 0, position: [0, h * 0.24, d / 2 + 0.015], color: '#1d272c', kind: 'plastic', castShadow: false });
  if (screen) {
    mesh(node, {
      geometry: box(w * 0.52, h * 0.19, 0.001),
      material: standard(glow(PALETTE.screen, 1.1)),
      position: [0, h * 0.24, d / 2 + 0.035],
      castShadow: false,
    });
  }
  mesh(node, {
    geometry: sphere(0.028, 10, 8),
    material: standard(glow(PALETTE.ledRun, 2.2)),
    position: [-w * 0.2, h * 0.06, d / 2 + 0.03],
    castShadow: false,
  });
  mesh(node, {
    geometry: sphere(0.028, 10, 8),
    material: standard(glow(PALETTE.ledWait, 2.2)),
    position: [-w * 0.05, h * 0.06, d / 2 + 0.03],
    castShadow: false,
  });
  return node;
}

/** 设备状态灯：深色灯罩 + 会发光的灯芯，颜色随仿真状态变化。返回灯芯网格便于逐帧改色。 */
export function statusLamp(
  parent: Object3D,
  options: { status: keyof typeof STATUS_LED; position?: Vec3; rotation?: Vec3; radius?: number; housing?: boolean },
) {
  const { status, position, rotation, radius = 0.045, housing = true } = options;
  const node = group(parent, position, rotation);
  if (housing) {
    rod(node, radius * 1.7, 0.05, { axis: 'z', color: PALETTE.panelFace, kind: 'steelPainted', castShadow: false });
  }
  return mesh(node, {
    geometry: sphere(radius, 10, 8),
    material: standard(glow(STATUS_LED[status], 2.4)),
    position: [0, 0, 0.03],
    castShadow: false,
  });
}

/** 检修梯：两侧边梁 + 踏棍。 */
export function ladder(
  parent: Object3D,
  options: { height: number; width?: number; position?: Vec3; rotation?: Vec3; color?: string },
) {
  const { height, width = 0.42, position, rotation, color = PALETTE.steel } = options;
  const rungs = Math.max(2, Math.round(height / 0.3));
  const node = group(parent, position, rotation);
  for (const side of [-1, 1]) {
    bar(node, [(side * width) / 2, 0, 0], [(side * width) / 2, height, 0], { thickness: 0.045, color, kind: 'steel' });
  }
  for (let index = 0; index < rungs; index += 1) {
    rod(node, 0.018, width, {
      axis: 'x',
      position: [0, (height * (index + 1)) / (rungs + 1), 0],
      color,
      kind: 'steel',
      castShadow: false,
    });
  }
  return node;
}

/** 木托盘：3 根纵梁 + 5 块面板。 */
export function pallet(parent: Object3D, options: { size?: Vec3; position?: Vec3; rotation?: Vec3 } = {}) {
  const { size = [1.1, 0.14, 1.0], position, rotation } = options;
  const [w, h, d] = size;
  const boards = 5;
  const node = group(parent, position, rotation);
  for (const side of [-1, 0, 1]) {
    slab(node, [w, h * 0.55, 0.09], { radius: 0, position: [0, h * 0.27, (side * d) / 2.5], color: '#b9986a', kind: 'wood' });
  }
  for (let index = 0; index < boards; index += 1) {
    slab(node, [w, h * 0.28, d / (boards * 1.5)], {
      radius: 0,
      position: [0, h * 0.82, -d / 2 + (d * (index + 0.5)) / boards],
      color: '#c8a878',
      kind: 'wood',
    });
  }
  return node;
}

/** 环形（料仓加强环、方向盘等）。 */
export { torus };
