import { defineConfig } from 'cypress'
import coverage from '@cypress/code-coverage/task'

export default defineConfig({
  video: false,
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      coverage(on, config)
      return config
    },
    baseUrl: 'http://localhost:3000',
  },
})