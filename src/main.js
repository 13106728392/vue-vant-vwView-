/*
 * @Author: your name
 * @Date: 2020-07-15 11:33:48
 * @LastEditTime: 2020-07-15 14:49:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vwporject\src\main.js
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
