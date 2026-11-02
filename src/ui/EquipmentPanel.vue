<script setup lang="ts">
import type { Anomalies, AnomalyKey, DeviceId, DeviceReport, SimSettings, TimedCommand } from '../types';
import { DEVICE_ABBR, DEVICE_SPEC_BY_ID } from '../simulation/data';

const props = defineProps<{
  report: DeviceReport | null;
  settings: SimSettings;
  interventionMode: boolean;
  anomalies: Anomalies;
  commands: readonly TimedCommand[];
}>();

const emit = defineEmits<{
  (event: 'control', key: string, device: DeviceId | 'SYSTEM', value: number): void;
  (event: 'toggleAnomaly', key: AnomalyKey, value: boolean): void;
  (event: 'clearInterventions'): void;
}>();

const ANOMALIES: { key: AnomalyKey; label: string; hint: string }[] = [
  { key: 'missort', label: '光选误判', hint: '识别成功率下降，更多瓶料与织物进入尾料' },
  { key: 'siloOverflowWarning', label: '料仓满溢预警', hint: '报警线提前一包：达到容量前 1 包即报警，关闭时只在满仓后报警' },
  { key: 'emergencyStop', label: '紧急停机', hint: '分拣线与搬运立即停止，门岗计划照常，班末清场保证循环不残留' },
];

/** 上下游用与列表一致的中文名显示。 */
const names = (ids: DeviceId[]): string =>
  ids.length ? ids.map((id) => DEVICE_SPEC_BY_ID[id]?.name ?? id).join(' → ') : '无（本工序为端点）';

const controlValue = (key: string, fallback: number) => props.settings.numbers[key] ?? fallback;
</script>

<template>
  <section class="panel equipment-panel" aria-label="设备详情与模拟控制">
    <div class="panel-head">
      <h2>设备详情</h2>
      <span v-if="props.report" :class="`status-pill status-${props.report.status.toLowerCase()}`">{{ props.report.statusLabel }}</span>
    </div>

    <p v-if="!props.report" class="muted">从左侧列表或三维场景中点击一台设备，查看状态、读数与上下游关系。</p>

    <template v-else>
      <div class="equipment-title">
        <h3>{{ props.report.spec.name }}</h3>
        <p class="muted">
          编号 {{ DEVICE_ABBR[props.report.id] }} · {{ props.report.spec.nameEn }} · {{ props.report.spec.process }}
        </p>
      </div>

      <dl class="readouts">
        <div v-for="readout in props.report.readouts" :key="readout.label" :class="readout.tone ? `tone-${readout.tone}` : undefined">
          <dt>{{ readout.label }}</dt>
          <dd>{{ readout.value }}</dd>
        </div>
      </dl>

      <p class="equipment-note">{{ props.report.stateNote }}</p>

      <div class="flow">
        <div>
          <h4>上游</h4>
          <p>{{ names(props.report.upstream) }}</p>
        </div>
        <div>
          <h4>下游</h4>
          <p>{{ names(props.report.downstream) }}</p>
        </div>
      </div>

      <fieldset v-if="props.report.controls.length > 0" class="controls" :disabled="!props.interventionMode">
        <legend>模拟控制{{ props.interventionMode ? '' : '（需开启干预模式）' }}</legend>
        <label v-for="control in props.report.controls" :key="control.key" class="control">
          <span>
            {{ control.label }}
            <em>{{ controlValue(control.key, control.default) }}{{ control.unit ? ` ${control.unit}` : '' }}</em>
          </span>
          <input
            type="range"
            :min="control.min"
            :max="control.max"
            :step="control.step"
            :value="controlValue(control.key, control.default)"
            @change="emit('control', control.key, props.report!.id, Number(($event.target as HTMLInputElement).value))"
          />
          <small class="muted">{{ control.description }}</small>
        </label>
      </fieldset>
    </template>

    <fieldset class="anomalies">
      <legend>异常演示开关</legend>
      <label v-for="item in ANOMALIES" :key="item.key" class="switch">
        <input
          type="checkbox"
          :checked="props.anomalies[item.key]"
          @change="emit('toggleAnomaly', item.key, ($event.target as HTMLInputElement).checked)"
        />
        <span>
          {{ item.label }}
          <small class="muted">{{ item.hint }}</small>
        </span>
      </label>
    </fieldset>

    <div class="intervention-log">
      <h4>干预记录（{{ props.commands.length }}）</h4>
      <template v-if="props.commands.length === 0">
        <p class="muted">尚未干预，演示按默认参数运行。</p>
      </template>
      <template v-else>
        <ul>
          <li v-for="(command, index) in props.commands" :key="`${command.at}-${command.key}-${index}`">
            {{ command.at.toFixed(1) }}s · {{ command.device }} · {{ command.key }} = {{ command.value }}
          </li>
        </ul>
        <button type="button" @click="emit('clearInterventions')">清除全部干预</button>
      </template>
    </div>

    <p class="boundary">{{ props.report ? props.report.boundary : '所有读数与状态均为本地仿真值。' }}</p>
  </section>
</template>
