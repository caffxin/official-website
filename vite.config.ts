import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/official-website/', // 這裡要改成你的 GitHub Repo 名稱
  build: {
    outDir: 'dist'
  },
});
