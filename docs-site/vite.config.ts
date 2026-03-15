import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      'sportfi-kit': path.resolve(__dirname, '../packages/core/src/index.ts'),
    },
  },
  optimizeDeps: {
    include: ['sportfi-kit'],
  },
});
