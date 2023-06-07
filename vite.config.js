/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
  },
  base: '',
});
