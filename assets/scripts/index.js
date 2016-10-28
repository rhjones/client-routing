'use strict';

$(() => {
  require('./router/index').start();
  require('./router/events').registerPaths();
});
