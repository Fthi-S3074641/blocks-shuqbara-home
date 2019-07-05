// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

Vue.use(Vuetify, {
  theme: {
    primary: '#037367',
    secondary: '#00281f',
    accent: '#4a7eb3',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.directive('focus', {
  inserted: function (el) {
    el.__vue__.focus()
  }
})
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
