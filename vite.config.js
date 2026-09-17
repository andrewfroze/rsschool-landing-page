import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/rsschool-landing-page/",
  server: {
    host: true,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        menu: resolve(__dirname, "menu/index.html"),
      },
    }
  },
});
