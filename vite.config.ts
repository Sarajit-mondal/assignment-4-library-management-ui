import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  build: {
=======
    build: {
>>>>>>> 9edebd99a49af82dfebba1a2c88fe66ce30aadbe
    chunkSizeWarningLimit: 1000,   // in kB
  },
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})