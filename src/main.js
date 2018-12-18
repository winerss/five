// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import store from './vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(MuseUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
