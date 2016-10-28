'use strict';

// const Router5 = require('router5').default;
const router5 = require('router5');
const browserPlugin = require('router5/plugins/browser').default;
const loggerPlugin = require('router5').loggerPlugin;

const routes = [
  { name: 'index', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'projects', path: '/projects' },
  { name: 'talks', path: '/talks' },
];

const options = {
  defaultRoute: 'index',
};

const router = router5.createRouter(routes, options)
.usePlugin(loggerPlugin)
.usePlugin(browserPlugin({
  useHash: true,
  hashPrefix: '!',
}));

router.useMiddleware(require('./dom').transition);

module.exports = router;