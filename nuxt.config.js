import pkg from './package'

export default {
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
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
  buildModules: [],
  modules: [],
  build: {}
}
