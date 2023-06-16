// vite.config.ts
import { defineConfig } from "file:///C:/Users/wzsam/source/repos/festival-friends-amplify/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/wzsam/source/repos/festival-friends-amplify/node_modules/@vitejs/plugin-react/dist/index.mjs";
import rollupNodePolyFill from "file:///C:/Users/wzsam/source/repos/festival-friends-amplify/node_modules/rollup-plugin-node-polyfills/dist/index.js";
import { VitePWA } from "file:///C:/Users/wzsam/source/repos/festival-friends-amplify/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({ registerType: "autoUpdate" })
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis"
        //<-- AWS SDK
      }
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill()
      ]
    }
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser"
      // <-- Fix from above
    }
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    testMatch: ["./src/**/*.test.tsx"],
    globals: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3enNhbVxcXFxzb3VyY2VcXFxccmVwb3NcXFxcZmVzdGl2YWwtZnJpZW5kcy1hbXBsaWZ5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx3enNhbVxcXFxzb3VyY2VcXFxccmVwb3NcXFxcZmVzdGl2YWwtZnJpZW5kcy1hbXBsaWZ5XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy93enNhbS9zb3VyY2UvcmVwb3MvZmVzdGl2YWwtZnJpZW5kcy1hbXBsaWZ5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCByb2xsdXBOb2RlUG9seUZpbGwgZnJvbSBcInJvbGx1cC1wbHVnaW4tbm9kZS1wb2x5ZmlsbHNcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBWaXRlUFdBKHsgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScgfSlcbiAgXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXNidWlsZE9wdGlvbnM6IHtcbiAgICAgIC8vIE5vZGUuanMgZ2xvYmFsIHRvIGJyb3dzZXIgZ2xvYmFsVGhpc1xuICAgICAgZGVmaW5lOiB7XG4gICAgICAgIGdsb2JhbDogXCJnbG9iYWxUaGlzXCIsIC8vPC0tIEFXUyBTREtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIC8vIEVuYWJsZSByb2xsdXAgcG9seWZpbGxzIHBsdWdpblxuICAgICAgICAvLyB1c2VkIGR1cmluZyBwcm9kdWN0aW9uIGJ1bmRsaW5nXG4gICAgICAgIHJvbGx1cE5vZGVQb2x5RmlsbCgpLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiLi9ydW50aW1lQ29uZmlnXCI6IFwiLi9ydW50aW1lQ29uZmlnLmJyb3dzZXJcIiwgLy8gPC0tIEZpeCBmcm9tIGFib3ZlXG4gICAgfSxcbiAgfSxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlXG4gIHRlc3Q6IHtcbiAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICAgIHNldHVwRmlsZXM6IFtcIi4vc3JjL3NldHVwVGVzdHMudHNcIl0sXG4gICAgdGVzdE1hdGNoOiBbXCIuL3NyYy8qKi8qLnRlc3QudHN4XCJdLFxuICAgIGdsb2JhbHM6IHRydWUsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFYsU0FBUyxvQkFBb0I7QUFDdlgsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sd0JBQXdCO0FBQy9CLFNBQVMsZUFBZTtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRLEVBQUUsY0FBYyxhQUFhLENBQUM7QUFBQSxFQUN4QztBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osZ0JBQWdCO0FBQUE7QUFBQSxNQUVkLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsU0FBUztBQUFBO0FBQUE7QUFBQSxRQUdQLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLG1CQUFtQjtBQUFBO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBLEVBR0EsTUFBTTtBQUFBLElBQ0osYUFBYTtBQUFBLElBQ2IsWUFBWSxDQUFDLHFCQUFxQjtBQUFBLElBQ2xDLFdBQVcsQ0FBQyxxQkFBcUI7QUFBQSxJQUNqQyxTQUFTO0FBQUEsRUFDWDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
