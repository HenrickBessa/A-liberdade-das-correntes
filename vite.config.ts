import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Config única para o template. Cada produto (ebook) define seu próprio
// tema/conteúdo em src/config e src/data — o código não muda.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
