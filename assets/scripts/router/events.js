'use strict';

const router = require('./index').router;
const ui = require('./ui');

// rootNode gives us access to array of routes from index.js
// this is the array we're passing to Router5 when we create the router
// router is a graph of nodes & transitions
// rootNode is root node of that graph
const routes = router.rootNode.children.map((route) => {
  return route.name;
});

const registerPaths = () => {
  routes.forEach((route) => {
    $(`a[href="#${route}"]`).on('click', (event) => {
      event.preventDefault();
      router.navigate(route);
    });
  });
};

module.exports = {
  registerPaths,
};
