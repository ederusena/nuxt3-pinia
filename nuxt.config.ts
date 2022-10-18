// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/sanity',
    'nuxt-icons',
    '@vuestic/nuxt',
    [
        '@pinia/nuxt',
        {
          autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            // automatically imports `defineStore` as `definePiniaStore`
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
          ],
        },
      ],
  ],
  tailwindcss: {
    cssPath: "~/src/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
});
