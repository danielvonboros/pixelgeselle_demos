import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/raumton/",
  plugins: [react()],
  server: { port: 5174 },
  build: { outDir: "../../dist/raumton", emptyOutDir: true },
});
