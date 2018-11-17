import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './registerServiceWorker'
import VueParticles from "multi-vue-particles"
import BootstrapVue from 'bootstrap-vue'
// import Pace from 'pace'
import ToggleSwitch from 'vuejs-toggle-switch'
Vue.use(ToggleSwitch)

import 'aos/dist/aos.css'

Vue.use(BootstrapVue);

import VueAB from 'vue-a2b'
Vue.use(VueAB)

Vue.config.productionTip = false

Vue.use(VueParticles)

import VueMultianalytics from 'vue-multianalytics'

let gaConfig = {
  appName: 'Trackzon', // Mandatory
  appVersion: '0.1', // Mandatory
  trackingId: 'UA-129379397-1', // Mandatory
  // debug: true, // Whether or not display console logs debugs (optional)
}

let facebookConfig = {
  token: '586232678500711',
  // debug: true,
}


Vue.use(VueMultianalytics, {
  modules: {
    ga: gaConfig,
    facebook: facebookConfig
  }
})


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/argon.css';
import '@/assets/css/custom.css';
import 'et-line'
new Vue({
  router,
  render: h => h(App),
  mounted() {
    // Pace.start()
    // Pace.on('hide', () => {
    //   document.dispatchEvent(new Event('app.rendered'));
    // })
  }
}).$mount('#app')
