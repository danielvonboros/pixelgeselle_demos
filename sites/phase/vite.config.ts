import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/phase/",
  plugins: [react()],
  server: { port: 5175 },
  build: { outDir: "../../dist/phase", emptyOutDir: true },
});
