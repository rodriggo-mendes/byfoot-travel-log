import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { defineNuxtPlugin } from 'nuxt/app';
import { createVuetify } from 'vuetify';

const appDarkTheme = {
  dark: true,
  colors: {
    'background': '#1f1f1f',
    'surface': '#1f1f1f',
    'surface-bright': '#0f0f0f',
    'surface-light': '#2e2e2e',
    'primary': '#87a1ff',
    'primary-darken-1': '#516096',
    'secondary': '#dd87ff',
    'secondary-darken-1': '#804e94',
    'error': '#ff6373',
    'info': '#a3c9bd',
    'success': '#45ff76',
    'warning': '#ffe985',
  },
  variables: {
    'theme-on-background': '#ababab',
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'appDarkTheme',
      themes: {
        appDarkTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
