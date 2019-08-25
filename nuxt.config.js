
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt学习demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt学习demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['@/assets/css/style.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vant/vant-plugins.js', ssr: true },

    // 注入Vue实例测试
    { src: '@/plugins/debugger/log-debugger.js', ssr: false },
    // 注入context实例测试
    { src: '@/plugins/sort/sort.js', ssr: false }
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
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },

  },
  router: {
    middleware: 'auth'
  }
}
