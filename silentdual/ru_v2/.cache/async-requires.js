// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("./../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-установка-js": () => import("./../../src/pages/установка.js" /* webpackChunkName: "component---src-pages-установка-js" */)
}

