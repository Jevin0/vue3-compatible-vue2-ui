import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import uif2next from '../../ui/dist/v2.7/index.es'

Vue.config.productionTip = false

Vue.use(uif2next)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
