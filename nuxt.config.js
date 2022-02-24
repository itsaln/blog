import axios from 'axios'
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
  build: {
    vendor: [
      'vue',
      'axios'
    ]
  },
  generate: {
    routes: function () {
      return axios.get('https://blog-4e585-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
        .then(({data}) => {
          // Get id
          const postsArray = []
          for (let key in data) {
            postsArray.push({...data[key], id: key})
          }
          // Routes
          return postsArray.map(post => {
            return '/blog/' + post.id
          })
        })
    }
  }
}
