import Constants from './plugins/constants'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 3001 // ваш порт здесь
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SEA Academy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
    ],
    script: [
      {
        id: 'b07dc219132f77d4fec5855e2b2f4142bd11cb8a',
        src: 'https://online.seacademia.com/pl/lite/widget/script?id=843569',
        defer: true
      },
      {
        id: 'a7cee2d196bff4b855f86976e55b4bdb283668cf',
        src: 'https://online.seacademia.com/pl/lite/widget/script?id=843576',
        defer: true
      },
      {
        id: '1c0a1bdde2d2f6e0bbcff3a3d23fdd9387f3ea4e',
        src: 'https://online.seacademia.com/pl/lite/widget/script?id=843584',
        defer: true
      },
      {
        src: 'https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js',
        defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/lazyloader.js', mode: 'client' },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vueSlider.js', ssr: false },
    { src: '~/plugins/ym.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    [
      '@nuxtjs/moment',
      {
        defaultTimezone: 'Europe/Moscow',
        locales: ['ru'],
        defaultLocale: 'ru'
      }
    ]
  ],
  axios: {
    proxy: false,
    prefix: 'http://localhost:3000'
  },
  // proxy: {
  //   '/send': {
  //     target: 'http://localhost:3000',
  //     pathRewrite: {
  //       '^/send': ''
  //     }
  //   }
  // },
  pwa: {
    workbox: {
      cacheNames: {
        // Кеш для статических ресурсов
        static: 'my-static-cache',
      },
      // Настройки кеширования
      runtimeCaching: [
        {
          urlPattern: '.*',
          handler: 'cacheFirst',
          options: {
            cacheName: 'my-static-cache',
            expiration: {
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
            },
          },
        },
      ],
    },
  },
  // generate: {
  //   proxy: true
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // router: {
  //   base: '/SEA/'
  // }
}
