import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      // Proxy all /apps requests to ALL-MIND hub on 3000
      '/apps': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path // Keep the path as-is
      }
    }
  }
})