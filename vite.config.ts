import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/',
  plugins: [svgr({ exportAsDefault: true }), react()],
  server: {
    port: 3001,
  },
  preview: {
    port: 8080,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    watch: false,
  },
})
