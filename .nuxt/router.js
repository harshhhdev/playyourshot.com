import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _15d7cb72 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _36d3a1a6 = () => interopDefault(import('../pages/beta.vue' /* webpackChunkName: "pages/beta" */))
const _5469c6ce = () => interopDefault(import('../pages/key.vue' /* webpackChunkName: "pages/key" */))
const _14cbf50c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _15d7cb72,
    name: "about"
  }, {
    path: "/beta",
    component: _36d3a1a6,
    name: "beta"
  }, {
    path: "/key",
    component: _5469c6ce,
    name: "key"
  }, {
    path: "/",
    component: _14cbf50c,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
