import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import uif2 from '../../ui/dist/v2/index.es'

Vue.config.productionTip = false

Vue.use(uif2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
