import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages hosts this project under /Wanderlust-World/ instead of the domain root.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/Wanderlust-World/' : '/',
  plugins: [react()],
});
