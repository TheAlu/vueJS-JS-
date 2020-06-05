const {add,mul} = require('./js/mathUtils.js');

console.log(add(5,6));
console.log(mul(5,6));

import {name,age,height} from './js/info.js';

console.log(name);
console.log(age);

//使用vue进行开发

import Vue from 'vue'

// import App from './vue/app.js'
import App from './vue/App.vue'


new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})




document.writeln('<button>按钮</button>')