# Vue 3 重构说明（refactor 分支）

本文件记录 2026-10 这次重构的**取舍、迁移映射与验证结论**，便于后续维护者判断「为什么这么写」。

## 1. 目标与范围

| 项 | 决策 |
| --- | --- |
| 基点 | 从 `main`（当时最新 `f68d1a1`）拉出 `refactor` 分支 |
| 框架 | Vue 3.5 Composition API + `<script setup>` + TypeScript |
| 三维层 | 原生 Three.js 命令式封装（不用 TresJS，也不保留 R3F） |
| 覆盖范围 | **两个入口全部迁移**：原演示 `index.html` 与实际产线 `actual.html` |
| React 去留 | 最终**不保留** React 依赖；`package.json` 里已无 react / react-dom / @react-three/* / lucide-react |
| 仿真核心 | `src/simulation/` 与 `src/spatial/` **原样保留**（纯 TS、零框架依赖），因此全部不变量测试继续有效 |

## 2. 依赖对比

| | 重构前（React） | 重构后（Vue） |
| --- | --- | --- |
| 运行时依赖 | react、react-dom、three、@react-three/fiber、@react-three/drei、@react-three/postprocessing、lucide-react | **vue、three** |
| 间接依赖（打包闭包） | 68 个 | 显著减少（drei/postprocessing 的生态尾巴全部移除） |
| 组件测试库 | @testing-library/react + jsdom | **@vue/test-utils + jsdom** |
| 类型检查 | `tsc -b` | **`vue-tsc -b`**（需要识别 `.vue` 单文件组件） |
| 构建插件 | @vitejs/plugin-react | **@vitejs/plugin-vue** |

**产物体积**（原演示）：`1310.9 kB`（gzip 379.5 kB）→ `699.96 kB`（gzip **195.73 kB**），约减半。

## 3. 关键迁移映射

### 3.1 状态与上下文

| React | Vue |
| --- | --- |
| `createContext` / `useContext(SimulationContext)` | `provide()` / `inject()`（`simulation/context.ts`） |
| `useState` + `refresh()` 计数驱动重渲染 | `ref` 计数器 + `watchEffect` 式 `computed`（`void uiTick.value` 建立依赖） |
| `useRef(new Simulation())` 持有可变实例 | `shallowRef(new Simulation())`——**必须 shallow**，否则仿真内部高频写会穿过 Proxy |
| `useCallback` | 普通函数（`<script setup>` 内无需 memo） |
| `useEffect` + 清理函数 | `onMounted` / `onBeforeUnmount` / `watch` |

### 3.2 三维层

| R3F / drei | 本项目实现 |
| --- | --- |
| `<Canvas>` | `scene/SceneHost.ts`：渲染器、相机、`OrbitControls`、DPR、上下文丢失处理 |
| `<color attach="background">`、`<fogExp2>` | 构造器里直接设置 `scene.background` / `scene.fog` |
| `<directionalLight castShadow>` 等 | `SceneHost.setupLights()` |
| `RoomEnvironment` + PMREM（`Environment.tsx`） | `SceneHost.setupEnvironment()`，同样用 three 自带 `RoomEnvironment`，无 HDR 文件 |
| `useFrame(cb)` | `SceneHost.addFrameHook(cb)`，由单一 rAF 循环按注册顺序调用 |
| `useThree()` | 句柄由 `SceneHost` 暴露（`camera` / `renderer` / `scene`） |
| `<mesh><boxGeometry/><meshStandardMaterial/></mesh>` | `mesh(parent, { geometry, material, position })`（`scene/three.ts`） |
| drei `<RoundedBox>` | `scene/roundedBox.ts`：内芯盒 + 8 角球 + 12 棱圆柱，用 `mergeGeometries` 合并 |
| `onClick` / `onPointerOver` | `SceneHost` 统一 Raycaster 拾取，网格上溯到带 `userData.deviceId` 的根节点 |
| `<Html>`（悬浮标签） | Vue 模板里的 HTML overlay + `device-label` 样式 |
| `@react-three/postprocessing`（Bloom/Vignette） | 移除。原效果只用于自发光件的光晕，改用「自发光材质 + ACES 色调映射」表达 |
| `SceneBoundary`（错误边界） | `try/catch` 包裹场景构建，失败时显示降级提示 |
| `state.units.map(...)` 声明式渲染物料 | **按 ID 池化**：每帧遍历仿真数组，缺的建、多余的隐藏（帧循环里零 VDOM 开销） |

### 3.3 组件

`src/ui/*.tsx` → `src/ui/*.vue`，props 用 `defineProps`，回调用 `defineEmits`（`@click` / `@change` 监听）。
纯逻辑常量（`GROUP_LABEL`、里程碑错行算法）抽到同目录 `.ts` 文件，便于测试直接导入且不依赖 SFC 编译。

## 4. 验证结论

| 检查 | 命令 | 结果 |
| --- | --- | --- |
| 类型检查 | `npm run typecheck`（`vue-tsc -b`） | **通过，0 error** |
| 单元/集成测试 | `npm test` | **87 passed / 2 skipped**（跳过项是需要 `dist-actual` 的发布产物检查） |
| 原演示构建 | `npm run build` | 通过，`dist/assets/index-*.js` = 699.96 kB（gzip 195.73 kB） |
| 实际产线构建 | `npm run build:actual` | 通过，`dist-actual/assets/actual-*.js` = 726.55 kB（gzip 200.41 kB） |

**保持不变量的测试全部保留并通过**，包括：

- 物料守恒（收到的每一包要么在厂内、要么已出厂，丢失计数恒为 0）
- 料仓容量有界、仅在阈值或班末清仓触发打包
- PET 必须先于 HDPE 被分出
- 单行主通道互斥、两台叉车永不同位
- 暂停/倍速/重置/拖动/带干预重放结果一致
- 第二个班次与第一个班次逐位一致
- 时间轴里程碑与仿真实测时刻一致（±2 s）
- 里程碑标签在任何导轨宽度下不压字
- 皮带变换与物料位置同源、同刻可见物料互不重叠

## 5. 与原实现的差异（有意为之）

1. **移除 Bloom 与暗角后处理**。理由是原效果依赖 `@react-three/postprocessing` 整条链（会带回 `postprocessing`、`n8ao`、`maath` 及若干 shader 资产）。自发光件仍按原参数发光，只是没有屏幕空间光晕。若后续需要，可直接引入 `three/addons/postprocessing/`（three 自带，不增加依赖）。
2. **`Environment.tsx` / `PostFX.tsx` 不再是独立组件**，职责并入 `SceneHost`：环境贴图与光照属于渲染宿主，而不是场景内容。
3. **测试超时上限上调到 60 s**（`vite.config.ts`）。仿真不变量测试要推演整段班次，单跑约 4–9 s，并行跑两个入口时会超过默认 5 s 阈值——这是计时常量，不是放宽断言。
4. **`vite.config.ts` 显式 `include: ['tests/**/*.test.ts']`**，避免仓库里遗留的旧 `.tsx` 测试被当作待编译入口。

