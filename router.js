import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _559d55d9 = () => interopDefault(import('..\\pages\\app-servicos-web\\index.vue' /* webpackChunkName: "pages/app-servicos-web/index" */))
const _ec33cb94 = () => interopDefault(import('..\\pages\\case-studies\\index.vue' /* webpackChunkName: "pages/case-studies/index" */))
const _4cc21854 = () => interopDefault(import('..\\pages\\curso-elearning-amedida\\index.vue' /* webpackChunkName: "pages/curso-elearning-amedida/index" */))
const _0e913d63 = () => interopDefault(import('..\\pages\\fale-connosco.vue' /* webpackChunkName: "pages/fale-connosco" */))
const _379d50d6 = () => interopDefault(import('..\\pages\\formacao-certificada\\index.vue' /* webpackChunkName: "pages/formacao-certificada/index" */))
const _38b62456 = () => interopDefault(import('..\\pages\\plataformas-elearning\\index.vue' /* webpackChunkName: "pages/plataformas-elearning/index" */))
const _89ef9f28 = () => interopDefault(import('..\\pages\\sobre-nos.vue' /* webpackChunkName: "pages/sobre-nos" */))
const _a32950d8 = () => interopDefault(import('..\\pages\\softwares-academicos\\index.vue' /* webpackChunkName: "pages/softwares-academicos/index" */))
const _346fcf3c = () => interopDefault(import('..\\pages\\app-servicos-web\\configuracao-avancada.vue' /* webpackChunkName: "pages/app-servicos-web/configuracao-avancada" */))
const _3780bb02 = () => interopDefault(import('..\\pages\\app-servicos-web\\elibrary.vue' /* webpackChunkName: "pages/app-servicos-web/elibrary" */))
const _1e2e0310 = () => interopDefault(import('..\\pages\\app-servicos-web\\integracao-migracao-dados.vue' /* webpackChunkName: "pages/app-servicos-web/integracao-migracao-dados" */))
const _2e4a0bcb = () => interopDefault(import('..\\pages\\case-studies\\CaseStudieController.js' /* webpackChunkName: "pages/case-studies/CaseStudieController" */))
const _cff3595a = () => interopDefault(import('..\\pages\\curso-elearning-amedida\\elearning-personalizado.vue' /* webpackChunkName: "pages/curso-elearning-amedida/elearning-personalizado" */))
const _7258a7a4 = () => interopDefault(import('..\\pages\\curso-elearning-amedida\\motion-gamification.vue' /* webpackChunkName: "pages/curso-elearning-amedida/motion-gamification" */))
const _b7ac0ef6 = () => interopDefault(import('..\\pages\\formacao-certificada\\consultoria-pedagogica-formacao.vue' /* webpackChunkName: "pages/formacao-certificada/consultoria-pedagogica-formacao" */))
const _9d4f6c8c = () => interopDefault(import('..\\pages\\formacao-certificada\\cursos-elearning-catalogo.vue' /* webpackChunkName: "pages/formacao-certificada/cursos-elearning-catalogo" */))
const _d26a086e = () => interopDefault(import('..\\pages\\formacao-certificada\\educacao-executiva-cursos-udemy.vue' /* webpackChunkName: "pages/formacao-certificada/educacao-executiva-cursos-udemy" */))
const _83783902 = () => interopDefault(import('..\\pages\\plataformas-elearning\\hosting-gerido.vue' /* webpackChunkName: "pages/plataformas-elearning/hosting-gerido" */))
const _2196753d = () => interopDefault(import('..\\pages\\plataformas-elearning\\plataformas-open-source.vue' /* webpackChunkName: "pages/plataformas-elearning/plataformas-open-source" */))
const _6499b730 = () => interopDefault(import('..\\pages\\plataformas-elearning\\plataformas-totara.vue' /* webpackChunkName: "pages/plataformas-elearning/plataformas-totara" */))
const _d749a956 = () => interopDefault(import('..\\pages\\softwares-academicos\\anti-plagio.vue' /* webpackChunkName: "pages/softwares-academicos/anti-plagio" */))
const _f0d4a470 = () => interopDefault(import('..\\pages\\softwares-academicos\\e-schooling.vue' /* webpackChunkName: "pages/softwares-academicos/e-schooling" */))
const _1f1e7930 = () => interopDefault(import('..\\pages\\case-studies\\_projeto.vue' /* webpackChunkName: "pages/case-studies/_projeto" */))
const _09046600 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/app-servicos-web",
    component: _559d55d9,
    name: "app-servicos-web"
  }, {
    path: "/case-studies",
    component: _ec33cb94,
    name: "case-studies"
  }, {
    path: "/curso-elearning-amedida",
    component: _4cc21854,
    name: "curso-elearning-amedida"
  }, {
    path: "/fale-connosco",
    component: _0e913d63,
    name: "fale-connosco"
  }, {
    path: "/formacao-certificada",
    component: _379d50d6,
    name: "formacao-certificada"
  }, {
    path: "/plataformas-elearning",
    component: _38b62456,
    name: "plataformas-elearning"
  }, {
    path: "/sobre-nos",
    component: _89ef9f28,
    name: "sobre-nos"
  }, {
    path: "/softwares-academicos",
    component: _a32950d8,
    name: "softwares-academicos"
  }, {
    path: "/app-servicos-web/configuracao-avancada",
    component: _346fcf3c,
    name: "app-servicos-web-configuracao-avancada"
  }, {
    path: "/app-servicos-web/elibrary",
    component: _3780bb02,
    name: "app-servicos-web-elibrary"
  }, {
    path: "/app-servicos-web/integracao-migracao-dados",
    component: _1e2e0310,
    name: "app-servicos-web-integracao-migracao-dados"
  }, {
    path: "/case-studies/CaseStudieController",
    component: _2e4a0bcb,
    name: "case-studies-CaseStudieController"
  }, {
    path: "/curso-elearning-amedida/elearning-personalizado",
    component: _cff3595a,
    name: "curso-elearning-amedida-elearning-personalizado"
  }, {
    path: "/curso-elearning-amedida/motion-gamification",
    component: _7258a7a4,
    name: "curso-elearning-amedida-motion-gamification"
  }, {
    path: "/formacao-certificada/consultoria-pedagogica-formacao",
    component: _b7ac0ef6,
    name: "formacao-certificada-consultoria-pedagogica-formacao"
  }, {
    path: "/formacao-certificada/cursos-elearning-catalogo",
    component: _9d4f6c8c,
    name: "formacao-certificada-cursos-elearning-catalogo"
  }, {
    path: "/formacao-certificada/educacao-executiva-cursos-udemy",
    component: _d26a086e,
    name: "formacao-certificada-educacao-executiva-cursos-udemy"
  }, {
    path: "/plataformas-elearning/hosting-gerido",
    component: _83783902,
    name: "plataformas-elearning-hosting-gerido"
  }, {
    path: "/plataformas-elearning/plataformas-open-source",
    component: _2196753d,
    name: "plataformas-elearning-plataformas-open-source"
  }, {
    path: "/plataformas-elearning/plataformas-totara",
    component: _6499b730,
    name: "plataformas-elearning-plataformas-totara"
  }, {
    path: "/softwares-academicos/anti-plagio",
    component: _d749a956,
    name: "softwares-academicos-anti-plagio"
  }, {
    path: "/softwares-academicos/e-schooling",
    component: _f0d4a470,
    name: "softwares-academicos-e-schooling"
  }, {
    path: "/case-studies/:projeto?",
    component: _1f1e7930,
    name: "case-studies-projeto"
  }, {
    path: "/",
    component: _09046600,
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
