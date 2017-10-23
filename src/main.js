import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routerConfig.js'
import store from './store/store.js' 
import axios from 'axios'
import Loading from './components/loading'

Vue.use(VueRouter);
Vue.use(Loading);

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('showLoading')  
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
});

//axios.default.baseURL='';//配置请求的根路径

Vue.prototype.$http=axios;

const router = new VueRouter({
	mode:'history',
	scrollBehavior:()=>({y:0}),
	routes
});

require('./assets/css/base.css')

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
