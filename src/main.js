import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import VueAB from 'vue-a2b'
Vue.use(VueAB)

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/argon.css';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
