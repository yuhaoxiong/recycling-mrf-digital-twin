import { afterEach, describe, expect, it, vi } from 'vitest';
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils';

// 三维层需要 WebGL，jsdom 提供不了；这里测的是面板与整机联动。
vi.mock('../src/ui/MrfScene.vue', () => ({
  default: { name: 'MrfScene', props: ['selected', 'viewMode', 'cameraMode', 'reducedMotion'], template: '<div class="scene-stub" />' },
}));

import App from '../src/App.vue';

let wrapper: VueWrapper | null = null;

afterEach(() => {
  wrapper?.unmount();
  wrapper = null;
});

/** 挂载后用「暂停」冻结时钟，让断言稳定。 */
async function mountApp() {
  wrapper = mount(App, { attachTo: document.body });
  await flushPromises();
  const pause = button('暂停');
  expect(pause).toBeTruthy();
  await click(pause);
  return wrapper;
}

/** 按可视文本找按钮（等价于原 Testing Library 的 getByRole('button', { name })）。 */
function button(name: string, root: ParentNode = document.body): HTMLButtonElement | null {
  const nodes = Array.from(root.querySelectorAll('button'));
  return (nodes.find((node) => (node.textContent ?? '').trim().includes(name)) as HTMLButtonElement) ?? null;
}

function buttons(name: string, root: ParentNode = document.body): HTMLButtonElement[] {
  return Array.from(root.querySelectorAll('button')).filter((node) => (node.textContent ?? '').trim().includes(name)) as HTMLButtonElement[];
}

const panel = () => document.querySelector('[aria-label="设备详情与模拟控制"]') as HTMLElement;
// 设备列表是 <aside>，隐式角色是 complementary，不是 region。
const list = () => document.querySelector('[aria-label="设备与车辆列表"]') as HTMLElement;
const dashboard = () => document.querySelector('[aria-label="生产数据看板"]') as HTMLElement;
const controlFieldset = () => panel().querySelector('fieldset.controls') as HTMLFieldSetElement;

async function click(node: HTMLElement | null) {
  expect(node).toBeTruthy();
  node!.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await flushPromises();
}

/** 触发 input/change 事件并同步 Vue 的响应式更新。 */
async function setValue(node: HTMLInputElement | null, value: string, eventName = 'input') {
  expect(node).toBeTruthy();
  node!.value = value;
  node!.dispatchEvent(new Event(eventName, { bubbles: true }));
  await flushPromises();
}

describe('整机联动', () => {
  it('列表选中设备会驱动详情面板，取消选中后回到引导文案', async () => {
    await mountApp();
    expect(panel().textContent).toContain('从左侧列表或三维场景中点击一台设备');

    await click(button('光选机 #1', list()));
    expect(panel().textContent).toContain('光选机 #1');
    expect(panel().textContent).toContain('编号 NIR-1');
    // 上下游用与列表一致的中文名显示。
    expect(panel().textContent).toContain('爬坡机');
    expect(button('光选机 #1', list())?.getAttribute('aria-pressed')).toBe('true');

    await click(button('光选机 #1', list()));
    expect(panel().textContent).toContain('从左侧列表或三维场景中点击一台设备');
  });

  it('干预模式开关决定控制区是否可编辑，改动会写入干预记录', async () => {
    const app = await mountApp();
    await click(button('光选机 #1', list()));
    expect(controlFieldset().disabled).toBe(true);
    expect(panel().textContent).toContain('尚未干预，演示按默认参数运行。');

    await click(button('干预模式'));
    expect(controlFieldset().disabled).toBe(false);
    await setValue(panel().querySelector('input[type="range"]'), '0.8', 'change');

    expect(panel().textContent).toContain('干预记录（1）');
    expect(panel().textContent).toContain('sorter1Threshold');

    await click(button('清除全部干预', panel()));
    expect(panel().textContent).toContain('尚未干预，演示按默认参数运行。');
    void app;
  });

  it('异常演示开关从面板一路传到顶栏与仿真状态', async () => {
    await mountApp();
    expect(document.body.textContent).not.toContain('紧急停机已启用');
    const checkbox = () =>
      Array.from(panel().querySelectorAll('input[type="checkbox"]')).find((node) =>
        (node.parentElement?.textContent ?? '').includes('紧急停机'),
      ) as HTMLInputElement;

    checkbox().checked = true;
    checkbox().dispatchEvent(new Event('change', { bubbles: true }));
    await flushPromises();
    expect(document.querySelector('[role="status"]')?.textContent).toContain('紧急停机已启用');

    checkbox().checked = false;
    checkbox().dispatchEvent(new Event('change', { bubbles: true }));
    await flushPromises();
    expect(document.body.textContent).not.toContain('紧急停机已启用');
  });

  it('拖动时间轴改变现场时刻，看板与时间轴同步', async () => {
    await mountApp();
    const slider = document.querySelector('.timeline input[type="range"]') as HTMLInputElement;
    await setValue(slider, '80');
    expect(document.querySelector('.top-bar')?.textContent).toContain('80.0s / 130s');
    // 80 s 时全厂在满负荷生产，看板上应当有在厂物料。
    expect(dashboard().textContent).toContain('在厂物料');
  });

  it('空格键播放/暂停，Esc 取消选中', async () => {
    await mountApp();
    // 挂载助手已经点过「暂停」，所以按钮显示「继续」。
    expect(button('继续')).toBeTruthy();
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', bubbles: true }));
    await flushPromises();
    expect(button('暂停')).toBeTruthy();
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space', bubbles: true }));
    await flushPromises();
    expect(button('继续')).toBeTruthy();

    await click(button('机械臂分选流水线', list()));
    expect(panel().textContent).toContain('机械臂分选流水线');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await flushPromises();
    expect(panel().textContent).toContain('从左侧列表或三维场景中点击一台设备');
  });

  it('看板上的料仓水位可以跳到对应设备', async () => {
    await mountApp();
    await click(button('HDPE', dashboard()));
    expect(panel().textContent).toContain('HDPE 料仓');
  });

  it('设备列表带搜索框，过滤结果与面板互不影响', async () => {
    await mountApp();
    const search = list().querySelector('input[type="search"]') as HTMLInputElement;
    await setValue(search, '打包');
    expect(button('压缩打包机', list())).toBeTruthy();
    expect(buttons('光选机 #1', list())).toHaveLength(0);
  });
});
