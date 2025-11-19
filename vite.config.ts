import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import { createServer } from "./server";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), expressPlugin()],
  base: "/yeah0-portfolio",  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}