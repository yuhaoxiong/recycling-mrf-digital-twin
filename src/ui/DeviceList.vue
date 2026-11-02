<script setup lang="ts">
import type { DeviceId } from '../types';
import { GROUP_LABEL, GROUP_ORDER, type DeviceListItem } from './deviceList';

const props = defineProps<{
  items: DeviceListItem[];
  selected: DeviceId | null;
  query: string;
}>();

const emit = defineEmits<{
  (event: 'select', id: DeviceId | null): void;
  (event: 'query', value: string): void;
}>();

const groupItems = (group: DeviceListItem['group']) => props.items.filter((item) => item.group === group);
</script>

<template>
  <aside class="panel device-list" aria-label="设备与车辆列表">
    <div class="panel-head">
      <h2>设备与车辆</h2>
      <span class="muted">{{ props.items.length }} 项</span>
    </div>
    <label class="search">
      <span class="sr-only">搜索设备</span>
      <input
        type="search"
        placeholder="搜索设备、编号或工艺"
        :value="props.query"
        @input="emit('query', ($event.target as HTMLInputElement).value)"
      />
    </label>
    <div class="device-groups">
      <template v-for="group in GROUP_ORDER" :key="group">
        <section v-if="groupItems(group).length" class="device-group">
          <h3>{{ GROUP_LABEL[group] }}</h3>
          <ul>
            <li v-for="item in groupItems(group)" :key="item.id">
              <button
                type="button"
                :class="`device-row${props.selected === item.id ? ' is-selected' : ''}`"
                :aria-pressed="props.selected === item.id"
                @click="emit('select', props.selected === item.id ? null : item.id)"
              >
                <span :class="`dot status-${item.status.toLowerCase()}`" aria-hidden="true" />
                <span class="device-name">
                  {{ item.name }}
                  <em class="device-code">{{ item.abbr }}</em>
                </span>
                <span class="device-status">{{ item.statusLabel }}</span>
              </button>
            </li>
          </ul>
        </section>
      </template>
      <p v-if="props.items.length === 0" class="muted">没有匹配的设备。</p>
    </div>
  </aside>
</template>
