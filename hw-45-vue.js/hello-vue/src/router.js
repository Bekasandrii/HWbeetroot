import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/base',
    name: 'Base',

    component: () => import('./views/base/base.vue')
  },
  {
    path: '/page',
    name: 'page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/page/page.vue')
  },
  {
    path: '*',
    name: '/page',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
