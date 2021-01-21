/*
 * @Author: jweboy
 * @Date: 2020-12-13 22:47:57
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-09 17:59:37
 */
import Vue from 'vue'
import App from './App'
import Card from '@/components/Card'
import ListItem from '@/components/ListItem'
// import Steps from '@/components/Steps'

Vue.config.productionTip = false

App.mpType = 'app'

// vant components
// Vue.use(VanNavBar);
// Vue.use(VanButton);

// custom components
// Vue.component('Steps', Steps);
Vue.component('Card', Card);
Vue.component('ListItem', ListItem);

const app = new Vue({
  ...App
})
app.$mount()
