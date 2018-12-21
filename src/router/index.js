import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => require(['@/views/Index'], resolve)
const home = resolve => require(['@/views/Home'], resolve)
const search = resolve => require(['@/views/Search'], resolve)
const dial = resolve => require(['@/views/Dial'], resolve)
const around = resolve => require(['@/views/Around'], resolve)
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
        path: '/search',
        name: 'search',
        component: search
      }, {
        path: '/dial',
        name: 'dial',
        component: dial
      }, {
        path: '/around',
        name: 'around',
        component: around
      }, {
        path: '/about',
        name: 'about',
        component: about
      }]
    }
  ]
})
