import { inject, provide, type InjectionKey } from 'vue';
import type { Simulation } from './index';

/**
 * 演示时钟刻意放在 Vue 响应式之外：三维场景在自己的动画帧里直接读它，
 * 面板只按低频 tick 更新。这样拖动 130 s 的班次不会每帧触发一次组件重渲染。
 *
 * 在 React 版本里这是 context；Vue 版用 provide/inject。
 */
const SIMULATION_KEY: InjectionKey<Simulation> = Symbol('simulation');

export function provideSimulation(simulation: Simulation): void {
  provide(SIMULATION_KEY, simulation);
}

export function useSimulation(): Simulation {
  const simulation = inject(SIMULATION_KEY, null);
  if (!simulation) throw new Error('Simulation 未提供：请在根组件调用 provideSimulation()');
  return simulation;
}

/**
 * 面板低频刷新用的 tick。
 *
 * 仿真状态是可变对象（`Simulation.current` 原地更新），所以要靠一个自增计数
 * 让 Vue 知道「该重新读了」。React 版用的是 `useState` + `refresh()`，
 * 这里给出一对 Vue 原语：`useUiTick()` 读计数，`bumpUiTick()` 推进一步。
 */
const UI_TICK_KEY: InjectionKey<() => void> = Symbol('uiTick');

export function provideUiTick(bump: () => void): void {
  provide(UI_TICK_KEY, bump);
}

export function useUiTick(): () => void {
  const bump = inject(UI_TICK_KEY, null);
  if (!bump) throw new Error('UiTick 未提供：请在根组件调用 provideUiTick()');
  return bump;
}
