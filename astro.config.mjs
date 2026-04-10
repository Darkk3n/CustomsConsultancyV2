import tailwindv4 from '@tailwindcss/vite'; // Import the Vite plugin
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

export default defineConfig({
  vite: {
     plugins: [tailwindv4()],
  },

  integrations: [icon()],
});