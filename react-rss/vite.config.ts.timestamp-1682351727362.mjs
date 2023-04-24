// vite.config.ts
import * as path from "path";
import { defineConfig } from "file:///C:/Users/Lina/Desktop/React-RS/react-rss/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Lina/Desktop/React-RS/react-rss/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///C:/Users/Lina/Desktop/React-RS/react-rss/node_modules/vite-tsconfig-paths/dist/index.mjs";
import eslint from "file:///C:/Users/Lina/Desktop/React-RS/react-rss/node_modules/vite-plugin-eslint/dist/index.mjs";
import istanbul from "file:///C:/Users/Lina/Desktop/React-RS/react-rss/node_modules/vite-plugin-istanbul/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Lina\\Desktop\\React-RS\\react-rss";
var vite_config_default = defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
    react(),
    tsconfigPaths(),
    eslint(),
    istanbul({
      cypress: true,
      requireEnv: false
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      components: `${path.resolve(__vite_injected_original_dirname, "./src/components")}`,
      api: `${path.resolve(__vite_injected_original_dirname, "./src/api")}`,
      assets: `${path.resolve(__vite_injected_original_dirname, "./src/assets")}`
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    coverage: {
      provider: "c8",
      all: true,
      reporter: ["text"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMaW5hXFxcXERlc2t0b3BcXFxcUmVhY3QtUlNcXFxccmVhY3QtcnNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMaW5hXFxcXERlc2t0b3BcXFxcUmVhY3QtUlNcXFxccmVhY3QtcnNzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MaW5hL0Rlc2t0b3AvUmVhY3QtUlMvcmVhY3QtcnNzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cclxuXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuaW1wb3J0IGVzbGludCBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xyXG5pbXBvcnQgaXN0YW5idWwgZnJvbSAndml0ZS1wbHVnaW4taXN0YW5idWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBidWlsZDoge1xyXG4gICAgc291cmNlbWFwOiB0cnVlLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICAgIGVzbGludCgpLFxyXG4gICAgaXN0YW5idWwoe1xyXG4gICAgICBjeXByZXNzOiB0cnVlLFxyXG4gICAgICByZXF1aXJlRW52OiBmYWxzZSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcclxuICAgICAgY29tcG9uZW50czogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKX1gLFxyXG4gICAgICBhcGk6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hcGknKX1gLFxyXG4gICAgICBhc3NldHM6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9hc3NldHMnKX1gLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy90ZXN0L3NldHVwLnRzJyxcclxuICAgIGNvdmVyYWdlOiB7XHJcbiAgICAgIHByb3ZpZGVyOiAnYzgnLFxyXG4gICAgICBhbGw6IHRydWUsXHJcbiAgICAgIHJlcG9ydGVyOiBbJ3RleHQnXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUdBLFlBQVksVUFBVTtBQUN0QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sY0FBYztBQVJyQixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQVUsYUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDcEMsWUFBWSxHQUFRLGFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDekQsS0FBSyxHQUFRLGFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzNDLFFBQVEsR0FBUSxhQUFRLGtDQUFXLGNBQWM7QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLFVBQVUsQ0FBQyxNQUFNO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
