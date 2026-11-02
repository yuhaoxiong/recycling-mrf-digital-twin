<script setup lang="ts">
import type { Metrics, ViewMode } from '../types';

/**
 * 顶栏：品牌、KPI 摘要、播放/倍速/复位、视角切换与干预模式开关。
 * React 版是一堆 props + 回调；Vue 版用 `defineProps` 声明输入、
 * `defineEmits` 声明输出，父组件监听事件即可。
 */
const props = defineProps<{
  timeInShift: number;
  duration: number;
  cycle: number;
  playing: boolean;
  speed: number;
  speeds: number[];
  viewMode: ViewMode;
  interventionMode: boolean;
  emergencyStop: boolean;
  metrics: Metrics;
}>();

const emit = defineEmits<{
  (event: 'togglePlay'): void;
  (event: 'speed', value: number): void;
  (event: 'reset'): void;
  (event: 'toggleView'): void;
  (event: 'toggleIntervention'): void;
}>();

const percent = (value: number): string => `${Math.round(value * 100)}%`;
</script>

<template>
  <header class="top-bar">
    <div class="brand">
      <strong>RELOOP MRF</strong>
      <span class="muted">可回收物分拣中心数字孪生 · 概念演示</span>
    </div>

    <dl class="kpi-row">
      <div>
        <dt>当日进料</dt>
        <dd>{{ props.metrics.receivedMassT.toFixed(2) }} t</dd>
      </div>
      <div>
        <dt>当日出货</dt>
        <dd>{{ props.metrics.shippedMassT.toFixed(2) }} t</dd>
      </div>
      <div>
        <dt>回收率</dt>
        <dd>{{ percent(props.metrics.recoveryRate) }}</dd>
      </div>
      <div>
        <dt>运行设备</dt>
        <dd>{{ props.metrics.runningDevices }}/{{ props.metrics.totalDevices }}</dd>
      </div>
      <div>
        <dt>班次进度</dt>
        <dd>{{ percent(props.metrics.shiftProgress) }}</dd>
      </div>
    </dl>

    <div class="top-controls">
      <button type="button" class="primary" @click="emit('togglePlay')">
        {{ props.playing ? '暂停' : '继续' }}
      </button>
      <div class="speed-group" role="group" aria-label="播放倍速">
        <button
          v-for="value in props.speeds"
          :key="value"
          type="button"
          :class="props.speed === value ? 'is-active' : ''"
          :aria-pressed="props.speed === value"
          @click="emit('speed', value)"
        >
          {{ value }}×
        </button>
      </div>
      <button type="button" @click="emit('reset')">复位</button>
      <button type="button" @click="emit('toggleView')">
        {{ props.viewMode === 'xray' ? '显示屋顶' : '透视厂房' }}
      </button>
      <button
        type="button"
        :class="props.interventionMode ? 'is-active' : ''"
        :aria-pressed="props.interventionMode"
        title="默认只读；开启后才允许修改设备参数"
        @click="emit('toggleIntervention')"
      >
        干预模式
      </button>
      <span class="clock" aria-live="polite">
        {{ props.timeInShift.toFixed(1) }}s / {{ props.duration }}s · 第 {{ props.cycle + 1 }} 班次
      </span>
    </div>

    <p v-if="props.emergencyStop" class="banner danger" role="status">
      紧急停机已启用：分拣线与搬运已停止，车辆仍按门岗计划进出。
    </p>
  </header>
</template>
