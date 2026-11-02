import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { SHIFT } from '../src/simulation/data';
import { stateAtStep } from '../src/simulation';
import { settingsAt } from '../src/simulation/runtime';
import { computeMetrics, describeDevice, deviceStatus } from '../src/simulation/readouts';
import type { DeviceId } from '../src/types';
import Dashboard from '../src/ui/Dashboard.vue';
import DeviceList from '../src/ui/DeviceList.vue';
import { GROUP_LABEL } from '../src/ui/deviceList';
import EquipmentPanel from '../src/ui/EquipmentPanel.vue';
import Timeline from '../src/ui/Timeline.vue';
import { TIMELINE_MILESTONES, layoutMilestoneLabels } from '../src/ui/timelineLayout';
import TopBar from '../src/ui/TopBar.vue';

const state = stateAtStep(1200, []);
const settings = settingsAt([], 1200);
const metrics = computeMetrics(state, 0);

const baseTopBar = {
  timeInShift: 40,
  duration: SHIFT.DURATION,
  cycle: 0,
  playing: true,
  speed: 1,
  speeds: [1, 2, 4],
  viewMode: 'xray' as const,
  interventionMode: false,
  emergencyStop: false,
  metrics,
};

/** 按无障碍名称找按钮，与原 Testing Library 的 getByRole 语义等价。 */
const buttonByText = (wrapper: ReturnType<typeof mount>, text: string) =>
  wrapper.findAll('button').find((button) => button.text().includes(text));

describe('顶栏', () => {
  it('展示关键指标，并把播放、倍速、复位、视角与干预都接出来', async () => {
    const wrapper = mount(TopBar, { props: baseTopBar });
    expect(wrapper.text()).toContain('当日进料');
    expect(wrapper.text()).toContain('回收率');

    await buttonByText(wrapper, '暂停')!.trigger('click');
    await buttonByText(wrapper, '2×')!.trigger('click');
    await buttonByText(wrapper, '复位')!.trigger('click');
    await buttonByText(wrapper, '显示屋顶')!.trigger('click');
    await buttonByText(wrapper, '干预模式')!.trigger('click');

    expect(wrapper.emitted('togglePlay')).toHaveLength(1);
    expect(wrapper.emitted('speed')?.[0]).toEqual([2]);
    expect(wrapper.emitted('reset')).toHaveLength(1);
    expect(wrapper.emitted('toggleView')).toHaveLength(1);
    expect(wrapper.emitted('toggleIntervention')).toHaveLength(1);
  });

  it('紧急停机时给出明确提示', () => {
    const wrapper = mount(TopBar, { props: { ...baseTopBar, emergencyStop: true } });
    expect(wrapper.get('[role="status"]').text()).toContain('紧急停机');
  });
});

describe('设备列表', () => {
  const items = [
    {
      id: 'SORTER_1' as DeviceId,
      name: '光选机 #1',
      abbr: 'NIR-1',
      group: 'plastic' as const,
      process: '近红外识别 + 气吹分选（PET）',
      status: 'RUNNING' as const,
      statusLabel: '运行中',
    },
    {
      id: 'ROBOT_ARM' as DeviceId,
      name: '机械臂分选流水线',
      abbr: 'ROB',
      group: 'textile' as const,
      process: '视觉定位 + 机械臂抓取',
      status: 'IDLE' as const,
      statusLabel: '待机',
    },
  ];

  it('按产线分组，并按关键字过滤', () => {
    const wrapper = mount(DeviceList, { props: { items, query: '', selected: null } });
    const headings = wrapper.findAll('h3').map((node) => node.text());
    expect(headings).toContain(GROUP_LABEL.plastic);
    expect(headings).toContain(GROUP_LABEL.textile);
  });

  it('搜索无结果时给出空状态', () => {
    const wrapper = mount(DeviceList, { props: { items: [], query: '不存在', selected: null } });
    expect(wrapper.text()).toContain('没有匹配的设备。');
  });

  it('点击列表项选中设备，再点一次取消选中', async () => {
    const wrapper = mount(DeviceList, { props: { items, query: '', selected: null } });
    await buttonByText(wrapper, '光选机 #1')!.trigger('click');
    expect(wrapper.emitted('select')?.[0]).toEqual(['SORTER_1']);

    const selectedWrapper = mount(DeviceList, { props: { items, query: '', selected: 'SORTER_1' } });
    await buttonByText(selectedWrapper, '光选机 #1')!.trigger('click');
    expect(selectedWrapper.emitted('select')?.[0]).toEqual([null]);
  });

  it('搜索框把输入交回上层', async () => {
    const wrapper = mount(DeviceList, { props: { items, query: '', selected: null } });
    const input = wrapper.get('input[type="search"]');
    await input.setValue('机械臂');
    expect(wrapper.emitted('query')?.at(-1)).toEqual(['机械臂']);
  });
});

