import { afterEach, describe, expect, it, vi } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';

// 实际场景需要 WebGL 与 GLB 资产，jsdom 提供不了；这里测的是面板与联动。
vi.mock('../src/actual/ActualScene.vue', () => ({
  default: {
    name: 'ActualScene',
    props: ['simulation', 'selected', 'xray', 'paths', 'shell', 'view'],
    template: '<div class="actual-scene-stub">实际 CAD 场景</div>',
  },
}));

import ActualApp from '../src/actual/ActualApp.vue';

let wrapper: VueWrapper | null = null;

afterEach(() => {
  wrapper?.unmount();
  wrapper = null;
});

const findAll = (selector: string) => Array.from(document.querySelectorAll(selector)) as HTMLElement[];
const byText = (selector: string, text: string) =>
  findAll(selector).find((node) => (node.textContent ?? '').trim().includes(text)) ?? null;

async function mountApp() {
  wrapper = mount(ActualApp, { attachTo: document.body });
  await flushPromises();
  const pause = findAll('button').find((node) => node.getAttribute('aria-label') === '暂停');
  expect(pause).toBeTruthy();
  await click(pause);
  return wrapper;
}

async function click(node: HTMLElement | null | undefined) {
  expect(node).toBeTruthy();
  node!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await flushPromises();
}

async function setValue(node: HTMLInputElement | HTMLSelectElement | null, value: string, eventName = 'change') {
  expect(node).toBeTruthy();
  node!.value = value;
  node!.dispatchEvent(new Event(eventName, { bubbles: true }));
  await flushPromises();
}

describe('独立实际产线入口', () => {
  it('选择确认设备、停用、恢复、聚焦与时间轴相互联动', async () => {
    await mountApp();
    await setValue(document.querySelector('#actual-device'), 'E11');
    expect(byText('h2', 'E11')).toBeTruthy();
    expect(byText('h2', '螺旋上料机')).toBeTruthy();
    const focus = findAll('button').find((node) => (node.textContent ?? '').trim() === '聚焦设备');
    expect(focus?.getAttribute('aria-pressed')).toBe('true');

    const power = Array.from(document.querySelectorAll('label.power-switch input'))[0] as HTMLInputElement;
    power.checked = false;
    power.dispatchEvent(new Event('change', { bubbles: true }));
    await flushPromises();
    expect(document.body.textContent).toContain('已停用');

    await setValue(document.querySelector('#actual-time') as HTMLInputElement, '100', 'input');
    expect(document.querySelector('[data-testid="received-count"]')?.textContent).not.toBe('0批');
    expect(document.querySelector('[data-testid="baled-count"]')?.textContent).toBe('0批 / 0 包');

    await click(findAll('button').find((node) => node.getAttribute('aria-label') === '重置实际产线') ?? null);
    const powerAfter = Array.from(document.querySelectorAll('label.power-switch input'))[0] as HTMLInputElement;
    expect(powerAfter.checked).toBe(true);
    expect(document.querySelector('[data-testid="received-count"]')?.textContent).toBe('0批');
  });

  it('3A 与杂色 PET 显示正确，时间轴保留终点库存，原演示有独立链接', async () => {
    await mountApp();
    const link = document.querySelector('a[href="./index.html"]');
    expect(link?.textContent).toContain('原演示');

    await setValue(document.querySelector('#actual-device'), 'E05');
    expect(byText('h2', 'E05')).toBeTruthy();
    expect(byText('h2', '杂色 PET')).toBeTruthy();

    await setValue(document.querySelector('#actual-time') as HTMLInputElement, '360', 'input');
    expect(findAll('button').some((node) => node.getAttribute('aria-label') === '重播')).toBe(true);
    const received = Number((document.querySelector('[data-testid="received-count"]')?.textContent ?? '').replace('批', ''));
    expect(received).toBeGreaterThan(0);
    expect(byText('span', '在制物料')).toBeTruthy();
  });
});
