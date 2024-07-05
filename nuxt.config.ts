// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@primevue/nuxt-module", "@pinia/nuxt"],
  css: ["~/assets/css/main.css"],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  router: {
    middleware: ['auth.global']
  },

  compatibilityDate: "2024-07-05",
});