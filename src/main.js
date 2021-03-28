/*
 * @Author: jweboy
 * @Date: 2020-12-13 22:47:57
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-29 22:43:40
 */
import Vue from 'vue'
import App from './App'
import Card from '@/components/Card'
import ListItem from '@/components/ListItem'
import MescrollBody from "@/components/mescroll-uni/mescroll-body";
import MescrollEmpty from '@/components/mescroll-uni/components/mescroll-empty';
	
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
Vue.component('mescroll-body', MescrollBody);
Vue.component('mescroll-empty', MescrollEmpty);

const app = new Vue({
  ...App
})
app.$mount()
