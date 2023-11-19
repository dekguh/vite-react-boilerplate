/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: ['**/*.unit.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: './src/test/setupRtl.ts'
  }
})
