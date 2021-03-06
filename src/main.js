import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './element/index'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:3000'

Vue.use(element)
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
