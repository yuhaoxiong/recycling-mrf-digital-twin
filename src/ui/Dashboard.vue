<script setup lang="ts">
import { computed } from 'vue';
import type { DeviceId, Metrics, SimState } from '../types';
import { SEVEN_DAY_TREND, SILO_CONFIG, MATERIAL_META } from '../simulation/data';

const props = defineProps<{
  metrics: Metrics;
  state: SimState;
  cycle: number;
}>();

const emit = defineEmits<{
  (event: 'select', id: DeviceId | null): void;
}>();

const SOURCE_DEVICE: Record<string, DeviceId> = {
  SILO_PET: 'SILO_PET',
  SILO_HDPE: 'SILO_HDPE',
  SILO_COTTON: 'SILO_COTTON',
  SILO_POLYESTER: 'SILO_POLYESTER',
  SILO_BLEND: 'SILO_BLEND',
};

const TREND_WIDTH = 300;
const TREND_HEIGHT = 92;

const peak = computed(() => Math.max(...SEVEN_DAY_TREND.map((day) => Math.max(day.receivedT, day.shippedT))) * 1.15);
const slot = TREND_WIDTH / SEVEN_DAY_TREND.length;
const barWidth = slot * 0.28;
const trendLabel = computed(() =>
  SEVEN_DAY_TREND.map((day) => `${day.day} 进 ${day.receivedT} 吨、出 ${day.shippedT} 吨`).join('；'),
);

const activeJobs = computed(() => props.state.jobs.filter((job) => job.status === 'ACTIVE'));
const balesWaiting = computed(() => props.state.bales.filter((bale) => bale.status === 'READY' || bale.status === 'AT_DOCK'));
const siloIds = Object.keys(SILO_CONFIG) as (keyof typeof SILO_CONFIG)[];
</script>

