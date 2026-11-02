import { describe, expect, it } from 'vitest';
import type { SimState, UnitStage } from '../src/types';
import { SHIFT } from '../src/simulation/data';
import { STEPS_PER_SHIFT, Simulation } from '../src/simulation';
import { TIMELINE_MILESTONES } from '../src/ui/timelineLayout';

/** First shift time at which a condition holds, walking the clock exactly as the app does. */
function firstAt(condition: (state: SimState) => boolean): number {
  const simulation = new Simulation();
  for (let index = 0; index < STEPS_PER_SHIFT - 1; index += 1) {
    simulation.advanceBy(SHIFT.STEP);
    if (condition(simulation.current)) return simulation.timeInShift;
  }
  return Number.POSITIVE_INFINITY;
}

const stageAnywhere = (stages: UnitStage[]) => (state: SimState) =>
  state.units.some((unit) => stages.includes(unit.stage));

describe('时间轴里程碑与实际仿真相符', () => {
  it('每个里程碑都落在班次内且单调递增', () => {
    expect(TIMELINE_MILESTONES.length).toBeGreaterThan(4);
    let previous = -1;
    for (const milestone of TIMELINE_MILESTONES) {
      expect(milestone.at, milestone.label).toBeGreaterThanOrEqual(0);
      expect(milestone.at, milestone.label).toBeLessThanOrEqual(SHIFT.DURATION);
      expect(milestone.at, milestone.label).toBeGreaterThan(previous);
      previous = milestone.at;
    }
  });

  it('工艺里程碑与默认参数下的真实时刻一致（±2 秒）', () => {
    const measured: Record<string, number> = {
      塑料来料上线: firstAt(stageAnywhere(['INCLINE'])),
      首次光选分选: firstAt(stageAnywhere(['SORTER_1', 'PASS_1', 'SORTER_2', 'PASS_2', 'LANE_PET', 'LANE_HDPE'])),
      纺织来料上线: firstAt(stageAnywhere(['SPREADER'])),
      首件打包: firstAt((state) => state.bales.length > 0),
      首件成品装车: firstAt((state) => state.bales.some((bale) => bale.status === 'LOADED')),
    };
    for (const [label, actual] of Object.entries(measured)) {
      const milestone = TIMELINE_MILESTONES.find((item) => item.label === label);
      expect(milestone, label).toBeDefined();
      expect(Math.abs((milestone as { at: number }).at - actual), `${label} 标注 ${milestone?.at}s，实际 ${actual.toFixed(1)}s`)
        .toBeLessThanOrEqual(2);
    }
  });

  it('物流里程碑与门岗时刻表一致', () => {
    const marks = Object.fromEntries(TIMELINE_MILESTONES.map((item) => [item.label, item.at]));
    expect(marks['进货车辆入场']).toBe(SHIFT.TRUCK_A.arriveFrom);
    expect(marks['转运车离场']).toBe(SHIFT.TRUCK_B.leaveFrom);
    expect(marks['出货过磅']).toBe(SHIFT.TRUCK_C.leaveFrom);
  });
});
