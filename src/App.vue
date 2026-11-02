<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import type { AnomalyKey, CameraMode, DeviceId, DeviceStatus, SimSettings, ViewMode } from './types';
import { Simulation, STEPS_PER_SHIFT } from './simulation';
import { provideSimulation } from './simulation/context';
import { DEVICE_ABBR, DEVICE_SPECS, SHIFT } from './simulation/data';
import { settingsAt } from './simulation/runtime';
import { computeMetrics, describeDevice, deviceStatus } from './simulation/readouts';
import MrfScene from './ui/MrfScene.vue';
import type { DeviceListItem } from './ui/deviceList';
import DeviceList from './ui/DeviceList.vue';
import Dashboard from './ui/Dashboard.vue';
import EquipmentPanel from './ui/EquipmentPanel.vue';
import Timeline from './ui/Timeline.vue';
import TopBar from './ui/TopBar.vue';

const SPEEDS = [1, 2, 4];
/** 面板刷新约 8 Hz：够实时又不至于每帧都重读仿真。 */
const UI_INTERVAL = 0.12;

const STATUS_LABEL: Record<DeviceStatus, string> = {
  RUNNING: '运行中',
  WAITING: '等待',
  IDLE: '待机',
  WARNING: '报警',
  STOPPED: '已停机',
};

/**
 * 时钟实例用 shallowRef 持有：它是可变类实例，不能被 Vue 深度代理，
 * 否则仿真内部的高频写会穿过 Proxy，拖慢整条链路。
 */
const simulation = shallowRef(new Simulation());
provideSimulation(simulation.value);

/** 面板低频刷新的计数器：仿真状态原地更新，靠它通知 Vue 重新读取。 */
const uiTick = ref(0);
const refresh = () => {
  uiTick.value += 1;
};

const playing = ref(true);
const speed = ref(1);
const selected = ref<DeviceId | null>(null);
const viewMode = ref<ViewMode>('xray');
// 默认「自由视角」：打开即可用鼠标拖动旋转、滚轮缩放，便于临场讲解时绕着厂房看。
const cameraMode = ref<CameraMode>('free');
const interventionMode = ref(false);
const query = ref('');
const reducedMotion = ref(false);

let frameHandle = 0;
let mediaQuery: MediaQueryList | null = null;

const onMediaChange = () => {
  if (!mediaQuery) return;
  reducedMotion.value = mediaQuery.matches;
  if (mediaQuery.matches) playing.value = false;
};

onMounted(() => {
  // 尊重「减少动态效果」偏好：有该偏好就默认暂停。没有 matchMedia 的环境保持播放。
  if (typeof window.matchMedia === 'function') {
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', onMediaChange);
    reducedMotion.value = mediaQuery.matches;
    if (mediaQuery.matches) playing.value = false;
  }
  startClock();
  window.addEventListener('keydown', onKey);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(frameHandle);
  mediaQuery?.removeEventListener('change', onMediaChange);
  window.removeEventListener('keydown', onKey);
});

/** 一个动画帧驱动全厂的钟。后台标签页既不推进也不补算。 */
function startClock() {
  let last = performance.now();
  let uiClock = 0;
  const tick = (now: number) => {
    frameHandle = requestAnimationFrame(tick);
    const delta = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!playing.value || document.hidden) return;
    simulation.value.advanceBy(delta * speed.value);
    uiClock += delta;
    if (uiClock >= UI_INTERVAL) {
      uiClock = 0;
      refresh();
    }
  };
  frameHandle = requestAnimationFrame(tick);
}

const settings = computed<SimSettings>(() => {
  void uiTick.value;
  return settingsAt(simulation.value.commands, simulation.value.currentStep % STEPS_PER_SHIFT);
});
const state = computed(() => {
  void uiTick.value;
  return simulation.value.current;
});
const metrics = computed(() => {
  void uiTick.value;
  return computeMetrics(state.value, simulation.value.completedCycles);
});
const report = computed(() => {
  void uiTick.value;
  return selected.value ? describeDevice(state.value, selected.value, settings.value) : null;
});
const timeInShift = computed(() => {
  void uiTick.value;
  return simulation.value.timeInShift;
});
const cycle = computed(() => {
  void uiTick.value;
  return simulation.value.completedCycles;
});

