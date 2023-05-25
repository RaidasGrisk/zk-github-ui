import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// in fact using this does nothing
// it applies to local dev server only
// and emitting this wil also work ok
// fails in production only
// https://stackoverflow.com/questions/72755269/set-crossoriginisolated-svelte-and-sveltekit
const crossOriginIsolation = () => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
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
  build: { target: "es2022" },
  optimizeDeps: {
    esbuildOptions: { target: "es2022", supported: { bigint: true } },
  },

})
