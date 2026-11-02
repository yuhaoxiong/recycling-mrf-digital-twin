<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import {
  CAPACITY,
  EQUIPMENT,
  EQUIPMENT_IDS,
  HORIZON,
  MATERIALS,
  PARAMETER_LIMITS,
  SMALL_GRADES,
  type EquipmentId,
  type Parameter,
} from './process';
import { ActualSimulation, deviceStatus, openGate } from './engine';
import ActualScene from './ActualScene.vue';
import cad from './cad-layout.json';
import './actual.css';

export type CameraView = 'overview' | 'top' | 'focus';

const PHASE_NAMES = {
  MANUAL_TRANSFER: '人工转运',
  DISCHARGING: '料仓放料',
  CONVEYING: '输送供料',
  COMPRESSING: '压缩成型',
  EJECTING: '出包',
};

const PARAMETERS: { id: Parameter; label: string; unit: string; step: number }[] = [
  { id: 'feedRate', label: '上料节拍', unit: '批/min', step: 10 },
  { id: 'beltSpeed', label: '输送倍率', unit: '×', step: 0.1 },
  { id: 'threshold', label: '成品仓打包阈值', unit: '批', step: 1 },
  { id: 'robotSpeed', label: '机械手动作倍率', unit: '×', step: 0.1 },
];

const STOPS = [
  { time: 0, label: '上料' },
  { time: 35, label: '人工 / 脱标' },
  { time: 60, label: '二次分选' },
  { time: 100, label: '自动打包' },
  { time: 180, label: '持续运行' },
];

const formatTime = (time: number) =>
  `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}:${Math.floor(time % 60)
    .toString()
    .padStart(2, '0')}`;

/** 引擎是可变类实例，用 shallowRef 持有，避免被 Vue 深度代理。 */
const simulation = shallowRef(new ActualSimulation());
const uiTick = ref(0);
const refresh = () => {
  uiTick.value += 1;
};

const playing = ref(
  !(
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ),
);
const speed = ref(1);
const selected = ref<EquipmentId>('E17');
const view = ref<CameraView>('overview');
const xray = ref(true);
const paths = ref(true);
const shell = ref(false);

let frameHandle = 0;
let last = 0;
let uiTime = 0;

const onKey = (event: KeyboardEvent) => {
  if ((event.target as HTMLElement)?.closest?.('input,select,textarea,button')) return;
  if (event.code === 'Space') {
    event.preventDefault();
    playing.value = !playing.value;
  }
};

onMounted(() => {
  last = performance.now();
  const frame = (now: number) => {
    frameHandle = requestAnimationFrame(frame);
    const delta = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (!playing.value || document.hidden) return;
    simulation.value.advanceBy(Math.min(delta * speed.value, Math.max(0, HORIZON - simulation.value.current.time)));
    uiTime += delta;
    if (uiTime >= 0.12) {
      refresh();
      uiTime = 0;
    }
    if (simulation.value.current.time >= HORIZON) {
      playing.value = false;
      refresh();
    }
  };
  frameHandle = requestAnimationFrame(frame);
  window.addEventListener('keydown', onKey);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(frameHandle);
  window.removeEventListener('keydown', onKey);
});

const state = computed(() => {
  void uiTick.value;
  return simulation.value.current;
});
const status = computed(() => deviceStatus(state.value, selected.value));
const baled = computed(() => state.value.bales.reduce((sum, bale) => sum + bale.count, 0));
const inProcess = computed(() => state.value.units.length - baled.value);
const job = computed(() => state.value.job);
const gate = computed(() => (openGate(state.value) ? `${openGate(state.value)} 开启` : '两仓关闭'));

const selectDevice = (id: EquipmentId) => {
  selected.value = id;
  view.value = 'focus';
};

const seek = (time: number) => {
  simulation.value.seek(time);
  playing.value = false;
  refresh();
};

const play = () => {
  if (!playing.value && state.value.time >= HORIZON) simulation.value.seek(0);
  playing.value = !playing.value;
  refresh();
};

const setPower = (enabled: boolean) => {
  simulation.value.setPower(selected.value, enabled);
  refresh();
};

const setParameter = (id: Parameter, value: number) => {
  simulation.value.setParameter(id, Number(value));
  refresh();
};

const reset = () => {
  simulation.value.reset();
  playing.value = false;
  refresh();
};

const siloLabel = (id: 'E02' | 'E03' | 'E04' | 'E05') =>
  id === 'E02' ? '三色中转' : id === 'E03' ? '杂瓶中转' : id === 'E04' ? '3A 成品' : '杂色 PET 成品';