const deviceItems = computed<DeviceListItem[]>(() => {
  const keyword = query.value.trim().toLowerCase();
  return DEVICE_SPECS.filter((spec) =>
    keyword ? `${spec.name} ${spec.nameEn} ${spec.process}`.toLowerCase().includes(keyword) : true,
  ).map((spec) => {
    const status = deviceStatus(state.value, spec.id);
    return {
      id: spec.id,
      name: spec.name,
      abbr: DEVICE_ABBR[spec.id],
      group: spec.group,
      process: spec.process,
      status,
      statusLabel: STATUS_LABEL[status],
    };
  });
});

const applyControl = (key: string, device: DeviceId | 'SYSTEM', value: number, flag = false) => {
  simulation.value.addCommand({ at: simulation.value.timeInShift, device, key, value, flag });
  refresh();
};

const toggleAnomaly = (key: AnomalyKey, value: boolean) => applyControl(key, 'SYSTEM', value ? 1 : 0, true);

const clearInterventions = () => {
  simulation.value.clearCommands();
  refresh();
};

const resetShift = () => {
  simulation.value.reset();
  refresh();
};

const scrub = (seconds: number) => {
  simulation.value.seekToTime(seconds);
  refresh();
};

const onKey = (event: KeyboardEvent) => {
  const target = event.target as HTMLElement | null;
  if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
  if (event.code === 'Space') {
    event.preventDefault();
    playing.value = !playing.value;
  } else if (event.key === 'r' || event.key === 'R') {
    resetShift();
  } else if (event.key === 'Escape') {
    selected.value = null;
  } else if (SPEEDS.includes(Number(event.key))) {
    speed.value = Number(event.key);
  }
};
</script>

<template>
  <div :class="`app-shell${reducedMotion ? ' reduce-motion' : ''}`">
    <TopBar
      :time-in-shift="timeInShift"
      :duration="SHIFT.DURATION"
      :cycle="cycle"
      :playing="playing"
      :speed="speed"
      :speeds="SPEEDS"
      :view-mode="viewMode"
      :intervention-mode="interventionMode"
      :emergency-stop="state.anomalies.emergencyStop"
      :metrics="metrics"
      @toggle-play="playing = !playing"
      @speed="speed = $event"
      @reset="resetShift"
      @toggle-view="viewMode = viewMode === 'xray' ? 'enclosed' : 'xray'"
      @toggle-intervention="interventionMode = !interventionMode"
    />
    <main class="app-body">
      <DeviceList
        :items="deviceItems"
        :selected="selected"
        :query="query"
        @query="query = $event"
        @select="selected = $event"
      />
      <section class="app-stage" aria-label="分拣中心三维场景">
        <MrfScene
          :camera-mode="cameraMode"
          :selected="selected"
          :view-mode="viewMode"
          :reduced-motion="reducedMotion"
          @camera-mode="cameraMode = $event"
          @select="selected = $event"
        />
        <Timeline
          :duration="SHIFT.DURATION"
          :event-log="state.events"
          :playing="playing"
          :time-in-shift="timeInShift"
          @scrub="scrub"
        />
      </section>
      <div class="app-side">
        <EquipmentPanel
          :anomalies="state.anomalies"
          :commands="simulation.commands"
          :intervention-mode="interventionMode"
          :report="report"
          :settings="settings"
          @control="(key, device, value) => applyControl(key, device, value)"
          @toggle-anomaly="toggleAnomaly"
          @clear-interventions="clearInterventions"
        />
        <Dashboard :cycle="cycle" :metrics="metrics" :state="state" @select="selected = $event" />
      </div>
    </main>
  </div>
</template>
