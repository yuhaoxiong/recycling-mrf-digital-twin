import { BoxGeometry, BufferGeometry, CylinderGeometry, SphereGeometry } from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/**
 * 倒角盒（替代 drei 的 `RoundedBox`）。
 *
 * React 版里大外观件全部用 drei 的 `RoundedBox` 渲染 —— 圆角边缘能吃到高光，
 * 是「精致感」的主要来源。Vue 版不引入 drei，这里给一个等价的纯代码实现：
 *
 * - 内芯用普通盒（保证主体面积与比例完全一致）；
 * - 8 个角各放一个半径 `radius` 的球，球心落在内盒棱角，只露出四分之一球面；
 * - 12 条棱用同半径圆柱填缝；
 * - 全部用 three 自带的 `mergeGeometries` 合并成一张几何。
 *
 * 相比手写三角形绕序的版本，这条路数值稳定、方向不会翻面，且合并失败时会安全退回内芯盒。
 */
export function roundedBoxGeometry(width: number, height: number, depth: number, radius: number, smoothness = 2): BufferGeometry {
  const safe = Math.max(0, Math.min(radius, Math.min(width, height, depth) / 2 - 1e-4));
  // 极薄件（圆角比最短边的一半还大）直接用锐角盒，否则圆角会自交。
  if (safe <= 0.002) return new BoxGeometry(width, height, depth);

  const parts = roundedBoxParts(width, height, depth, safe, smoothness);
  const merged = mergeGeometries(parts, false) ?? parts[0];
  parts.forEach((part) => part.dispose());
  return merged;
}

/** 拆开的各个部件：调用方可以按需合并或分别挂材质。 */
export function roundedBoxParts(width: number, height: number, depth: number, radius: number, smoothness = 2): BufferGeometry[] {
  const segments = Math.max(4, Math.round(smoothness) * 2);
  const innerWidth = Math.max(1e-3, width - radius * 2);
  const innerHeight = Math.max(1e-3, height - radius * 2);
  const innerDepth = Math.max(1e-3, depth - radius * 2);

  const parts: BufferGeometry[] = [new BoxGeometry(innerWidth, height, depth)];

  // 角：8 个球
  for (const sx of [-1, 1]) {
    for (const sy of [-1, 1]) {
      for (const sz of [-1, 1]) {
        const corner = new SphereGeometry(radius, segments, segments);
        corner.translate((sx * innerWidth) / 2, (sy * innerHeight) / 2, (sz * innerDepth) / 2);
        parts.push(corner);
      }
    }
  }

  // 棱：12 根圆柱
  const bar = (length: number) => new CylinderGeometry(radius, radius, length, segments, 1, false);
  for (const sy of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const edge = bar(innerWidth);
      edge.rotateZ(Math.PI / 2);
      edge.translate(0, (sy * innerHeight) / 2, (sz * innerDepth) / 2);
      parts.push(edge);
    }
  }
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const edge = bar(innerHeight);
      edge.translate((sx * innerWidth) / 2, 0, (sz * innerDepth) / 2);
      parts.push(edge);
    }
  }
  for (const sx of [-1, 1]) {
    for (const sy of [-1, 1]) {
      const edge = bar(innerDepth);
      edge.rotateX(Math.PI / 2);
      edge.translate((sx * innerWidth) / 2, (sy * innerHeight) / 2, 0);
      parts.push(edge);
    }
  }

  return parts;
}
