// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',


  // components: { App },
  // template: '<App/>',
  // 可替换成:
  // render: function (createElement) {
  //   return createElement(App)
  // }
  //      //1.createElement普通用法:
  //      //createElement('标签名',{标签的属性},['标签的内容'])
  //      //return createElement('h2',{class: 'box'},['Hellow world'])

  //      //2.也可传入组件对象
})


//template  ->  ast  ->  render  ->  vdom  ->UI
