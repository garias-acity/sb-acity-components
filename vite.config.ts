import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@scss": resolve(__dirname, "./src/scss"),
      "@stories": resolve(__dirname, "./src/stories"),
      "@assets": resolve(__dirname, "./src/assets"),
    },
  },
});
