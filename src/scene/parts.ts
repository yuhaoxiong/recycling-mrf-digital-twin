import { Mesh, MeshBasicMaterial, type Group, type Object3D } from 'three';
import type { DeviceId, Point } from '../types';
import { dist } from '../spatial/layout';
import { box, group, mesh, type Vec3 } from './three';
import { markDevice } from './picking';

export interface BeltMeshGeometry {
  position: [number, number, number];
  yaw: number;
  pitch: number;
  length: number;
}

/**
 * 由仿真使用的同一组锚点推导皮带的变换，因此画出来的料包永远压在你看到的带面上。
 * （测试 `tests/scene.test.ts` 直接锁这条性质，函数签名保持不变。）
 */
export function beltMesh(from: Point, to: Point, fromY: number, toY: number, width: number): BeltMeshGeometry & { width: number } {
  const run = Math.hypot(to.x - from.x, to.z - from.z);
  return {
    position: [(from.x + to.x) / 2, (fromY + toY) / 2, (from.z + to.z) / 2],
    yaw: Math.atan2(to.x - from.x, to.z - from.z),
    pitch: -Math.atan2(toY - fromY, run || 1),
    length: dist(from, to),
    width,
  };
}

export interface DeviceShellHandle {
  /** 外壳根节点（已打上拾取标记）。 */
  node: Group;
  /** 选中高亮框；`setSelected()` 负责开关它。 */
  setSelected(selected: boolean): void;
}

/**
 * 设备外壳：点选目标 + 选中描边，把列表、场景与详情面板串起来。
 *
 * React 版靠 `onPointerOver` 改光标；命令式版把光标交给 `SceneHost` 的指针拾取统一处理，
 * 这里只负责「可拾取的根节点」和「选中时出现的高亮框」。
 */
export function deviceShell(
  parent: Object3D,
  options: {
    device: DeviceId;
    size: Vec3;
    position?: Vec3;
    /** 内容构建回调：往给定分组里堆构件。 */
    build?: (node: Group) => void;
  },
): DeviceShellHandle {
  const node = group(parent, options.position);
  // 与 picking.ts 共用同一个键：写在这里、读在 resolveDeviceId()，不允许各写各的字符串。
  markDevice(node, options.device);
  options.build?.(node);

  const highlight = mesh(node, {
    geometry: box(options.size[0], options.size[1], options.size[2]),
    material: new MeshBasicMaterial({ color: '#f1b85c', wireframe: true, transparent: true, opacity: 0.55 }),
    position: [0, options.size[1] / 2, 0],
    castShadow: false,
  });
  highlight.visible = false;
  (highlight as Mesh).renderOrder = 2;

  return {
    node,
    setSelected(selected: boolean) {
      highlight.visible = selected;
    },
  };
}
