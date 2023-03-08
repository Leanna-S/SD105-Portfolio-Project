const { defineConfig } = require("vite");
import { resolve } from "path";

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        projects: resolve(__dirname, "projects.html"),
        skills: resolve(__dirname, "skills.html"),
      },
    },
  },
});
