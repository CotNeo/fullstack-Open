import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/fullstack-Open/phonebook/", // GitHub Pages alt dizini için gerekli
  plugins: [react()],
});
