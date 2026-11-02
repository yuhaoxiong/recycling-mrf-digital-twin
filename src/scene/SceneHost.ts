import {
  ACESFilmicToneMapping,
  Color,
  FogExp2,
  Group,
  HemisphereLight,
  AmbientLight,
  DirectionalLight,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SRGBColorSpace,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PMREMGenerator } from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import type { CameraMode, DeviceId } from '../types';
import { PLANT } from '../spatial/layout';
import { PALETTE } from './palette';
import { DEVICE_ANCHORS, FOCUS_OFFSET } from './anchors';
import { projectToViewport, type ProjectedPoint } from './projection';
import { pickDevice, toNdc } from './picking';

export const OVERVIEW_POSITION = { x: 37, y: 32, z: 43 };
/** 全厂取景的视点（厂房中心略向南偏，园区前场也算画面的一部分）。 */
export const OVERVIEW_TARGET: [number, number, number] = [0, 0.4, -3.2];
const OVERVIEW_VECTOR = new Vector3(OVERVIEW_POSITION.x, OVERVIEW_POSITION.y, OVERVIEW_POSITION.z);

/** 场景里可点选的设备：把网格上溯到最近的标记，见 `picking.ts`。 */
const CLICK_TOLERANCE = 4;

export interface SceneCallbacks {
  onSelect: (id: DeviceId | null) => void;
  /** 渲染器初始化成功 / 图形上下文丢失或恢复。 */
  onContextChange?: (lost: boolean) => void;
  onError?: (error: unknown) => void;
}

export interface FrameContext {
  delta: number;
  elapsed: number;
}


type FrameHook = (context: FrameContext) => void;

/**
 * 命令式三维渲染宿主 —— 替代 R3F 的 `<Canvas>`。
 *
 * 职责与 React 版一致：
 * - 建渲染器/相机/场景/雾/光照/程序化 IBL，处理尺寸自适应与 DPR；
 * - 用 OrbitControls 提供「自由视角」，并根据相机模式（俯瞰/跟随）平滑机位；
 * - 每帧回调（原 `useFrame`）按注册顺序执行，场景层只在这里读仿真并改姿态；
 * - 指针拾取：点设备选中，点空白取消选中。
 *
 * 与 fiber 的区别在于生命周期完全由这个类负责：`mount()` 一次建好整棵树，
 * `dispose()` 一次性释放；Vue 组件只需要绑定容器元素与几个响应式开关。
 */
export class SceneHost {
  readonly scene = new Scene();
  readonly camera: PerspectiveCamera;
  readonly renderer: WebGLRenderer;
  readonly controls: OrbitControls;
  /** 所有设备外壳挂在它下面，便于统一遍历。 */
  readonly root = new Group();

  private readonly container: HTMLElement;
  private readonly callbacks: SceneCallbacks;
  private readonly hooks: FrameHook[] = [];
  private readonly raycaster = new Raycaster();
  private readonly clock = { last: 0, elapsed: 0 };
  private frameHandle = 0;
  private disposed = false;
  private resizeObserver: ResizeObserver | null = null;

  private cameraMode: CameraMode = 'free';
  private focusTarget: [number, number, number] = OVERVIEW_TARGET;
  private reducedMotion = false;
  private lastKey = '';
  private modeElapsed = 0;
  private appliedFit = 1;
  private prevMode: CameraMode = 'free';
  private readonly desired = new Vector3();

  constructor(container: HTMLElement, callbacks: SceneCallbacks) {
    this.container = container;
    this.callbacks = callbacks;

    this.renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(1.75, window.devicePixelRatio || 1));
    this.renderer.outputColorSpace = SRGBColorSpace;
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.addEventListener('webglcontextlost', this.onContextLost);
    this.renderer.domElement.addEventListener('webglcontextrestored', this.onContextRestored);
    container.appendChild(this.renderer.domElement);

    this.camera = new PerspectiveCamera(38, 1, 0.5, 300);
    this.camera.position.set(OVERVIEW_POSITION.x, OVERVIEW_POSITION.y, OVERVIEW_POSITION.z);

    this.scene.background = new Color(PALETTE.background);
    this.scene.fog = new FogExp2(PALETTE.fogLight, 0.0034);
    this.scene.add(this.root);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.minDistance = 7;
    this.controls.maxDistance = 80;
    this.controls.maxPolarAngle = Math.PI / 2.2;
    this.controls.target.set(OVERVIEW_TARGET[0], OVERVIEW_TARGET[1], OVERVIEW_TARGET[2]);
    this.controls.addEventListener('change', () => this.renderOnce());

    this.setupLights();
    this.setupEnvironment();

