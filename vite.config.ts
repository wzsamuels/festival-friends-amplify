import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis", //<-- AWS SDK
      },
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill(),
      ],
    },
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser", // <-- Fix from above
    },
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    testMatch: ["./src/**/*.test.tsx"],
    globals: true,
  },
});
