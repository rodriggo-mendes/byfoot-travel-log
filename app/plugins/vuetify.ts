import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { defineNuxtPlugin } from 'nuxt/app';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
    },
  });
  app.vueApp.use(vuetify);
});
