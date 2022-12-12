import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// in fact using this does nothing
// it applies to local dev server only
// and emitting this wil also work ok
// fails in production only
const crossOriginIsolation = () => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use((_req, res, next) => {
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
      res.setHeader("Cross-Origin-Resource-Policy", "same-site");
      next();
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    crossOriginIsolation()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: { target: "es2020" },
  optimizeDeps: {
    esbuildOptions: { target: "es2020", supported: { bigint: true } },
  },

})
