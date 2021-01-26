// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-installation-js": () => import("../src/pages/installation.js" /* webpackChunkName: "component---src-pages-installation-js" */)
}

