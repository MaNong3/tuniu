import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {

      path: '/home',
      component: () => import('view/home.vue')
    },
    {
      path: '/city',
      component: () => import('view/city.vue')
    },
    {
      path: '/center',
      component: () => import('view/center.vue')
    },
    {
      path: '/recommendDetail/:id',
      component: () => import('view/detail.vue')
    },
    {
      path: '/login',
      component: () => import('comp/center/login.vue')
    },
    {
      path: '/user',
      component: () => import('comp/center/user.vue')
    },
    {
      path: '/pay',
      component: () => import('comp/center/pay.vue')
    },
    {
      path: '/undepart',
      component: () => import('comp/center/undepart.vue')
    },
    {
      path: '/alllist',
      component: () => import('comp/center/all-list.vue')
    }
  ],
})
