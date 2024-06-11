import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows Vite to be accessible on the network
    port: 5173,       // Ensure the port matches your Docker run command
    watch: {
      usePolling: true, // Polling is more reliable in Docker environments
    },
  },
});
