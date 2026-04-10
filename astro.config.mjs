import tailwindv4 from '@tailwindcss/vite'; // Import the Vite plugin
import { defineConfig } from 'astro/config';

export default defineConfig({
   vite: {
      plugins: [tailwindv4()],
   },
});