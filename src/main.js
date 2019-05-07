// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles'
import axios from 'axios'
import store from './store/store'
import Vuex from 'vuex'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueParticles) 
Vue.use(Vuex) 

Vue.prototype.$axios = axios;

Vue.prototype.host = '/api';

window.router=router

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
