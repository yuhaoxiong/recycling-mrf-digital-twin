import { copyFileSync, cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Separate input and output: the original index.html and dist/ keep their existing build.
// 端口同样避开 Windows 保留区间（见 vite.config.ts 的说明）。
const DEV_PORT = 5320;
const PREVIEW_PORT = 5321;

export default defineConfig({
  base: './',
  server: { port: DEV_PORT, strictPort: true },
  preview: { port: PREVIEW_PORT, strictPort: true },
  plugins: [
    vue(),
    {
      name: 'local-cad-assets',
      buildStart() {
        if (!existsSync(resolve('actual-assets/plant-review.glb'))) {
          this.error(
            '缺少本地 CAD 资产：将 docs/cad-local/plant-review.glb 复制到 actual-assets/ 后再构建实际产线。',
          );
        }
        if (!existsSync(resolve('dist/index.html')))
          this.error('缺少原演示静态产物 dist/index.html，无法提供原演示入口。');
      },
      writeBundle() {
        // Copy the existing original build byte-for-byte, never rebuild or overwrite dist/.
        cpSync(resolve('dist'), resolve('dist-actual'), { recursive: true });
        mkdirSync(resolve('dist-actual/actual-assets'), { recursive: true });
        copyFileSync(
          resolve('actual-assets/plant-review.glb'),
          resolve('dist-actual/actual-assets/plant-review.glb'),
        );
      },
    },
  ],
  publicDir: false,
  build: {
    outDir: 'dist-actual',
    rollupOptions: { input: resolve('actual.html') },
    chunkSizeWarningLimit: 1400,
  },
});
