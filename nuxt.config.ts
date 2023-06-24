// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = (String(import.meta.env.BASE_URL ?? '') + '/').replace(
  /\/+$/,
  '/',
)

import packages from './package-lock.json'
const sassVersion = packages.packages['node_modules/sass'].version

export default defineNuxtConfig({
  vite: {
    esbuild: {
      keepNames: true,
    },
  },
  devServer: {
    port: 53344,
  },
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-headlessui',
    '~/modules/fix-manifest/module',
  ],
  app: {
    baseURL,
    keepalive: true,
  },
  runtimeConfig: {
    public: {
      baseURL,
      sassVersion,
    },
  },
  css: ['~/assets/css/global.scss'],
  pwa: {
    registerType: 'autoUpdate',
    base: baseURL,
    buildBase: baseURL,
    manifest: {
      name: 'sassed | The Online Sass Playground',
      short_name: 'sassed',
      theme_color: '#1a212f',
      icons: [
        {
          src: baseURL + 'sassed-pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: baseURL + 'sassed-pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: baseURL + 'sassed-pwa-512x512-maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: baseURL,
      globPatterns: ['**/*.{js,css,html,png,svg,ico,ttf,woff,woff2}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  googleFonts: {
    fontsPath: baseURL + 'fonts',
    families: {
      'JetBrains+Mono': [400],
      Poppins: [400],
    },
  },
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  colorMode: {
    storageKey: 'theme',
    classSuffix: '',
  },
})
