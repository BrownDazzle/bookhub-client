import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* pages: {
     index: {
       entry: 'src/main.jsx',
       template: 'index.html',
       filename: 'index.html',
     },
     home: {
       entry: 'src/pages/Home.jsx',
       template: 'index.html',
       filename: 'home.html',
     },
   },*/
})
