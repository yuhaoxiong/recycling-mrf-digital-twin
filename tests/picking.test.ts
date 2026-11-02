import { describe, expect, it } from 'vitest';
import { BoxGeometry, Group, Mesh, MeshBasicMaterial, PerspectiveCamera, Vector2 } from 'three';
import { DEVICE_ID_KEY, markDevice, pickDevice, resolveDeviceId, toNdc } from '../src/scene/picking';
import { deviceShell } from '../src/scene/parts';

/** 一台正对原点的相机：位置 (0,0,10)，看向 -Z。 */
const makeCamera = () => {
  const camera = new PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);
  camera.updateMatrixWorld(true);
  return camera;
};

const makeMesh = () => new Mesh(new BoxGeometry(2, 2, 2), new MeshBasicMaterial());
const CENTER = new Vector2(0, 0);

describe('设备拾取', () => {
  it('射线命中带标记的网格时返回它的设备编号', () => {
    const root = new Group();
    const device = new Group();
    markDevice(device, 'SORTER_1');
    const body = makeMesh();
    device.add(body);
    root.add(device);
    root.updateMatrixWorld(true);

    expect(pickDevice(root, makeCamera(), CENTER)).toBe('SORTER_1');
  });

  it('命中外壳内部的任意零件，都能向上回溯到整台设备', () => {
    const root = new Group();
    const device = new Group();
    markDevice(device, 'ROBOT_ARM');
    // 三层嵌套：仿真实设备里的「外壳 → 机架 → 螺栓」
    const frame = new Group();
    const bolt = makeMesh();
    frame.add(bolt);
    device.add(frame);
    root.add(device);
    root.updateMatrixWorld(true);

    expect(resolveDeviceId(bolt)).toBe('ROBOT_ARM');
    expect(pickDevice(root, makeCamera(), CENTER)).toBe('ROBOT_ARM');
  });

  it('点到空地或没有标记的物体时返回 null', () => {
    const root = new Group();
    const plain = makeMesh();
    root.add(plain);
    root.updateMatrixWorld(true);
    // 正中有个无标记物体：能命中，但解析不出设备。
    expect(pickDevice(root, makeCamera(), CENTER)).toBeNull();
    // 完全没命中。
    expect(pickDevice(root, makeCamera(), new Vector2(0.95, 0.95))).toBeNull();
  });

  it('deviceShell 写入的键与拾取读取的键一致（防止读写字符串各写一份）', () => {
    const root = new Group();
    const shell = deviceShell(root, { device: 'HYPERSPEC', size: [2, 2, 2] });
    // 直接检查约定键确实落在根节点上。
    expect(shell.node.userData[DEVICE_ID_KEY]).toBe('HYPERSPEC');
    expect(resolveDeviceId(shell.node)).toBe('HYPERSPEC');
    // 外壳内部的网格（含选中高亮框）都能回溯到同一台设备。
    const child = shell.node.children[0];
    expect(resolveDeviceId(child)).toBe('HYPERSPEC');
  });

  it('多个物体重叠时取最近的那个设备', () => {
    const root = new Group();
    const near = new Group();
    markDevice(near, 'SCALE');
    near.position.z = 3; // 离相机 (0,0,10) 更近
    near.add(makeMesh());
    const far = new Group();
    markDevice(far, 'CONVEYOR');
    far.position.z = -3;
    far.add(makeMesh());
    root.add(near, far);
    root.updateMatrixWorld(true);

    expect(pickDevice(root, makeCamera(), CENTER)).toBe('SCALE');
  });

  it('像素坐标正确换算成归一化设备坐标', () => {
    const rect = { left: 100, top: 50, width: 800, height: 400 };
    const center = toNdc(500, 250, rect); // 画布正中
    expect(center.x).toBeCloseTo(0, 6);
    expect(center.y).toBeCloseTo(0, 6);
    const topLeft = toNdc(100, 50, rect);
    expect(topLeft.x).toBeCloseTo(-1, 6);
    expect(topLeft.y).toBeCloseTo(1, 6);
    // 画布尺寸为 0 时不能产生 NaN（首帧、隐藏标签页都会出现）。
    expect(Number.isFinite(toNdc(10, 10, { left: 0, top: 0, width: 0, height: 0 }).x)).toBe(true);
  });
});
