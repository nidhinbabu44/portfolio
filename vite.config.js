import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://nidhinbabu44.github.io/portfolio/ on GitHub Pages
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio/' : '/',
  server: { port: 5190 },
}));
