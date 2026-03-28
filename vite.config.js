import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/bowler-stats-docs/' : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
}));
