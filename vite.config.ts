import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig, defineConfig } from 'vite';
import dotenv from 'dotenv';

export default defineConfig(() => {
  dotenv.config();

  const config: UserConfig = {
    plugins: [react(), ssr({ prerender: true })],
    resolve: {
      alias: {
        '#root': __dirname,
      },
    },
  };

  return config;
});
