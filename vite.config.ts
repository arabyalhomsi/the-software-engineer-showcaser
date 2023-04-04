import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [react(), ssr({ prerender: true })],
  resolve: {
    alias: {
      '#root': __dirname,
    },
  },
};

export default config;