describe('设备详情与干预分层', () => {
  const report = describeDevice(state, 'SORTER_1', settings);
  const baseProps = {
    report,
    settings,
    anomalies: state.anomalies,
    commands: [],
  };

  it('默认只读：未开启干预模式时控制项不可操作', () => {
    const wrapper = mount(EquipmentPanel, { props: { ...baseProps, interventionMode: false } });
    expect(wrapper.text()).toContain('需开启干预模式');
    const fieldset = wrapper.get('fieldset.controls');
    expect(fieldset.attributes('disabled')).toBeDefined();
    expect(wrapper.findAll('input[type="range"]').length).toBeGreaterThan(0);
  });

  it('开启干预模式后可以改参数，并把命令交回上层', async () => {
    const wrapper = mount(EquipmentPanel, { props: { ...baseProps, interventionMode: true } });
    expect(wrapper.get('fieldset.controls').attributes('disabled')).toBeUndefined();
    const slider = wrapper.get('input[type="range"]');
    await slider.setValue('0.8');
    expect(wrapper.emitted('control')?.[0]).toEqual(['sorter1Threshold', 'SORTER_1', 0.8]);
  });

  it('异常演示开关可切换并回传', async () => {
    const wrapper = mount(EquipmentPanel, { props: { ...baseProps, interventionMode: false } });
    const checkbox = wrapper.findAll('input[type="checkbox"]')[0];
    await checkbox.setValue(true);
    expect(wrapper.emitted('toggleAnomaly')?.[0]).toEqual(['missort', true]);
  });

  it('没有选中设备时给出引导文案，且有干预记录时能清除', async () => {
    const wrapper = mount(EquipmentPanel, {
      props: {
        ...baseProps,
        report: null,
        interventionMode: true,
        commands: [{ at: 12, device: 'CONVEYOR' as const, key: 'beltSpeed', value: 1.4 }],
      },
    });
    expect(wrapper.text()).toContain('点击一台设备');
    await buttonByText(wrapper, '清除全部干预')!.trigger('click');
    expect(wrapper.emitted('clearInterventions')).toHaveLength(1);
  });
});

describe('生产看板', () => {
  it('展示分品类进出存与料仓水位，点击料仓可跳到对应设备', async () => {
    const wrapper = mount(Dashboard, { props: { cycle: 0, metrics, state } });
    const table = wrapper.get('table');
    expect(table.text()).toContain('PET');
    expect(table.text()).toContain('杂项');
    await buttonByText(wrapper, 'PET')!.trigger('click');
    expect(wrapper.emitted('select')?.[0]).toEqual(['SILO_PET']);
  });

  it('没有任何搬运任务时给出空状态', () => {
    const quiet = { ...state, jobs: [], bales: [] };
    const wrapper = mount(Dashboard, { props: { cycle: 0, metrics: computeMetrics(quiet, 0), state: quiet } });
    expect(wrapper.text()).toContain('当前没有进行中的搬运任务。');
  });

  it('设备状态读数在任何时刻都能计算', () => {
    const later = stateAtStep(3000, []);
    expect(deviceStatus(later, 'ROBOT_ARM')).toBeTruthy();
  });
});

describe('时间轴', () => {
  it('拖动进度条把目标时刻交回上层', async () => {
    const wrapper = mount(Timeline, {
      props: { duration: SHIFT.DURATION, eventLog: ['0012.0s 测试事件'], playing: true, timeInShift: 12 },
    });
    const slider = wrapper.get('input[type="range"]');
    await slider.setValue('88');
    expect(wrapper.emitted('scrub')?.[0]).toEqual([88]);
  });

  it('事件流显示最近发生在前面', () => {
    const wrapper = mount(Timeline, {
      props: {
        duration: SHIFT.DURATION,
        eventLog: ['0004.5s 卸货', '0015.0s 投料', '0022.5s 第二包'],
        playing: false,
        timeInShift: 30,
      },
    });
    const items = wrapper.findAll('.event-feed li').map((item) => item.text());
    expect(items[0]).toContain('第二包');
    expect(wrapper.text()).toContain('已暂停');
  });

  it('里程碑可以直接跳到该时刻', async () => {
    const wrapper = mount(Timeline, {
      props: { duration: SHIFT.DURATION, eventLog: [], playing: true, timeInShift: 0 },
    });
    const milestone = TIMELINE_MILESTONES.find((item) => item.label === '首件打包');
    expect(milestone).toBeDefined();
    await buttonByText(wrapper, '首件打包')!.trigger('click');
    expect(wrapper.emitted('scrub')?.[0]).toEqual([milestone?.at]);
  });

  // 浏览器视觉验收发现 15/20/24 s 三个里程碑的标签会叠成一团（1440 px 下仅相距 24–31 px 而标签宽 62 px），
  // 现在改为按导轨实测宽度贪心错行；这条测试把「同排标签不压字」锁住，并覆盖窄屏与宽屏两端。
  it('里程碑标签在任何导轨宽度下都不会互相压字', () => {
    for (const trackWidth of [325, 563, 687, 774]) {
      const spans = layoutMilestoneLabels(TIMELINE_MILESTONES, SHIFT.DURATION, trackWidth);
      expect(spans).toHaveLength(TIMELINE_MILESTONES.length);
      const rows = new Map<number, { label: string; left: number; right: number }[]>();
      TIMELINE_MILESTONES.forEach((milestone, index) => {
        const placed = rows.get(spans[index].row) ?? [];
        placed.push({ label: milestone.label, left: spans[index].left, right: spans[index].right });
        rows.set(spans[index].row, placed);
      });
      for (const placed of rows.values()) {
        placed.sort((a, b) => a.left - b.left);
        for (let i = 1; i < placed.length; i += 1) {
          expect(
            placed[i].left,
            `${placed[i - 1].label} 与 ${placed[i].label} 在 ${trackWidth} px 导轨上压字`,
          ).toBeGreaterThanOrEqual(placed[i - 1].right);
        }
      }
      // 15 / 20 / 24 s 三个里程碑必须被拆到不同行，否则单行必然叠字。
      const crowded = TIMELINE_MILESTONES.map((milestone, index) => ({ at: milestone.at, row: spans[index].row })).filter(
        (item) => item.at >= 15 && item.at <= 24,
      );
      expect(new Set(crowded.map((item) => item.row)).size, `${trackWidth} px`).toBe(crowded.length);
    }
  });
});

void vi;
