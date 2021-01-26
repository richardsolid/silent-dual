const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lotgallegosantiago/Documents/soler-palau/silentdual/ru_v2/src/pages/index.js"))),
  "component---src-pages-установка-js": hot(preferDefault(require("/Users/lotgallegosantiago/Documents/soler-palau/silentdual/ru_v2/src/pages/установка.js")))
}

