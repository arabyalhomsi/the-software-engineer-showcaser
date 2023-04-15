import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { VitePluginRadar } from 'vite-plugin-radar';
import { UserConfig, defineConfig } from 'vite';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  dotenv.config();

  const config: UserConfig = {
    plugins: [
      react(),
      VitePluginRadar({
        enableDev: mode === 'development',
        analytics: [{ id: process.env.GOOGLE_ANALYTICS_ID ?? '' }],
      }),
      ssr({ prerender: true }),
    ],
    resolve: {
      alias: {
        '#root': __dirname,
      },
    },
  };

  return config;
});
