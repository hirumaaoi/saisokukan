import fs from 'fs';
import axios from 'axios';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'サイソウクウカン',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: '昼間碧' },
      { hid: 'description', name: 'description', content: 'サイソウクウカンの2018年、新譜オリジナルアルバムの情報、M3やPixiv Apolloなどの頒布、出展情報等を記載しています。' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/windowEvent.js' },
    { src: '~/plugins/vue-scrollto.js'},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-webfontloader']
  ],
  webfontloader: {
    google: {
      families: ['Vollkorn:400,600','Lato']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
