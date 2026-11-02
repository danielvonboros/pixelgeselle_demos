import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/firstlinie/",
  plugins: [react()],
  server: { port: 5176 },
  build: { outDir: "../../dist/firstlinie", emptyOutDir: true },
});
