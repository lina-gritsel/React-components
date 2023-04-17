/// <reference types="vitest" />
/// <reference types="vite/client" />

import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') ,
       components: `${path.resolve(__dirname, './src/components')}`,
       api: `${path.resolve(__dirname, './src/api')}`,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      all: true,
      reporter: ['text'],
    },
  },
})
