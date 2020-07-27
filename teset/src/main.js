import Vue from 'vue'
import App from './App.vue'
import router from './router'

//elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//axios请求
import axios from 'axios'
window.axios = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
