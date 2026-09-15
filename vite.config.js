import { defineConfig } from "vite";

export default defineConfig({
  base: "/rsschool-landing-page/",
  server: {
    host: true,
  },
  build: {
    sourcemap: true,
  }
});
