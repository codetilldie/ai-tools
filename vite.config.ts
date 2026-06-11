import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/ai-tools/",
  root: ".",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
