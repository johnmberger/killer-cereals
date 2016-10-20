// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'inventory',
      'cart',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.checkout'
    ]);

})();
