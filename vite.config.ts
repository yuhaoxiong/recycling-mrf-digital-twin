import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

// 开发端口刻意选在 5310：Windows 上 Hyper-V / WSL / Docker 会把一段端口范围整体保留
// （本机为 5141–5240，可用 `netsh interface ipv4 show excludedportrange protocol=tcp` 查看），
// Vite 默认的 5173 落在此类保留区内时会直接报 listen EACCES。
const DEV_PORT = 5310;
const PREVIEW_PORT = 5311;

export default defineConfig({
  plugins: [vue()],
  base: './',
  server: { port: DEV_PORT, strictPort: true },
  preview: { port: PREVIEW_PORT, strictPort: true },
  test: {
    environment: 'jsdom',
    // 仿真不变量测试要推演整段班次（130 s × 1/30 s，或实际产线 3600 步 × 多断言），
    // 单独跑约 4–9 s，并行跑两个入口时更久，默认 5 s 阈值容易误报超时。
    testTimeout: 60_000,
    hookTimeout: 60_000,
    // 仓库里仍留有旧 React 实现同名的 .tsx 源文件与测试（无法在本沙箱内删除），
    // 它们已被 Vue 版 .ts/.vue 取代，这里显式排除，避免被当作待编译的测试入口。
    include: ['tests/**/*.test.ts'],
    exclude: ['node_modules/**', 'dist/**', 'dist-actual/**'],
  },
  build: { chunkSizeWarningLimit: 1300 },
});
