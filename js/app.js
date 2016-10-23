// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'inventory',
      'cart',
      'ngRoute',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.checkout',
      'myApp.components.splash'
    ]);

})();
