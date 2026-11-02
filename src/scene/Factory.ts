import { BoxGeometry, DoubleSide, MeshStandardMaterial, PointLight, type Object3D } from 'three';
import { AISLE, DOCKS, FACTORY, PLANT } from '../spatial/layout';
import { bar, boltRow, louver, rail, rod, slab, truss, type Vec3 } from './kit';
import { group, mesh, plane, standard } from './three';
import { glow } from './materials';
import { PALETTE } from './palette';
import { concreteFloor, corrugatedPanel, epoxyFloor, textDecal } from './textures';

/** 透视模式下要显示的悬浮 HTML 标签（由界面层绘制）。 */
export interface FloatingLabel {
  position: Vec3;
  text: string;
  distanceFactor: number;
  className: string;
}

export interface FactoryHandle {
  /** 屋顶与墙面细节分组：透视模式（xray）下整体隐藏。 */
  roofDetails: Object3D;
  /** 四面墙板的材质：透视时淡出，实体时恢复不透明。 */
  wallMaterials: MeshStandardMaterial[];
  /** 只在透视模式下显示的 HTML 标签。 */
  labels: FloatingLabel[];
  setXray(xray: boolean): void;
  dispose(): void;
}

const ZONES: { key: string; x: number; z: number; w: number; d: number; label: string }[] = [
  { key: 'staging', x: PLANT.staging.x, z: PLANT.staging.z, w: PLANT.staging.w, d: PLANT.staging.d, label: '原料缓存区' },
  { key: 'cardboard', x: PLANT.storageCardboard.x, z: PLANT.storageCardboard.z, w: PLANT.storageCardboard.w, d: PLANT.storageCardboard.d, label: '纸板存储区' },
  { key: 'misc', x: PLANT.storageMisc.x, z: PLANT.storageMisc.z, w: PLANT.storageMisc.w, d: PLANT.storageMisc.d, label: '杂项存储区' },
  { key: 'outbound', x: PLANT.outboundStage.x, z: PLANT.outboundStage.z, w: PLANT.outboundStage.w, d: PLANT.outboundStage.d, label: '成品缓存区' },
];

const DOCK_LIST: { key: string; x: number; z: number; label: string }[] = [
  { key: 'in1', x: DOCKS.IN_1.x, z: DOCKS.IN_1.z, label: '进货月台 01' },
  { key: 'in2', x: DOCKS.IN_2.x, z: DOCKS.IN_2.z, label: '进货月台 02' },
  { key: 'out', x: DOCKS.OUT.x, z: DOCKS.OUT.z, label: '出货月台 03' },
];

/**
 * 厂房外壳、地面做法与分区（Vue 命令式版）。
 *
 * 补齐了让画面读起来像实体工厂的部分：沙盘底座、混凝土地坪与环氧通道划线、
 * 分区色块、钢柱、屋面桁架与檩条采光带、三组卷帘门与卸货雨棚、防撞柱、
 * 防护栏杆、月台标识板。
 *
 * React 版把所有条件分支都写在 JSX 里；命令式版只在 `setXray()` 里切换
 * 「屋顶细节分组」的可见性与墙板透明度，首次构建之后模式切换零重建。
 */
