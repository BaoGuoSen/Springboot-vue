// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.prototype.$axios = axios
Vue.use(router)
Vue.use(ElementUI);
Vue.config.productionTip = false
// axios.defaults.baseURL="/api"
// http response 响应拦截器
axios.interceptors.response.use(response => {
  console.log(response)
  return response;
},error => {
  if (error.response) {
    
 
   // 返回接口返回的错误信息
   return Promise.reject(error.response.data);
 }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

