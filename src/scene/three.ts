import {
  BoxGeometry,
  BufferGeometry,
  CylinderGeometry,
  Euler,
  Group,
  Mesh,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  Quaternion,
  SphereGeometry,
  TorusGeometry,
  Vector3,
  type Material,
} from 'three';
import type { MeshStandardMaterialParameters } from 'three';

/**
 * 命令式场景构件工具 —— 替代 React Three Fiber 的声明式 JSX。
 *
 * React 版里 `<mesh position=... ><boxGeometry/><meshStandardMaterial/></mesh>` 由 fiber 的
 * 调和器负责创建与挂载；这里由普通函数直接建出 Object3D 并 `add` 进父节点。
 * 几何与材质只依赖常量，所以整棵场景树只构建一次，之后每帧只改动画姿态的字段。
 */

export type Vec3 = [number, number, number];

/** 把位置/旋转/缩放这类字段一次性写到对象上。 */
export function place(object: Object3D, position?: Vec3, rotation?: Vec3): Object3D {
  if (position) object.position.set(position[0], position[1], position[2]);
  if (rotation) object.rotation.set(rotation[0], rotation[1], rotation[2]);
  return object;
}

/** 新建一个分组并挂到父节点下。 */
export function group(parent: Object3D, position?: Vec3, rotation?: Vec3): Group {
  const node = new Group();
  place(node, position, rotation);
  parent.add(node);
  return node;
}

export interface MeshOptions {
  position?: Vec3;
  rotation?: Vec3;
  geometry: BufferGeometry;
  material: Material;
  castShadow?: boolean;
  receiveShadow?: boolean;
  /** 小于 1 时自动开启 transparent，避免忘记设置。 */
  opacity?: number;
}

/** 新建单个网格并挂到父节点下。 */
export function mesh(parent: Object3D, options: MeshOptions): Mesh {
  const node = new Mesh(options.geometry, options.material);
  place(node, options.position, options.rotation);
  node.castShadow = options.castShadow ?? true;
  node.receiveShadow = options.receiveShadow ?? false;
  parent.add(node);
  return node;
}

/* ---------- 常用几何：R3F 用法里的 <boxGeometry args={...}> 一一对应 ---------- */

export const box = (width: number, height: number, depth: number) => new BoxGeometry(width, height, depth);

export const cylinder = (radiusTop: number, radiusBottom: number, height: number, segments = 16, openEnded = false) =>
  new CylinderGeometry(radiusTop, radiusBottom, height, segments, 1, openEnded);

export const sphere = (radius: number, widthSegments = 12, heightSegments = 10) =>
  new SphereGeometry(radius, widthSegments, heightSegments);

export const plane = (width: number, height: number) => new PlaneGeometry(width, height);

export const torus = (radius: number, tube: number, radialSegments = 8, tubularSegments = 20) =>
  new TorusGeometry(radius, tube, radialSegments, tubularSegments);

/** 极简材质工厂：MeshStandardMaterial 的构造参数直传。 */
export const standard = (parameters: MeshStandardMaterialParameters) => new MeshStandardMaterial(parameters);

/** 用四元数把「沿 Y 轴」的圆柱摆到任意两点之间。 */
export function orientationBetween(from: Vector3, to: Vector3): { position: Vec3; rotation: Vec3; length: number } {
  const direction = to.clone().sub(from);
  const length = direction.length();
  const mid = from.clone().add(to).multiplyScalar(0.5);
  const quaternion = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), direction.clone().normalize());
  const euler = new Euler().setFromQuaternion(quaternion);
  return {
    position: [mid.x, mid.y, mid.z],
    rotation: [euler.x, euler.y, euler.z],
    length,
  };
}

export function disposeTree(root: Object3D): void {
  root.traverse((node) => {
    const candidate = node as Mesh;
    if (candidate.geometry) candidate.geometry.dispose();
    const material = candidate.material as Material | Material[] | undefined;
    if (Array.isArray(material)) material.forEach((entry) => entry.dispose());
    else material?.dispose();
  });
}
