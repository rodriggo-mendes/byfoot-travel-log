import tailwindcss from '@tailwindcss/vite';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2025-07-15',
  css: ['@/assets/style/main.css', '@/assets/style/global.scss'],
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
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/style/_colors.scss" as colors;
          `,
        },
      },
    },
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
