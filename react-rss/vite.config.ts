/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';
// import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    eslint(),
    // istanbul({
    //   cypress: true,
    //   requireEnv: false,
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: `${path.resolve(__dirname, './src/components')}`,
      api: `${path.resolve(__dirname, './src/api')}`,
      assets: `${path.resolve(__dirname, './src/assets')}`,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'c8',
      all: true,
      reporter: ['text'],
    },
  },
})
