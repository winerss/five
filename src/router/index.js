import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['@/views/Index'], resolve)
const home = resolve => require(['@/views/Home'], resolve)
const about = resolve => require(['@/views/About'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: index,
      children: [{
        path: '/home',
        name: 'home',
        component: home
      }, {
        path: '/about',
        name: 'about',
        component: about
      }]
    }
  ]
})
