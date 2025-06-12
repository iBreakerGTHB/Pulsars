import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Pulsars", // make sure this matches your deploy subdirectory
  optimizeDeps: { 
    exclude: ['lucide-react'],
  },
});
