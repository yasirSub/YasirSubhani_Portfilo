import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173, // Default Vite port
    strictPort: false, // Allow fallback to other ports if 5173 is busy
  },
});
