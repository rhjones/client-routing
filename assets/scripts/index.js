'use strict';



$(() => {
  require('./router/index').initializeAndConfigureRouter();
  require('./router/events').registerPaths();
});
