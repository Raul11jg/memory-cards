/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: './manifest.json',
      registerType: 'autoUpdate',
      workbox: {
        globIgnores: ['index.html'],
        globPatterns: ['**/*.{js,css,ttf,jpg,png}'],
        globDirectory: 'dist',
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
  },
  base: '',
});
