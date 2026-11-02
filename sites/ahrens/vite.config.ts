import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ahrens/",
  plugins: [react()],
  server: { port: 5177 },
  build: { outDir: "../../dist/ahrens", emptyOutDir: true },
});
