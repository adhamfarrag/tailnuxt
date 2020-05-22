import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c7bd936 = () => interopDefault(import('../pages/CoinAccounts/index.vue' /* webpackChunkName: "pages/CoinAccounts/index" */))
const _62b0116f = () => interopDefault(import('../pages/CoinHome/index.vue' /* webpackChunkName: "pages/CoinHome/index" */))
const _470551da = () => interopDefault(import('../pages/CoinPrices/index.vue' /* webpackChunkName: "pages/CoinPrices/index" */))
const _fcc11d9a = () => interopDefault(import('../pages/CoinSettings/index.vue' /* webpackChunkName: "pages/CoinSettings/index" */))
const _0f6f9cf5 = () => interopDefault(import('../pages/Components/index.vue' /* webpackChunkName: "pages/Components/index" */))
const _0315e4ba = () => interopDefault(import('../pages/discord/index.vue' /* webpackChunkName: "pages/discord/index" */))
const _6ffe183d = () => interopDefault(import('../pages/Reddit/index.vue' /* webpackChunkName: "pages/Reddit/index" */))
const _6ae7aec6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CoinAccounts",
    component: _4c7bd936,
    name: "CoinAccounts"
  }, {
    path: "/CoinHome",
    component: _62b0116f,
    name: "CoinHome"
  }, {
    path: "/CoinPrices",
    component: _470551da,
    name: "CoinPrices"
  }, {
    path: "/CoinSettings",
    component: _fcc11d9a,
    name: "CoinSettings"
  }, {
    path: "/Components",
    component: _0f6f9cf5,
    name: "Components"
  }, {
    path: "/discord",
    component: _0315e4ba,
    name: "discord"
  }, {
    path: "/Reddit",
    component: _6ffe183d,
    name: "Reddit"
  }, {
    path: "/",
    component: _6ae7aec6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
