<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { CameraMode, DeviceId, ViewMode } from '../types';
import { DEVICE_SPEC_BY_ID, MATERIAL_META } from '../simulation/data';
import { SORTABLE_GRADES } from '../types';
import { useSimulation } from '../simulation/context';
import { SceneHost } from '../scene/SceneHost';
import { buildFactory } from '../scene/Factory';
import { buildLines } from '../scene/Lines';
import { buildAirPuff, buildVehicles } from '../scene/Vehicles';
import { group } from '../scene/three';

const props = defineProps<{
  selected: DeviceId | null;
  viewMode: ViewMode;
  cameraMode: CameraMode;
  reducedMotion: boolean;
}>();

const emit = defineEmits<{
  (event: 'select', id: DeviceId | null): void;
  (event: 'cameraMode', mode: CameraMode): void;
}>();

const simulation = useSimulation();

const containerRef = ref<HTMLDivElement | null>(null);
/** 选中设备名称标签：绝对定位于画布之上，每帧按三维锚点投影定位。 */
const labelRef = ref<HTMLDivElement | null>(null);
const failed = ref(false);
const contextLost = ref(false);
let host: SceneHost | null = null;
/** 场景各层的句柄：只在 onMounted 里赋值，watch 里安全读取。 */
let factoryHandle: ReturnType<typeof buildFactory> | null = null;
let linesHandle: ReturnType<typeof buildLines> | null = null;
let vehiclesHandle: ReturnType<typeof buildVehicles> | null = null;

/** 标签锚点相对设备锚点的抬升量：让标签浮在设备正上方，而不是压在机器上。 */
const LABEL_LIFT = 1.9;

/**
 * 把选中设备的名称标签贴到三维锚点上（等价于 React 版的 drei `<Html center position distanceFactor>`）。
 * 每帧写一次 style，不经过 Vue 响应式，避免相机拖动时产生组件重渲染。
 */
function updateLabelPosition(): void {
  const element = labelRef.value;
  if (!element) return;
  const selected = props.selected;
  if (!selected || !host) {
    element.style.display = 'none';
    return;
  }
  const anchor = SceneHost.anchorFor(selected);
  const projected = host.projectToScreen([anchor[0], anchor[1] + LABEL_LIFT, anchor[2]]);
  if (!projected.visible) {
    element.style.display = 'none';
    return;
  }
  element.style.display = 'block';
  element.style.left = `${projected.x}px`;
  element.style.top = `${projected.y}px`;
  element.style.transform = `translate(-50%, -50%) scale(${projected.scale.toFixed(3)})`;
}

const CAMERA_LABEL: Record<CameraMode, string> = {
  overview: '俯瞰全厂',
  focus: '跟随选中设备',
  free: '自由视角',
};

onMounted(() => {
  const container = containerRef.value;
  if (!container) return;
  try {
    host = new SceneHost(container, {
      onSelect: (id) => emit('select', id),
      onContextChange: (lost) => {
        contextLost.value = lost;
      },
      onError: () => {
        failed.value = true;
      },
    });

    // 场景内容一次性构建：几何与材质只依赖常量，之后每帧只改动画姿态。
    const scenario = group(host.root);
    const factory = buildFactory(scenario);
    const lines = buildLines(scenario);
    const vehicles = buildVehicles(scenario);
    const puffs = [
      buildAirPuff(scenario, { device: 'SORTER_1', position: SceneHost.airPuffPositions()[0].position }),
      buildAirPuff(scenario, { device: 'SORTER_2', position: SceneHost.airPuffPositions()[1].position }),
    ];
    factoryHandle = factory;
    linesHandle = lines;
    vehiclesHandle = vehicles;

    factory.setXray(props.viewMode === 'xray');
    lines.setSelected(props.selected);
    vehicles.setSelected(props.selected);
    lines.setViewMode(props.viewMode);
    host.setCameraMode(props.cameraMode);
    host.setReducedMotion(props.reducedMotion);
    host.setFocusTarget(props.selected ? SceneHost.anchorFor(props.selected) : null);
    const activeHost = host;
    activeHost.addFrameHook(({ delta }) => {
      const state = simulation.current;
      lines.update({ state, timeInShift: simulation.timeInShift, reducedMotion: activeHost.isReducedMotion });
      vehicles.update(state, activeHost.isReducedMotion);
      for (const puff of puffs) puff.update(state, activeHost.isReducedMotion, delta);
      // 标签跟随相机：自由视角拖动时也要一直贴在设备上方。
      updateLabelPosition();
    });
    activeHost.start();
  } catch (error) {
    failed.value = true;
    console.error(error);
  }
});

