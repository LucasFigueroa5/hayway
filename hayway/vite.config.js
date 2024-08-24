import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // Agrega algunas opciones de logging para asegurarte que está funcionando
      svgrOptions: {
        icon: true, // Ejemplo de una opción, no necesariamente resolverá el problema
      },
      esbuildOptions: {
        // Puedes agregar esto para ver si el SVG se procesa
        logLevel: 'debug',
      },
    }),
  ],
})