const siloColor = (id: 'E02' | 'E03' | 'E04' | 'E05') =>
  id === 'E04' ? MATERIALS['3A'].color : id === 'E05' ? MATERIALS.MIXED.color : id === 'E03' ? '#e9bf75' : '#5bd7ac';

const packingStage = (index: number) => {
  const current = job.value;
  if (!current) return false;
  return current.phase === 'EJECTING' ? index === 2 : current.phase === 'COMPRESSING' ? index === 1 : index === 0;
};
</script>

<template>
  <div class="actual-app">
    <header class="actual-header">
      <div class="actual-brand">
        <span class="brand-mark"><i /><i /><i /></span>
        <div>
          <span class="eyebrow">RELOOP / TONGXIANG</span>
          <h1>桐乡分拣线<span>实际设备运行动画</span></h1>
        </div>
      </div>
      <div class="header-context">
        <span class="live-dot" />
        工艺模拟
        <a href="./index.html" target="_blank" rel="noreferrer">原演示 ↗</a>
      </div>
    </header>

    <section class="actual-metrics" aria-label="产线模拟统计">
      <div>
        <span>累计上料</span>
        <strong data-testid="received-count">{{ state.units.length }}<small>批</small></strong>
      </div>
      <div>
        <span>已打包</span>
        <strong data-testid="baled-count">{{ baled }}<small>批 / {{ state.bales.length }} 包</small></strong>
      </div>
      <div>
        <span>在制物料</span>
        <strong>{{ inProcess }}<small>批</small></strong>
      </div>
      <p>
        <i />
        {{ job ? `${MATERIALS[job.grade].name} · ${PHASE_NAMES[job.phase]}` : '共用打包机等待供料' }}
      </p>
    </section>

    <main class="actual-workspace">
      <section class="actual-stage" aria-label="实际产线三维动画">
        <ActualScene
          :simulation="simulation"
          :selected="selected"
          :xray="xray"
          :paths="paths"
          :shell="shell"
          :view="view"
          @select="selectDevice"
        />
        <div class="actual-view-tools" aria-label="三维视图控制">
          <div>
            <button
              v-for="item in [
                ['overview', '全线'],
                ['top', '俯视'],
                ['focus', '聚焦设备'],
              ]"
              :key="item[0]"
              :aria-pressed="view === item[0]"
              @click="view = item[0] as CameraView"
            >
              {{ item[1] }}
            </button>
          </div>
          <div>
            <button :aria-pressed="xray" @click="xray = !xray">工艺透视</button>
            <button :aria-pressed="paths" @click="paths = !paths">流向</button>
            <button :aria-pressed="shell" @click="shell = !shell">厂房</button>
          </div>
        </div>
        <div class="material-legend">
          <span v-for="grade in ['3A', 'MIXED', 'GREEN', 'BROWN'] as const" :key="grade">
            <i :style="{ background: MATERIALS[grade].color }" />
            {{ MATERIALS[grade].name }}
          </span>
          <span><i style="background: #e9bf75" />人工分拣支路</span>
        </div>
      </section>

      <aside class="actual-inspector" aria-label="实际设备详情与工艺控制">
        <section class="equipment-detail">
          <div class="section-heading">
            <span>设备详情</span>
            <span :class="state.power[selected] ? 'device-state' : 'device-state stopped'">{{ status }}</span>
          </div>
          <label class="sr-only" for="actual-device">选择实际设备</label>
          <select id="actual-device" :value="selected" @change="selectDevice(($event.target as HTMLSelectElement).value as EquipmentId)">
            <option v-for="id in EQUIPMENT_IDS" :key="id" :value="id">{{ id }} · {{ EQUIPMENT[id] }}</option>
          </select>
          <h2><span>{{ selected }}</span>{{ EQUIPMENT[selected] }}</h2>
          <p class="cad-name">CAD 原名：{{ cad[selected].name }}</p>
          <label class="power-switch">
            <span>模拟设备启用</span>
            <input type="checkbox" :checked="state.power[selected]" @change="setPower(($event.target as HTMLInputElement).checked)" />
          </label>
        </section>

        <section class="silo-panel" aria-label="四个料仓库存">
          <div class="section-heading">
            <span>料仓存量</span>
            <small>模拟批次</small>
          </div>
          <button
            v-for="id in ['E02', 'E03', 'E04', 'E05'] as const"
            :key="id"
            :class="`silo-row ${selected === id ? 'selected' : ''}`"
            :aria-label="`${id} ${EQUIPMENT[id]} ${state.stocks[id].length}批`"
            @click="selectDevice(id)"
          >
            <span>{{ id }} · {{ siloLabel(id) }}</span>
            <strong>{{ state.stocks[id].length }}<small> / {{ CAPACITY }}</small></strong>
            <span class="stock-track">
              <i :style="{ width: `${(state.stocks[id].length / CAPACITY) * 100}%`, background: siloColor(id) }" />
              <b v-if="id === 'E04' || id === 'E05'" :style="{ left: `${(state.settings.threshold / CAPACITY) * 100}%` }" />
            </span>
          </button>
        </section>

        <section class="baler-panel" aria-label="共用打包资源">
          <div class="section-heading">
            <span>共用打包机</span>
            <small>E13</small>
          </div>
          <div class="packing-status">
            <i :class="job ? 'on' : ''" />
            <strong>{{ job ? PHASE_NAMES[job.phase] : '待料' }}</strong>
            <span>{{ job ? MATERIALS[job.grade].name : '—' }}</span>
          </div>
          <p class="gate-status">仓门互锁 <span>{{ gate }}</span></p>
          <div class="packing-stages">
            <span v-for="(name, index) in ['供料', '压缩', '出包']" :key="name" :class="packingStage(index) ? 'active' : ''">
              {{ name }}
            </span>
          </div>
        </section>

        <details class="small-stock-panel">
          <summary>独立小仓位 <span>{{ SMALL_GRADES.reduce((sum, grade) => sum + state.stocks[grade].length, 0) }} 批</span></summary>
          <div>
            <p v-for="grade in SMALL_GRADES" :key="grade">
              <i :style="{ background: MATERIALS[grade].color }" />
              {{ MATERIALS[grade].name }}
              <strong>{{ state.stocks[grade].length }}</strong>
            </p>
          </div>
          <small>每 6 批申请人工转运，共用同一打包资源。</small>
        </details>

        <details class="actual-parameters">
          <summary>模拟参数 <span>可调整</span></summary>
          <label v-for="parameter in PARAMETERS" :key="parameter.id">
            <span>
              {{ parameter.label }}
              <strong>{{ state.settings[parameter.id].toFixed(parameter.step < 1 ? 1 : 0) }} {{ parameter.unit }}</strong>
            </span>
            <input
              type="range"
              :aria-label="parameter.label"
              :min="PARAMETER_LIMITS[parameter.id][0]"
              :max="PARAMETER_LIMITS[parameter.id][1]"
              :step="parameter.step"
              :value="state.settings[parameter.id]"
              @change="setParameter(parameter.id, Number(($event.target as HTMLInputElement).value))"
            />
          </label>
          <small>调整按当前时刻记录，拖回历史可重放。</small>
        </details>

        <div class="actual-events" aria-label="最近生产事件">
          <p v-for="(event, index) in state.events.slice(-3).reverse()" :key="`${event.time}-${index}`">
            <time>{{ formatTime(event.time) }}</time>{{ event.text }}
          </p>
        </div>

        <details class="actual-disclaimer">
          <summary>模拟说明</summary>
          <p>
            设备几何与位置来自 STEP。带速、比例、仓容和节拍为演示参数；每个可视瓶代表模拟批次。小仓位、人工转运路线及内部运动为示意，待现场校准。
          </p>
          <p>到达 6 分钟时暂停并保留在制物料，不执行班末强制清场。重播从起点开始，重置同时清除参数干预。</p>
        </details>
      </aside>
    </main>

    <footer class="actual-playback">
      <div class="playback-controls">
        <button class="play-button" :aria-label="playing ? '暂停' : state.time >= HORIZON ? '重播' : '播放'" @click="play">
          {{ playing ? '⏸' : '▶' }}
        </button>
        <button class="reset-button" aria-label="重置实际产线" @click="reset">↺</button>
        <select aria-label="播放倍速" :value="speed" @change="speed = Number(($event.target as HTMLSelectElement).value)">
          <option v-for="value in [1, 2, 4, 8]" :key="value" :value="value">{{ value }}×</option>
        </select>
        <span class="playback-time">{{ formatTime(state.time) }}<small> / {{ formatTime(HORIZON) }}</small></span>
      </div>
      <div class="actual-timeline">
        <label class="sr-only" for="actual-time">实际产线时间轴</label>
        <input
          id="actual-time"
          type="range"
          min="0"
          :max="HORIZON"
          step="0.1"
          :value="state.time"
          @input="seek(Number(($event.target as HTMLInputElement).value))"
        />
        <div class="actual-milestones">
          <button
            v-for="stop in STOPS"
            :key="stop.time"
            :style="{ left: `${(stop.time / HORIZON) * 100}%` }"
            @click="seek(stop.time)"
          >
            {{ stop.label }}
          </button>
        </div>
      </div>
      <span class="playback-note">真实布局<br />演示节拍</span>
    </footer>
  </div>
</template>