<template>
  <section class="panel dashboard" aria-label="生产数据看板">
    <div class="panel-head">
      <h2>生产看板</h2>
      <span class="muted">本班次数据（模拟）</span>
    </div>

    <table class="material-table">
      <caption class="sr-only">分品类进出存</caption>
      <thead>
        <tr>
          <th scope="col">品类</th>
          <th scope="col">进料</th>
          <th scope="col">出货</th>
          <th scope="col">在厂</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in props.metrics.byMaterial" :key="row.material">
          <th scope="row">{{ row.label }}</th>
          <td>{{ row.received }}</td>
          <td>{{ row.shipped }}</td>
          <td>{{ row.onSite }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">合计</th>
          <td>{{ props.metrics.receivedUnits }}</td>
          <td>{{ props.metrics.shippedUnits }}</td>
          <td>{{ props.metrics.onSiteUnits }}</td>
        </tr>
      </tfoot>
    </table>

    <div class="silo-levels">
      <h4>料仓水位</h4>
      <button v-for="id in siloIds" :key="id" type="button" class="silo-row" @click="emit('select', SOURCE_DEVICE[id])">
        <!-- 与看板表格、场景图例统一用短名，完整牌号留在 title 里，避免窄栏被英文长名截断。 -->
        <span class="silo-name" :title="props.state.silos[id].material">
          {{ MATERIAL_META[props.state.silos[id].material].short }}
        </span>
        <span class="silo-track" role="img" :aria-label="`${props.state.silos[id].units} / ${props.state.silos[id].capacity} 包`">
          <span
            class="silo-fill"
            :style="{ width: `${Math.round((props.state.silos[id].capacity ? props.state.silos[id].units / props.state.silos[id].capacity : 0) * 100)}%` }"
          />
          <span
            class="silo-threshold"
            :style="{ left: `${Math.round((props.state.silos[id].threshold / props.state.silos[id].capacity) * 100)}%` }"
          />
        </span>
        <span class="silo-value">{{ props.state.silos[id].units }}/{{ props.state.silos[id].capacity }}</span>
      </button>
    </div>

    <div class="task-list">
      <h4>搬运任务</h4>
      <p v-if="activeJobs.length === 0 && balesWaiting.length === 0" class="muted">当前没有进行中的搬运任务。</p>
      <ul v-else>
        <li v-for="job in activeJobs" :key="job.id">
          <span class="dot status-running" aria-hidden="true" />
          {{ job.vehicle ?? '—' }} · {{ job.label }}
        </li>
        <li v-for="bale in balesWaiting" :key="`bale-${bale.id}`">
          <span class="dot status-waiting" aria-hidden="true" />
          待搬运 · {{ bale.material }} 打包块 {{ bale.massT.toFixed(2) }} t
        </li>
      </ul>
    </div>

    <dl class="mini-stats">
      <div>
        <dt>本班次打包</dt>
        <dd>{{ props.metrics.balesProduced }} 个</dd>
      </div>
      <div>
        <dt>叉车趟数</dt>
        <dd>{{ props.metrics.forkliftTrips }}</dd>
      </div>
      <div>
        <dt>在厂车辆</dt>
        <dd>{{ props.metrics.truckTrips }}</dd>
      </div>
      <div>
        <dt>在厂物料</dt>
        <dd>{{ props.metrics.onSiteUnits }} 包</dd>
      </div>
      <div>
        <dt>转入杂项</dt>
        <dd :class="props.metrics.tailUnits > 0 ? 'tone-warn' : undefined">{{ props.metrics.tailUnits }} 包</dd>
      </div>
      <div>
        <dt>丢失计数</dt>
        <dd>{{ props.metrics.lostUnits }} 包</dd>
      </div>
    </dl>

    <!-- 固定刻度的柱状图：纯 SVG，不引入图表库 -->
    <figure class="trend">
      <figcaption>近 7 日进出货量（t）<span class="muted">演示数据</span></figcaption>
      <svg :viewBox="`0 0 ${TREND_WIDTH} ${TREND_HEIGHT + 14}`" role="img" :aria-label="`近 7 日进出货量演示数据：${trendLabel}`">
        <line
          v-for="line in [0.25, 0.5, 0.75, 1]"
          :key="line"
          :x1="0"
          :x2="TREND_WIDTH"
          :y1="TREND_HEIGHT - TREND_HEIGHT * line"
          :y2="TREND_HEIGHT - TREND_HEIGHT * line"
          stroke="#2b3f4a"
          :stroke-width="1"
          stroke-dasharray="3 5"
        />
        <g v-for="(day, index) in SEVEN_DAY_TREND" :key="day.day">
          <rect
            :x="index * slot + slot / 2 - barWidth - 1"
            :y="TREND_HEIGHT - (day.receivedT / peak) * TREND_HEIGHT"
            :width="barWidth"
            :height="(day.receivedT / peak) * TREND_HEIGHT"
            fill="#4aa8e0"
            :rx="1"
          />
          <rect
            :x="index * slot + slot / 2 + 1"
            :y="TREND_HEIGHT - (day.shippedT / peak) * TREND_HEIGHT"
            :width="barWidth"
            :height="(day.shippedT / peak) * TREND_HEIGHT"
            fill="#3fbf8b"
            :rx="1"
          />
          <text :x="index * slot + slot / 2" :y="TREND_HEIGHT + 11" text-anchor="middle" font-size="9" fill="#8fa3ad">{{ day.day }}</text>
        </g>
      </svg>
      <p class="trend-legend">
        <span><i style="background: #4aa8e0" />进料</span>
        <span><i style="background: #3fbf8b" />出货</span>
      </p>
    </figure>

    <p class="boundary">
      以上进出货量按 1 个演示物料单元折算为真实料包质量（塑料 0.15 t、纺织 0.08 t、纸板 0.25 t、杂项 0.2 t），
      每班两轮。演示规模只用于在一次班次内完整呈现全流程，真实分拣中心的日处理量远高于此。
    </p>
  </section>
</template>
