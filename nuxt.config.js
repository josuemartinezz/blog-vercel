import { resolve } from 'path';
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)

  env: {
    BASE_URL: process.env.BASE_URL
  },

  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'
      }
    ],
    script: []
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/css/tailwind.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-purgecss'],

  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        tailwindcss: resolve(__dirname, './tailwind.config.js')
      }
    }
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css'
  }
};