    this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown);
    this.renderer.domElement.addEventListener('click', this.onClick);
    this.renderer.domElement.addEventListener('pointermove', this.onPointerMove);

    this.resize();
    if (typeof ResizeObserver === 'function') {
      this.resizeObserver = new ResizeObserver(() => this.resize());
      this.resizeObserver.observe(container);
    } else {
      window.addEventListener('resize', this.resize);
    }
  }

  /* ---------------- 光照与环境 ---------------- */

  private setupLights(): void {
    // 三点光：暖色主光负责投影与体积，冷色轮廓光把设备从浅色背景里分出来，暖补光填暗部。
    // 补光都刻意压低：只有主光投影，补光一强阴影就会被冲掉。
    const hemisphere = new HemisphereLight(PALETTE.lampCool, PALETTE.plinthSide, 0.24);
    this.scene.add(hemisphere);

    const key = new DirectionalLight('#fff0d6', 3.6);
    key.position.set(26, 34, 20);
    key.castShadow = true;
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.04;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 120;
    key.shadow.camera.left = -30;
    key.shadow.camera.right = 30;
    key.shadow.camera.top = 26;
    key.shadow.camera.bottom = -26;
    this.scene.add(key);

    const rim = new DirectionalLight('#a8dcff', 0.42);
    rim.position.set(-24, 18, -16);
    this.scene.add(rim);

    const fill = new DirectionalLight('#ffd9a8', 0.3);
    fill.position.set(8, 12, -26);
    this.scene.add(fill);

    this.scene.add(new AmbientLight(0xffffff, 0.1));
  }

  /** 程序化 IBL：RoomEnvironment 经 PMREM 预卷积，不需要任何 HDR 文件。 */
  private setupEnvironment(intensity = 0.3): void {
    try {
      const generator = new PMREMGenerator(this.renderer);
      const room = new RoomEnvironment();
      const target = generator.fromScene(room, 0.04);
      this.scene.environment = target.texture;
      this.scene.environmentIntensity = intensity;
      generator.dispose();
      room.dispose?.();
    } catch {
      // 环境贴图只是增强项；生成失败时保持纯灯光渲染，不影响其余画面与交互。
    }
  }

  /* ---------------- 帧循环与钩子 ---------------- */

  /** 注册每帧回调（对应原 `useFrame`），返回注销函数。 */
  addFrameHook(hook: FrameHook): () => void {
    this.hooks.push(hook);
    return () => {
      const index = this.hooks.indexOf(hook);
      if (index >= 0) this.hooks.splice(index, 1);
    };
  }

  start(): void {
    if (this.disposed || this.frameHandle) return;
    this.clock.last = performance.now();
    const loop = (now: number) => {
      if (this.disposed) return;
      this.frameHandle = requestAnimationFrame(loop);
      const delta = Math.min(0.05, (now - this.clock.last) / 1000);
      this.clock.last = now;
      this.clock.elapsed += delta;
      for (const hook of this.hooks) hook({ delta, elapsed: this.clock.elapsed });
      this.updateCamera(delta);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    this.frameHandle = requestAnimationFrame(loop);
  }

  /** 单帧渲染（尺寸变化、相机变化时用，不必等下一帧）。 */
  renderOnce(): void {
    if (this.disposed) return;
    this.renderer.render(this.scene, this.camera);
  }

  /* ---------------- 相机 ---------------- */

  setCameraMode(mode: CameraMode): void {
    this.cameraMode = mode;
  }

  setFocusTarget(target: [number, number, number] | null): void {
    this.focusTarget = target ?? OVERVIEW_TARGET;
  }

  setReducedMotion(reduced: boolean): void {
    this.reducedMotion = reduced;
  }

  get isReducedMotion(): boolean {
    return this.reducedMotion;
  }

  /**
   * 把世界坐标投影成画布内的像素位置，供 HTML 浮层（如选中设备的名称标签）跟随三维物体。
   * 数学部分见 `projection.ts`（纯函数，可直接单测）。
   */
  projectToScreen(position: readonly [number, number, number], distanceFactor = 22): ProjectedPoint {
    const canvas = this.renderer.domElement;
    return projectToViewport(position, this.camera, canvas.clientWidth, canvas.clientHeight, distanceFactor);
  }

  private updateCamera(delta: number): void {
    const { camera, controls } = this;
    const size = this.renderer.getSize(new Vector2());
    // 竖屏（手机）下水平视角只有纵向的一半左右，按原距离取景会把厂房右侧切掉。
    // 这里按宽高比把全局视角整体拉远，横屏（宽高比 ≥ 1）保持原样不受影响。
    const fit = size.x > 0 && size.y > 0 ? Math.min(1.6, Math.max(1, 1 / (size.x / size.y))) : 1;
    if (Math.abs(this.appliedFit - fit) > 0.01) {
      const view = camera.position.clone().sub(controls.target);
      camera.position.copy(controls.target).add(view.setLength(view.length() * (fit / this.appliedFit)));
      this.appliedFit = fit;
    }
    if (this.cameraMode === 'free') {
      // 自由视角的机位与视点完全交给 OrbitControls，这里什么都不改。
      this.prevMode = this.cameraMode;
      return;
    }
    if (this.prevMode !== this.cameraMode) {
      this.prevMode = this.cameraMode;
      this.lastKey = '';
      this.modeElapsed = 0;
    }
    const [tx, ty, tz] = this.focusTarget;
    const key = `${this.cameraMode}:${tx},${ty},${tz}`;
    if (key !== this.lastKey) {
      this.lastKey = key;
      this.modeElapsed = 0;
      this.desired.set(tx, ty, tz);
    }
    this.modeElapsed += delta;
    controls.target.lerp(this.desired, 0.1);
    if (this.cameraMode === 'overview' && this.modeElapsed < 3) {
      // 「俯瞰全厂」要真的把机位拉回去，只改视点会让相机停在上一个设备旁边。
      camera.position.lerp(OVERVIEW_VECTOR, 0.07);
    }
    if (this.cameraMode === 'focus' && this.modeElapsed < 3) {
      // 机位从厂房中心的一侧斜看过去：设备在南半区就从北侧看、在东半区就从西侧看，
      // 否则相机会被推到墙外，正好被檐柱挡在画面中间。
      const signX = this.desired.x > 0 ? -1 : 1;
      const signZ = this.desired.z > 2.5 ? -1 : 1;
      const offset = new Vector3(FOCUS_OFFSET.x * signX, FOCUS_OFFSET.y, FOCUS_OFFSET.z * signZ);
      camera.position.lerp(this.desired.clone().add(offset), 0.07);
    }
  }

  /* ---------------- 拾取 ---------------- */

  /**
   * 按下位置。拖动旋转 / 缩放也会在画布上触发 `click`，
   * 只有「按下与抬起几乎同一点」才算点选，否则转个镜头就误选中设备。
   */
  private pointerDownAt: { x: number; y: number } | null = null;

  private onPointerDown = (event: PointerEvent): void => {
    this.pointerDownAt = { x: event.clientX, y: event.clientY };
  };

  private onClick = (event: MouseEvent): void => {
    const down = this.pointerDownAt;
    this.pointerDownAt = null;
    if (down && Math.hypot(event.clientX - down.x, event.clientY - down.y) > CLICK_TOLERANCE) return;
    // 点到空白处取消选中，与 React 版的 onBackground 行为一致。
    this.callbacks.onSelect(this.pick(event));
  };

  private onPointerMove = (event: PointerEvent): void => {
    this.renderer.domElement.style.cursor = this.pick(event) ? 'pointer' : '';
  };

  private pick(event: MouseEvent): DeviceId | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    return pickDevice(this.root, this.camera, toNdc(event.clientX, event.clientY, rect), this.raycaster);
  }

  /* ---------------- 尺寸与生命周期 ---------------- */

  private resize = (): void => {
    if (this.disposed) return;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    this.renderOnce();
  };

  private onContextLost = (event: Event): void => {
    event.preventDefault();
    this.callbacks.onContextChange?.(true);
  };

  private onContextRestored = (): void => {
    this.callbacks.onContextChange?.(false);
  };

  /** 供场景层查询：喷气特效所在的设备位置（与 React 版一致）。 */
  static airPuffPositions(): { device: 'SORTER_1' | 'SORTER_2'; position: [number, number, number] }[] {
    return [
      { device: 'SORTER_1', position: [PLANT.sorter1.x, 2.5, PLANT.sorter1.z] },
      { device: 'SORTER_2', position: [PLANT.sorter2.x, 2.4, PLANT.sorter2.z] },
    ];
  }

  /** 选中设备的相机锚点（列表与场景联动的唯一来源）。 */
  static anchorFor(id: DeviceId): [number, number, number] {
    return DEVICE_ANCHORS[id] ?? OVERVIEW_TARGET;
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    if (this.frameHandle) cancelAnimationFrame(this.frameHandle);
    this.frameHandle = 0;
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
    window.removeEventListener('resize', this.resize);
    this.renderer.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.renderer.domElement.removeEventListener('click', this.onClick);
    this.renderer.domElement.removeEventListener('pointermove', this.onPointerMove);
    this.renderer.domElement.removeEventListener('webglcontextlost', this.onContextLost);
    this.renderer.domElement.removeEventListener('webglcontextrestored', this.onContextRestored);
    this.controls.dispose();
    this.scene.traverse((node) => {
      const candidate = node as { geometry?: { dispose(): void }; material?: { dispose(): void } | { dispose(): void }[] };
      candidate.geometry?.dispose();
      const material = candidate.material;
      if (Array.isArray(material)) material.forEach((entry) => entry.dispose());
      else material?.dispose();
    });
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode === this.container) this.container.removeChild(this.renderer.domElement);
  }
}
