import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import HelloWorld from '@/components/HelloWorld'
import ADBTest from '@/components/ADBTest'
import urlTest from '@/components/urlTest'

 
Vue.use(Router)
 
export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/ADBTest', name: 'ADBTest', component: ADBTest },
    { path: '/urlTest',  name: 'urlTest', component: urlTest},
    
  ]
})
