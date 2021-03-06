const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/vlad/Desktop/repos/syndicateGatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/vlad/Desktop/repos/syndicateGatsby/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/vlad/Desktop/repos/syndicateGatsby/src/pages/about.js"))),
  "component---src-pages-contacts-js": hot(preferDefault(require("/home/vlad/Desktop/repos/syndicateGatsby/src/pages/contacts.js"))),
  "component---src-pages-crypto-js": hot(preferDefault(require("/home/vlad/Desktop/repos/syndicateGatsby/src/pages/crypto.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/vlad/Desktop/repos/syndicateGatsby/src/pages/index.js"))),
  "component---src-pages-rules-js": hot(preferDefault(require("/home/vlad/Desktop/repos/syndicateGatsby/src/pages/rules.js")))
}

