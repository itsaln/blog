import pkg from './package'

export default {
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'yandex-verification', content: 'KEY'},
      {name: 'google-site-verification', content: 'KEY'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    {src: '~/assets/scss/main.scss', lang: 'scss'}
  ],
  plugins: [
    '~plugins/app-components.js'
  ],
  components: true,
  buildModules: [
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-KEY'
    // }]
  ],
  modules: [
    // ['@nuxtjs/yandex-metrika', {
    //     id: 'KEY',
    //     webvisor: false,
    //     clickmap: true,
    //     // useCDN: false,
    //     trackLinks: true,
    //     // accurateTrackBounce: true
    //   }]
  ],
  build: {}
}
