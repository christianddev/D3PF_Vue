// npm
import Vue from 'vue'

// BootstrapVue
import './plugins/bootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'

// Custom Directives
import './directives'

// App files
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Global
import './assets/css/main.styl'

// extra config
Vue.config.productionTip = false

// principal instance of Vue
new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