export function buildFactory(parent: Object3D): FactoryHandle {
  const width = FACTORY.maxX - FACTORY.minX;
  const depth = FACTORY.maxZ - FACTORY.minZ;
  const centerX = (FACTORY.minX + FACTORY.maxX) / 2;
  const centerZ = (FACTORY.minZ + FACTORY.maxZ) / 2;
  const wallTop = FACTORY.roofY;
  const labels: FloatingLabel[] = [];

  const root = group(parent);

  /* 钢柱：四周等距布置，透视模式下也保留，作为厂房尺度的参照。 */
  const columnStep = 6.5;
  const columnCount = Math.max(2, Math.round(width / columnStep));
  const columns: Vec3[] = [
    ...Array.from({ length: columnCount + 1 }, (_, index): Vec3 => [FACTORY.minX + (width * index) / columnCount, 0, FACTORY.minZ]),
    ...Array.from({ length: columnCount + 1 }, (_, index): Vec3 => [FACTORY.minX + (width * index) / columnCount, 0, FACTORY.maxZ]),
  ];

  /* 墙板竖向肋条：只在长边做，短边靠贴图表现，省下几十个 mesh。 */
  const ribStep = 2.5;
  const ribCount = Math.round(width / ribStep);
  const ribs: Vec3[] = [
    ...Array.from({ length: ribCount + 1 }, (_, index): Vec3 => [FACTORY.minX + (width * index) / ribCount, 0, FACTORY.minZ]),
    ...Array.from({ length: ribCount + 1 }, (_, index): Vec3 => [FACTORY.minX + (width * index) / ribCount, 0, FACTORY.maxZ]),
  ];

  /* 程序化贴图：地面按 4 m 一铺、通道按 1 m、墙板按 16 肋一张，全部运行时画好并缓存。 */
  const floorMap = concreteFloor(Math.round(width / 4), Math.round(depth / 4));
  const aisleMap = epoxyFloor(Math.round(width / 3), 1);
  const apronMap = concreteFloor(Math.round(width / 5), 1);
  const wallLongMap = corrugatedPanel(Math.round(width / 2.6), Math.max(1, Math.round(wallTop / 4)));
  const wallShortMap = corrugatedPanel(Math.round(depth / 2.6), Math.max(1, Math.round(wallTop / 4)));
  const plinthMap = concreteFloor(Math.round((width + 2.4) / 4), Math.round((depth + 2.4) / 4));
  const zoneMap = (label: string) => textDecal(label, { color: '#5d666b', fontScale: 0.5, ratio: Math.max(3, label.length * 0.62) });
  const signMap = textDecal('RELOOP MRF', { color: '#f5c62d', fontScale: 0.62, ratio: 8 });

  /* ---------- 沙盘底座：让整座工厂像放在台面上的模型 ---------- */
  slab(root, [width + 2.4, 0.7, depth + 2.4], {
    radius: 0,
    position: [centerX, -0.55, centerZ],
    color: PALETTE.plinthSide,
    kind: 'concrete',
    map: plinthMap,
    castShadow: false,
  });
  slab(root, [width + 1.4, 0.06, depth + 1.4], { radius: 0.08, position: [centerX, -0.18, centerZ], color: PALETTE.plinthTop, kind: 'concrete', castShadow: false });

  /* ---------- 园区前场：货车停靠、倒车与地磅都在这里，不再挤进厂房 ---------- */
  slab(root, [width + 2.4, 0.62, 19.4], {
    radius: 0,
    position: [centerX, -0.37, FACTORY.minZ - 9.0],
    color: PALETTE.yard,
    kind: 'concrete',
    map: plinthMap,
    castShadow: false,
    receiveShadow: true,
  });
  // 车道中心虚线：进出各一条，接到三个月台
  for (const x of [DOCKS.IN_1.x, DOCKS.IN_2.x, DOCKS.OUT.x]) {
    for (let index = 0; index < 7; index += 1) {
      slab(root, [0.16, 0.02, 1.1], {
        radius: 0,
        position: [x, -0.05, FACTORY.minZ - 1.6 - index * 2.3],
        color: PALETTE.aisleLine,
        kind: 'floorPaint',
        castShadow: false,
      });
    }
  }

  /* ---------- 地坪 ---------- */
  slab(root, [width, 0.24, depth], {
    radius: 0,
    position: [centerX, -0.12, centerZ],
    color: PALETTE.hallFloor,
    kind: 'concrete',
    map: floorMap,
    receiveShadow: true,
    castShadow: false,
  });
  // 主通道：环氧地坪 + 两侧安全黄划线
  slab(root, [width - 0.6, 0.02, AISLE.halfWidth * 2], {
    radius: 0,
    position: [centerX, 0.012, AISLE.z],
    color: PALETTE.aisle,
    kind: 'floorPaint',
    map: aisleMap,
    receiveShadow: true,
    castShadow: false,
  });
  for (const side of [-1, 1]) {
    slab(root, [width - 0.6, 0.012, 0.1], {
      radius: 0,
      position: [centerX, 0.026, AISLE.z + side * (AISLE.halfWidth - 0.07)],
      color: PALETTE.aisleLine,
      kind: 'floorPaint',
      receiveShadow: true,
      castShadow: false,
    });
  }
  // 装卸货地坪：深一号的混凝土 + 门口斑马线
  slab(root, [width - 1.2, 0.02, 3.4], {
    radius: 0,
    position: [centerX, 0.011, FACTORY.minZ + 1.7],
    color: PALETTE.apron,
    kind: 'concrete',
    map: apronMap,
    receiveShadow: true,
    castShadow: false,
  });
  for (const dock of DOCK_LIST) {
    for (let index = 0; index < 5; index += 1) {
      slab(root, [0.42, 0.012, 1.5], {
        radius: 0,
        position: [dock.x - 1.2 + index * 0.62, 0.028, FACTORY.minZ + 1.5],
        rotation: [0, 0.42, 0],
        color: PALETTE.stripeWhite,
        kind: 'floorPaint',
        receiveShadow: true,
        castShadow: false,
      });
    }
  }

  /* ---------- 功能分区色块 ---------- */
  for (const zone of ZONES) {
    const zoneNode = group(root, [zone.x, 0, zone.z]);
    slab(zoneNode, [zone.w, 0.016, zone.d], {
      radius: 0,
      position: [0, 0.014, 0],
      color: PALETTE.zonePlate,
      kind: 'concrete',
      receiveShadow: true,
      castShadow: false,
    });
    const edges: { size: Vec3; pos: Vec3 }[] = [
      { size: [zone.w, 0.01, 0.07], pos: [0, 0.026, zone.d / 2 - 0.035] },
      { size: [zone.w, 0.01, 0.07], pos: [0, 0.026, -zone.d / 2 + 0.035] },
      { size: [0.07, 0.01, zone.d], pos: [zone.w / 2 - 0.035, 0.026, 0] },
      { size: [0.07, 0.01, zone.d], pos: [-zone.w / 2 + 0.035, 0.026, 0] },
    ];
    for (const edge of edges) {
      slab(zoneNode, edge.size, {
        radius: 0,
        position: edge.pos,
        color: PALETTE.aisleLine,
        kind: 'floorPaint',
        receiveShadow: true,
        castShadow: false,
      });
    }
    // 地面分区名：像真实车间一样刷在地上
    const zoneTexture = zoneMap(zone.label);
    mesh(zoneNode, {
      geometry: plane(zone.w * 0.62, zone.w * 0.19),
      material: standard({
        ...(zoneTexture ? { map: zoneTexture } : {}),
        transparent: true,
        opacity: 0.72,
        roughness: 0.9,
        depthWrite: false,
      }),
      position: [0, 0.024, -zone.d / 2 + 0.75],
      rotation: [-Math.PI / 2, 0, 0],
      receiveShadow: false,
      castShadow: false,
    });
    // 悬浮分区名只在透视模式下显示，否则实体屋顶会让它们浮在屋面上。
    labels.push({
      position: [zone.x, 0.24, zone.z + zone.d / 2 - 0.2],
      text: zone.label,
      distanceFactor: 22,
      className: 'zone-label',
    });
  }

  /* ---------- 钢柱 ---------- */
  for (const position of columns) {
    const column = group(root, [position[0], 0, position[2]]);
    rod(column, 0.16, wallTop, { position: [0, wallTop / 2, 0], color: PALETTE.column, kind: 'steelPainted' });
    slab(column, [0.5, 0.16, 0.5], { radius: 0.03, position: [0, 0.08, 0], color: PALETTE.steelDark, kind: 'steelPainted' });
    slab(column, [0.44, 0.22, 0.44], {
      radius: 0.03,
      position: [0, wallTop - 0.5, 0],
      color: PALETTE.steelDark,
      kind: 'steelPainted',
      castShadow: false,
    });
    boltRow(column, { count: 4, spacing: 0.16, position: [0, wallTop - 0.3, 0.23], radius: 0.028 });
  }

  /* ---------- 墙板（透视模式下淡出） ---------- */
  const wallMaterials: MeshStandardMaterial[] = [];
  const addWall = (size: Vec3, position: Vec3, color: string, map: ReturnType<typeof corrugatedPanel>) => {
    const material = new MeshStandardMaterial({
      color,
      roughness: 0.5,
      metalness: 0.2,
      envMapIntensity: 0.9,
      transparent: true,
      opacity: 0.96,
      side: DoubleSide,
      // 贴图在无 2D 上下文时（jsdom）会返回 null；这里只在真的有贴图时才带上 map，
      // 避免向 three 传 `map: undefined`（会在控制台刷出 Material 参数告警）。
      ...(map ? { map } : {}),
    });
    mesh(root, { geometry: new BoxGeometry(size[0], size[1], size[2]), material, position });
    wallMaterials.push(material);
  };
  addWall([width, wallTop, 0.24], [centerX, wallTop / 2, FACTORY.minZ], PALETTE.wallPanel, wallLongMap);
  addWall([width, wallTop, 0.24], [centerX, wallTop / 2, FACTORY.maxZ], PALETTE.wallPanel, wallLongMap);
  addWall([0.24, wallTop, depth], [FACTORY.minX, wallTop / 2, centerZ], PALETTE.wallPanelDark, wallShortMap);
  addWall([0.24, wallTop, depth], [FACTORY.maxX, wallTop / 2, centerZ], PALETTE.wallPanelDark, wallShortMap);

  /* ---------- 屋顶细节：只在屋顶实体（enclosed）时出现 ---------- */
  const roofDetails = group(root);
  for (const ratio of [0.34, 0.62, 0.86]) {
    slab(roofDetails, [width, 0.07, 0.3], {
      radius: 0,
      position: [centerX, wallTop * ratio, FACTORY.minZ],
      color: PALETTE.wallPanelDark,
      kind: 'steelPainted',
      castShadow: false,
    });
    slab(roofDetails, [width, 0.07, 0.3], {
      radius: 0,
      position: [centerX, wallTop * ratio, FACTORY.maxZ],
      color: PALETTE.wallPanelDark,
      kind: 'steelPainted',
      castShadow: false,
    });
  }
  for (const position of ribs) {
    rod(roofDetails, 0.045, wallTop, {
      position: [position[0], wallTop / 2, position[2] + (position[2] < 0 ? 0.14 : -0.14)],
      color: PALETTE.wallRib,
      kind: 'steelPainted',
      castShadow: false,
    });
  }
  for (let index = 0; index < 5; index += 1) {
    const trussNode = group(roofDetails, [centerX, FACTORY.roofY - 0.98, FACTORY.minZ + (depth * (index + 0.5)) / 5]);
    truss(trussNode, { span: width, height: 0.9, bays: 6, thickness: 0.09, color: PALETTE.structure });
  }
  for (let index = 0; index < 6; index += 1) {
    const x = FACTORY.minX + (width * index) / 5;
    bar(roofDetails, [x, FACTORY.roofY - 0.05, FACTORY.minZ], [x, FACTORY.roofY - 0.05, FACTORY.maxZ], {
      thickness: 0.1,
      color: PALETTE.structure,
      castShadow: false,
    });
  }
  // 两道采光带
  for (const side of [-1, 1]) {
    slab(roofDetails, [4.2, 0.06, depth - 1.2], {
      radius: 0.02,
      position: [centerX + side * 8, FACTORY.roofY + 0.03, centerZ],
      color: PALETTE.roofLight,
      kind: 'plastic',
      opacity: 0.62,
      castShadow: false,
    });
  }
  slab(roofDetails, [width + 0.5, 0.2, depth + 0.5], {
    radius: 0,
    position: [centerX, FACTORY.roofY + 0.14, centerZ],
    color: PALETTE.roofDeck,
    kind: 'steelPainted',
    castShadow: false,
  });
  // 屋面立缝：一排细条，让屋顶不再是块白板
  for (let index = 0; index < 13; index += 1) {
    slab(roofDetails, [0.1, 0.06, depth + 0.4], {
      radius: 0,
      position: [FACTORY.minX + (width * index) / 12, FACTORY.roofY + 0.26, centerZ],
      color: PALETTE.roofSeam,
      kind: 'steelPainted',
      castShadow: false,
    });
  }
  // 长边厂牌：实体屋顶模式下也能一眼认出这是哪座厂房
  const signNode = group(roofDetails, [2.0, 4.9, FACTORY.maxZ + 0.16]);
  slab(signNode, [9.6, 1.6, 0.1], { radius: 0.04, color: PALETTE.panelFace, kind: 'plastic', castShadow: false });
  mesh(signNode, {
    geometry: plane(8.6, 1.05),
    material: standard({ ...(signMap ? { map: signMap } : {}), transparent: true, roughness: 0.6, toneMapped: false }),
    position: [0, 0, 0.07],
  });

  /* 灯具下方的局部补光：不投影，所以很便宜，但能让设备顶部有暖亮面。
     强度刻意压得低——补光一强，主光投下的阴影就被冲平了。 */
  for (const x of [-11, 0, 11]) {
    const fill = new PointLight(PALETTE.lampWarm, 7, 16, 2);
    fill.position.set(x, FACTORY.roofY - 1.7, centerZ);
    root.add(fill);
  }

  /* ---------- 卷帘门与卸货雨棚 ---------- */
  for (const dock of DOCK_LIST) {
    const door = group(root, [dock.x, 0, FACTORY.minZ]);
    // 门洞边框（贴在墙上，略向外凸）
    for (const side of [-1, 1]) {
      slab(door, [0.16, 4.1, 0.3], { radius: 0, position: [side * 1.78, 2.05, -0.02], color: PALETTE.doorFrame, kind: 'steelPainted' });
    }
    slab(door, [3.72, 0.18, 0.3], { radius: 0, position: [0, 4.18, -0.02], color: PALETTE.doorFrame, kind: 'steelPainted' });
    // 帘片：一排横向薄板，只在屋顶实体时显示
    const roll = group(roofDetails, [dock.x, 0, FACTORY.minZ - 0.04]);
    for (let index = 0; index < 12; index += 1) {
      slab(roll, [3.5, 0.29, 0.1], {
        radius: 0,
        position: [0, 0.2 + index * 0.325, 0],
        color: index % 2 === 0 ? PALETTE.doorRoll : PALETTE.wallPanelDark,
        kind: 'steelPainted',
        castShadow: false,
        receiveShadow: false,
      });
    }
    // 雨棚
    slab(door, [4.6, 0.16, 2.4], { radius: 0.04, position: [0, 4.75, -1.3], color: PALETTE.canopy, kind: 'steelPainted' });
    for (const side of [-1, 1]) {
      bar(door, [side * 1.9, 4.6, -0.1], [side * 1.9, 2.4, -2.2], { thickness: 0.12, color: PALETTE.doorFrame, kind: 'steelPainted' });
    }
    // 门楣灯
    mesh(door, {
      geometry: new BoxGeometry(2.6, 0.07, 0.16),
      material: standard(glow(PALETTE.lampWarm, 2.2)),
      position: [0, 4.5, -0.4],
      rotation: [Math.PI / 2.6, 0, 0],
      castShadow: false,
    });
    // 防撞柱
    for (const side of [-1, 1]) {
      const bollard = group(door, [side * 2.3, 0, -0.6]);
      rod(bollard, 0.13, 0.9, { position: [0, 0.45, 0], color: PALETTE.bollard, kind: 'steelPainted' });
      rod(bollard, 0.1, 0.5, { position: [0, 0.5, 0], color: PALETTE.stripeWhite, kind: 'steelPainted', castShadow: false });
    }
    // 月台门楣标识板
    const sign = group(root, [dock.x, 5.0, FACTORY.minZ - 0.16]);
    slab(sign, [1.9, 0.5, 0.08], { radius: 0.03, color: '#1f2a30', kind: 'plastic', castShadow: false });
    slab(sign, [1.78, 0.4, 0.03], { radius: 0, position: [0, 0, 0.05], color: PALETTE.safetyYellow, kind: 'floorPaint', castShadow: false });
    labels.push({ position: [dock.x, 5.0, FACTORY.minZ + 0.12], text: dock.label, distanceFactor: 26, className: 'zone-label dock-label' });
  }

  /* ---------- 防护栏杆 ----------
     原来沿主通道南侧有一道 38 m 长的通栏栏杆，叉车要跨越时唯一的缺口又被两台打包机挡死，
     实际效果是「把厂房切成两半 + 叉车从栏杆里穿过去」。这里改为只在不需要跨越的位置做短栏杆。 */
  rail(root, [FACTORY.minX + 2, 0, AISLE.z + AISLE.halfWidth + 0.7], [-9, 0, AISLE.z + AISLE.halfWidth + 0.7], { height: 1.05, posts: 4 });
  rail(root, [3, 0, AISLE.z + AISLE.halfWidth + 0.7], [9.4, 0, AISLE.z + AISLE.halfWidth + 0.7], { height: 1.05, posts: 3 });
  rail(
    root,
    [PLANT.outboundStage.x - PLANT.outboundStage.w / 2 - 0.6, 0, PLANT.outboundStage.z - PLANT.outboundStage.d / 2 - 0.4],
    [PLANT.outboundStage.x + PLANT.outboundStage.w / 2 + 0.6, 0, PLANT.outboundStage.z - PLANT.outboundStage.d / 2 - 0.4],
    { height: 1.05, posts: 4 },
  );

  /* ---------- 墙面通风格栅：给大墙面加细节 ---------- */
  louver(root, { width: 2.2, height: 1.0, slats: 6, position: [FACTORY.minX + 0.16, 4.4, centerZ - 4], rotation: [0, Math.PI / 2, 0] });
  louver(root, { width: 2.2, height: 1.0, slats: 6, position: [FACTORY.maxX - 0.16, 4.4, centerZ + 3], rotation: [0, -Math.PI / 2, 0] });

  /*
   * 上一次应用过的透视状态。初始为 null 而不是 true：
   * 场景构建出来时屋顶细节默认可见、墙板不透明，等价于「显示屋顶」(enclosed)；
   * 若这里初始化成 true，挂载时视图模式本就是 xray，`setXray(true)` 会命中早退守卫直接返回，
   * 屋顶就永远收不起来，与顶栏按钮文案（依 viewMode 显示「显示屋顶」）互相矛盾。
   * 用 null 表示「尚未应用过任何状态」，保证首次调用一定生效。
   */
  let appliedXray: boolean | null = null;

  return {
    roofDetails,
    wallMaterials,
    labels,
    setXray(xray: boolean) {
      if (xray === appliedXray) return;
      appliedXray = xray;
      roofDetails.visible = !xray;
      for (const material of wallMaterials) material.opacity = xray ? 0.14 : 0.96;
    },
    dispose() {
      root.traverse((node) => {
        const candidate = node as { geometry?: { dispose(): void }; material?: { dispose(): void } | { dispose(): void }[] };
        candidate.geometry?.dispose();
        const material = candidate.material;
        if (Array.isArray(material)) material.forEach((entry) => entry.dispose());
        else material?.dispose();
      });
    },
  };
}