onBeforeUnmount(() => {
  host?.dispose();
  host = null;
  factoryHandle = null;
  linesHandle = null;
  vehiclesHandle = null;
});

watch(
  () => props.viewMode,
  (mode) => {
    factoryHandle?.setXray(mode === 'xray');
    linesHandle?.setViewMode(mode);
  },
);

watch(
  () => props.selected,
  (selected) => {
    linesHandle?.setSelected(selected);
    vehiclesHandle?.setSelected(selected);
    host?.setFocusTarget(selected ? SceneHost.anchorFor(selected) : null);
    if (selected && props.cameraMode === 'focus') host?.setCameraMode('focus');
    // 选中态变化后立即摆一次标签，不必等下一帧。
    updateLabelPosition();
  },
);

watch(
  () => props.cameraMode,
  (mode) => {
    host?.setCameraMode(mode);
    if (mode === 'focus' && props.selected) host?.setFocusTarget(SceneHost.anchorFor(props.selected));
  },
);

watch(
  () => props.reducedMotion,
  (value) => host?.setReducedMotion(value),
);

/** 选中设备的悬浮名称标签（HTML overlay，跟随三维位置）。 */
const selectedLabel = () => (props.selected ? DEVICE_SPEC_BY_ID[props.selected].name : '');</script>

<template>
  <div class="scene-root">
    <div ref="containerRef" class="scene-canvas" :class="{ 'is-failed': failed }" />

    <p class="scene-hint">拖动旋转 · 滚轮缩放 · 点击设备查看状态与读数</p>

    <div class="camera-buttons" role="group" aria-label="相机视角">
      <button
        v-for="(label, mode) in CAMERA_LABEL"
        :key="mode"
        type="button"
        :class="props.cameraMode === mode ? 'is-active' : ''"
        :aria-pressed="props.cameraMode === mode"
        :disabled="mode === 'focus' && !props.selected"
        @click="emit('cameraMode', mode)"
      >
        {{ label }}
      </button>
    </div>

    <div class="scene-legend">
      <span v-for="grade in SORTABLE_GRADES" :key="grade">
        <i :style="{ background: MATERIAL_META[grade].color }" />
        {{ MATERIAL_META[grade].short }}
      </span>
      <span><i :style="{ background: MATERIAL_META.CARDBOARD.color }" />纸板</span>
      <span><i :style="{ background: MATERIAL_META.MISC.color }" />杂项</span>
    </div>

    <!-- 选中设备名称：绝对定位在画布之上，由 updateLabelPosition() 每帧按三维锚点投影摆放。 -->
    <div ref="labelRef" class="device-label" aria-live="polite">{{ selectedLabel() }}</div>

    <div v-if="contextLost" class="scene-overlay" role="status">
      <p>
        浏览器图形上下文中断，三维画面已暂停更新。仿真与看板数据仍在运行，
        恢复后画面会自动继续；若长时间不恢复，可刷新页面。
      </p>
    </div>

    <div v-if="failed" class="scene-overlay" role="alert">
      <p>
        三维场景初始化失败，可能是浏览器不支持 WebGL 或硬件加速被关闭。
        设备列表、状态读数与生产看板仍可正常使用；也可以刷新页面重试。
      </p>
    </div>
  </div>
</template>
