import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { Group } from 'three';

/**
 * 选中设备的名称标签必须由三维投影驱动，而不是排在画布下方的普通文档流元素。
 * 这里把 SceneHost 与各场景层换成假实现：需要验证的是「接线」，不是 WebGL。
 */
const harness = vi.hoisted(() => ({
  frameHook: null as null | ((context: { delta: number; elapsed: number }) => void),
  projection: { x: 100, y: 50, scale: 1.2, visible: true },
  selectedCalls: [] as (string | null)[],
}));

vi.mock('../src/scene/SceneHost', () => {
  class FakeSceneHost {
    static anchorFor = () => [1, 2, 3] as [number, number, number];
    static airPuffPositions = () => [
      { device: 'SORTER_1' as const, position: [0, 0, 0] as [number, number, number] },
      { device: 'SORTER_2' as const, position: [0, 0, 0] as [number, number, number] },
    ];
    readonly root = new Group();
    get isReducedMotion() {
      return false;
    }
    addFrameHook(hook: (context: { delta: number; elapsed: number }) => void) {
      harness.frameHook = hook;
      return () => {};
    }
    start() {}
    dispose() {}
    setCameraMode() {}
    setReducedMotion() {}
    setFocusTarget() {}
    projectToScreen() {
      return harness.projection;
    }
  }
  return { SceneHost: FakeSceneHost };
});

vi.mock('../src/scene/Factory', () => ({
  buildFactory: () => ({
    roofDetails: new Group(),
    wallMaterials: [],
    labels: [],
    setXray() {},
    dispose() {},
  }),
}));

vi.mock('../src/scene/Lines', () => ({
  buildLines: () => ({
    update() {},
    setSelected(selected: string | null) {
      harness.selectedCalls.push(selected);
    },
    setViewMode() {},
    dispose() {},
  }),
}));

vi.mock('../src/scene/Vehicles', () => ({
  buildVehicles: () => ({
    update() {},
    setSelected(selected: string | null) {
      harness.selectedCalls.push(`vehicle:${selected}`);
    },
    dispose() {},
  }),
  buildAirPuff: () => ({ update() {} }),
}));

vi.mock('../src/simulation/context', () => ({
  useSimulation: () => ({ current: { units: [], bales: [], puffs: [] }, timeInShift: 0 }),
  provideSimulation: () => {},
  useUiTick: () => () => {},
}));

import MrfScene from '../src/ui/MrfScene.vue';
import type { DeviceId } from '../src/types';

const mountScene = (selected: DeviceId | null) =>
  mount(MrfScene, {
    props: { selected, viewMode: 'xray', cameraMode: 'free', reducedMotion: false },
    attachTo: document.body,
  });

/** 跑一帧：标签位置在帧循环里更新。 */
const runFrame = () => {
  harness.frameHook?.({ delta: 0.016, elapsed: 0 });
};

describe('选中设备名称标签', () => {
  it('标签位于场景浮层内，且默认不显示', () => {
    const wrapper = mountScene(null);
    const label = wrapper.find('.scene-root .device-label');
    expect(label.exists()).toBe(true);
    runFrame();
    expect((label.element as HTMLElement).style.display).toBe('none');
    wrapper.unmount();
  });

  it('选中设备后按投影结果定位，而不是排在画布下方', () => {
    harness.projection = { x: 100, y: 50, scale: 1.2, visible: true };
    const wrapper = mountScene('SORTER_1');
    const label = wrapper.get('.device-label').element as HTMLElement;

    runFrame();

    expect(label.style.display).toBe('block');
    expect(label.style.left).toBe('100px');
    expect(label.style.top).toBe('50px');
    // 居中于锚点并随距离缩放（等价于 drei <Html center distanceFactor>）。
    expect(label.style.transform).toBe('translate(-50%, -50%) scale(1.200)');
    expect(label.textContent).toContain('光选机 #1');
    wrapper.unmount();
  });

  it('相机转到设备背后（投影不可见）时隐藏标签', () => {
    harness.projection = { x: 0, y: 0, scale: 1, visible: false };
    const wrapper = mountScene('SORTER_1');
    runFrame();
    expect((wrapper.get('.device-label').element as HTMLElement).style.display).toBe('none');
    wrapper.unmount();
  });

  it('选中变化会同时驱动产线与车辆的高亮', async () => {
    harness.selectedCalls.length = 0;
    const wrapper = mountScene(null);
    expect(harness.selectedCalls).toContain(null);
    expect(harness.selectedCalls).toContain('vehicle:null');

    harness.selectedCalls.length = 0;
    await wrapper.setProps({ selected: 'TRUCK_A' });
    expect(harness.selectedCalls).toContain('TRUCK_A');
    expect(harness.selectedCalls).toContain('vehicle:TRUCK_A');
    wrapper.unmount();
  });
});
