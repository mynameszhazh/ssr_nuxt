export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'study-ssr-nuxt',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Clobal page router 配置
  // router: {
  //   // 额外的路由规则，我自动生成的路由配置中，没有这个的优先级别高
  //   extendRoutes (routes, resolve) {
  //     routes.push({
  //       path: '/foo',
  //       components: resolve(__dirname, 'page/othername.vue')
  //     })
  //   }
  //   // 路由的中间介
  //   // middleware: ['auth']
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api-inject'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // 代理
  proxy: {
    '/api': 'http://localhost:8080'
  }
}
