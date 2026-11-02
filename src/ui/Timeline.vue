<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, type CSSProperties } from 'vue';
import { LABEL_ROW_HEIGHT, TIMELINE_MILESTONES, layoutMilestoneLabels } from './timelineLayout';

const props = defineProps<{
  timeInShift: number;
  duration: number;
  playing: boolean;
  eventLog: readonly string[];
}>();

const emit = defineEmits<{
  (event: 'scrub', seconds: number): void;
}>();

const trackRef = ref<HTMLDivElement | null>(null);
const trackWidth = ref(0);
let observer: ResizeObserver | null = null;

// 标签错行依赖导轨的真实像素宽度，因此拿一次实测宽度，并在缩放时跟随。
const measure = () => {
  if (trackRef.value) trackWidth.value = trackRef.value.clientWidth;
};

onMounted(() => {
  measure();
  if (typeof ResizeObserver === 'function' && trackRef.value) {
    observer = new ResizeObserver(measure);
    observer.observe(trackRef.value);
  } else {
    window.addEventListener('resize', measure);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
  window.removeEventListener('resize', measure);
});

const latest = computed(() => props.eventLog.slice(-6).reverse());
const labelSpans = computed(() => layoutMilestoneLabels(TIMELINE_MILESTONES, props.duration, trackWidth.value));
const lastRow = computed(() => labelSpans.value.reduce((max, span) => Math.max(max, span.row), 0));

const markStyle = (index: number): CSSProperties => ({
  left: `${(TIMELINE_MILESTONES[index].at / props.duration) * 100}%`,
  top: labelSpans.value[index].row * LABEL_ROW_HEIGHT,
  '--mark-lift': `${labelSpans.value[index].row * LABEL_ROW_HEIGHT}px`,
});
</script>

<template>
  <section class="timeline" aria-label="班次时间轴">
    <div ref="trackRef" class="timeline-track" :style="{ paddingBottom: 16 + lastRow * LABEL_ROW_HEIGHT }">
      <input
        type="range"
        min="0"
        :max="props.duration"
        step="0.1"
        :value="props.timeInShift"
        aria-label="拖动查看任意时刻的现场状态"
        @input="emit('scrub', Number(($event.target as HTMLInputElement).value))"
      />
      <!-- 交互式里程碑留在无障碍树里：它们是真的跳转按钮。 -->
      <div class="timeline-marks">
        <button
          v-for="(milestone, index) in TIMELINE_MILESTONES"
          :key="milestone.at"
          type="button"
          class="timeline-mark"
          :style="markStyle(index)"
          :title="`${milestone.label}（${milestone.at}s）`"
          @click="emit('scrub', milestone.at)"
        >
          <span>{{ milestone.label }}</span>
        </button>
      </div>
    </div>
    <div class="timeline-foot">
      <span class="timeline-time">
        {{ props.timeInShift.toFixed(1) }}s / {{ props.duration }}s {{ props.playing ? '· 播放中' : '· 已暂停' }}
      </span>
      <ol class="event-feed" aria-live="polite">
        <li v-for="event in latest" :key="event">{{ event }}</li>
      </ol>
    </div>
  </section>
</template>
