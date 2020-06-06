import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
  // render: function (h) {
  //   return h(App)
  // }
})


// 那么.vue文件中的template是由vue-template+compiler处理的


//render  ->  vdom  ->UI
