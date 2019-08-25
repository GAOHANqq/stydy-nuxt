import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _40043bad = () => interopDefault(import('..\\pages\\couter\\index.vue' /* webpackChunkName: "pages_couter_index" */))
const _772798de = () => interopDefault(import('..\\pages\\goods_list\\index.vue' /* webpackChunkName: "pages_goods_list_index" */))
const _6059d926 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "pages_home_index" */))
const _c50f4ec0 = () => interopDefault(import('..\\pages\\orders\\index.vue' /* webpackChunkName: "pages_orders_index" */))
const _3b70254a = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _947e8a72 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _41f534de = () => interopDefault(import('..\\pages\\users\\profile.vue' /* webpackChunkName: "pages_users_profile" */))
const _ed9eb1c8 = () => interopDefault(import('..\\pages\\detail\\_id.vue' /* webpackChunkName: "pages_detail__id" */))
const _c643d9b6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/couter",
      component: _40043bad,
      name: "couter"
    }, {
      path: "/goods_list",
      component: _772798de,
      name: "goods_list"
    }, {
      path: "/home",
      component: _6059d926,
      name: "home"
    }, {
      path: "/orders",
      component: _c50f4ec0,
      name: "orders"
    }, {
      path: "/users",
      component: _3b70254a,
      children: [{
        path: "",
        component: _947e8a72,
        name: "users"
      }, {
        path: "profile",
        component: _41f534de,
        name: "users-profile"
      }]
    }, {
      path: "/detail/:id?",
      component: _ed9eb1c8,
      name: "detail-id"
    }, {
      path: "/",
      component: _c643d9b6,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
