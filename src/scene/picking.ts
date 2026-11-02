import { Raycaster, Vector2, type Camera, type Object3D } from 'three';
import type { DeviceId } from '../types';

/**
 * 设备拾取。
 *
 * 约定：设备外壳的根节点在 `userData[DEVICE_ID_KEY]` 上挂自己的 DeviceId，
 * 外壳内部任意一个零件（螺栓、灯罩、滚筒……）被射线命中后，向上回溯到最近的带标记祖先，
 * 就得到整台设备。写入方是 `parts.ts` 的 `deviceShell()`，读取方是这里的 `resolveDeviceId()`；
 * 键只在常量里出现一次，避免「写一个键、读另一个键」这类静默失效。
 */
export const DEVICE_ID_KEY = 'deviceId';

/** 给可点选的设备根节点打标记。 */
export function markDevice(object: Object3D, id: DeviceId): void {
  object.userData[DEVICE_ID_KEY] = id;
}

/** 从一个被命中的对象向上找最近的设备标记。 */
export function resolveDeviceId(object: Object3D | null | undefined): DeviceId | null {
  let node: Object3D | null = object ?? null;
  while (node) {
    const id = node.userData?.[DEVICE_ID_KEY];
    if (typeof id === 'string' && id.length > 0) return id as DeviceId;
    node = node.parent;
  }
  return null;
}

/**
 * 用归一化设备坐标（NDC，x/y ∈ [-1, 1]）做一次射线拾取。
 * 命中多个物体时取最近的、且能解析出设备的那个；都解析不出则返回 null（点到空地）。
 */
export function pickDevice(
  root: Object3D,
  camera: Camera,
  ndc: Vector2,
  raycaster: Raycaster = new Raycaster(),
): DeviceId | null {
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObject(root, true);
  for (const hit of hits) {
    const id = resolveDeviceId(hit.object);
    if (id) return id;
  }
  return null;
}

/** 画布内的像素坐标 → NDC。 */
export function toNdc(clientX: number, clientY: number, rect: { left: number; top: number; width: number; height: number }): Vector2 {
  return new Vector2(
    ((clientX - rect.left) / (rect.width || 1)) * 2 - 1,
    -((clientY - rect.top) / (rect.height || 1)) * 2 + 1,
  );
}
