// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-instaladores-js": () => import("../src/pages/instaladores.js" /* webpackChunkName: "component---src-pages-instaladores-js" */)
}

