import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f7a16a1 = () => interopDefault(import('../pages/CoinAccounts/index.vue' /* webpackChunkName: "pages/CoinAccounts/index" */))
const _4ea3bc5a = () => interopDefault(import('../pages/CoinHome/index.vue' /* webpackChunkName: "pages/CoinHome/index" */))
const _04b9ee05 = () => interopDefault(import('../pages/CoinPrices/index.vue' /* webpackChunkName: "pages/CoinPrices/index" */))
const _b6c4a2c4 = () => interopDefault(import('../pages/CoinSettings/index.vue' /* webpackChunkName: "pages/CoinSettings/index" */))
const _65b78dc0 = () => interopDefault(import('../pages/Components/index.vue' /* webpackChunkName: "pages/Components/index" */))
const _a98a4d50 = () => interopDefault(import('../pages/discord/index.vue' /* webpackChunkName: "pages/discord/index" */))
const _6fb4fc30 = () => interopDefault(import('../pages/Reddit/index.vue' /* webpackChunkName: "pages/Reddit/index" */))
const _439aff7b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CoinAccounts",
    component: _6f7a16a1,
    name: "CoinAccounts"
  }, {
    path: "/CoinHome",
    component: _4ea3bc5a,
    name: "CoinHome"
  }, {
    path: "/CoinPrices",
    component: _04b9ee05,
    name: "CoinPrices"
  }, {
    path: "/CoinSettings",
    component: _b6c4a2c4,
    name: "CoinSettings"
  }, {
    path: "/Components",
    component: _65b78dc0,
    name: "Components"
  }, {
    path: "/discord",
    component: _a98a4d50,
    name: "discord"
  }, {
    path: "/Reddit",
    component: _6fb4fc30,
    name: "Reddit"
  }, {
    path: "/",
    component: _439aff7b,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