## 6. 遗留事项

- **仓库里仍有旧 React 实现的 `.tsx` 源文件与测试**（`src/**/*.tsx`、`tests/*.tsx`）。本次重构环境不允许删除文件，它们已被同名 `.ts` / `.vue` 取代，且已被 `tsconfig.app.json` 的 `exclude` 与 Vite 的 `include` 排除，**不参与类型检查、构建与测试**。清理命令见下节。
- `package-lock.json` 仍是 React 版本的旧锁文件，本次重建依赖使用 pnpm（生成了 `pnpm-lock.yaml`）。若要回到 npm，需删除旧 `package-lock.json` 后重新 `npm install`。

### 清理遗留文件

```sh
git rm -f src/App.tsx src/main.tsx \
  src/scene/kit.tsx src/scene/Factory.tsx src/scene/Lines.tsx src/scene/Vehicles.tsx \
  src/scene/parts.tsx src/scene/MrfScene.tsx src/scene/Environment.tsx src/scene/PostFX.tsx \
  src/ui/TopBar.tsx src/ui/DeviceList.tsx src/ui/Dashboard.tsx src/ui/EquipmentPanel.tsx src/ui/Timeline.tsx \
  src/actual/ActualApp.tsx src/actual/ActualScene.tsx src/actual/main.tsx \
  tests/app.test.tsx tests/ui.test.tsx tests/actual-app.test.tsx

git rm -f package-lock.json   # 仅在确定改用 pnpm 时执行
```
