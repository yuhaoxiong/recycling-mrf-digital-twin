import { Vector3, type PerspectiveCamera } from 'three';

/** 世界坐标投影到画布后的结果：像素位置、缩放与是否在视野内。 */
export interface ProjectedPoint {
  x: number;
  y: number;
  scale: number;
  visible: boolean;
}

/** 缩放夹取区间：太远时字会缩到看不清，太近时又会糊满画面。 */
const MIN_SCALE = 0.75;
const MAX_SCALE = 1.6;

/**
 * 把世界坐标投影成画布内的像素位置，供 HTML 浮层（选中设备的名称标签）跟随三维物体。
 *
 * 缩放复刻 drei 的 `<Html distanceFactor>`：`distanceFactor / (2·tan(fov/2)·distance)`，
 * 即「距离等于 distanceFactor 时缩放为 1」，视觉上像钉在世界坐标里；结果再夹到
 * [0.75, 1.6] 保证任何机位下都读得清。
 *
 * 抽成纯函数（只依赖相机与画布尺寸，不碰 WebGL）是为了能直接单测：
 * 投影错一位，标签就会飘到设备外面。
 */
export function projectToViewport(
  position: readonly [number, number, number],
  camera: PerspectiveCamera,
  width: number,
  height: number,
  distanceFactor = 22,
): ProjectedPoint {
  const point = new Vector3(position[0], position[1], position[2]);
  const distance = point.distanceTo(camera.position);
  // 相机看向 -Z：视图空间里 z < 0 才在相机前方，否则是背后的点（投影后符号会翻转）。
  const inFront = point.clone().applyMatrix4(camera.matrixWorldInverse).z < -0.1;
  point.project(camera);
  const safeWidth = width || 1;
  const safeHeight = height || 1;
  const withinFrustum = inFront && Math.abs(point.x) <= 1.15 && Math.abs(point.y) <= 1.15;
  const fovRadians = (camera.fov * Math.PI) / 180;
  const rawScale = distanceFactor / (2 * Math.tan(fovRadians / 2) * Math.max(0.1, distance));
  return {
    x: ((point.x + 1) / 2) * safeWidth,
    y: ((1 - point.y) / 2) * safeHeight,
    scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, rawScale)),
    visible: withinFrustum,
  };
}
