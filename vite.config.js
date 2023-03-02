const { defineConfig } = require("vite");
import { resolve } from "path";

module.exports = defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        about: resolve(__dirname, "src/projects.html"),
        about: resolve(__dirname, "src/skills.html"),
      },
    },
  },
});
