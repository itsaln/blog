export default {
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  css: [
    {src: '~/assets/scss/main.scss', lang: 'scss'}
  ],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [],
  build: {}
}
