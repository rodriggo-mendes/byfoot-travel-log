import tailwindcss from '@tailwindcss/vite';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2025-07-15',
  css: ['./app/assets/css/main.css'],
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // eslint-disable-next-line ts/ban-ts-comment
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  plugins: [
    './app/plugins/vuetify',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },
});
