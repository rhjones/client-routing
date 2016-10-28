'use strict';

const Router5 = require('router5').default;
const loggerPlugin = require('router5').loggerPlugin;

const routes = [
  { name: 'index', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'projects', path: '/projects' },
  { name: 'talks', path: '/talks' },
];

const options = {
  useHash: true,
  hashPrefix: '!',
  defaultRoute: 'index',
};

const router = new Router5(routes, options)
.usePlugin(loggerPlugin);

const initializeAndConfigureRouter = () => {
  // useMiddleware should only be called once in a single app
  router.useMiddleware(require('./dom').transition);
  router.start();
};

module.exports = {
  router,
  initializeAndConfigureRouter,
};
