(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .filter('capitalize', function() {
      return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
      };
    })
    .filter('monetize', function() {
      return function(input) {
        input = input.toString();
        let length = input.length;
        return `$${input.substr(0, (length - 2))}.${input.substr((length - 2),length)}`;
      };
    })
    .filter('yesOrNo', function() {
      return function(input) {
        if (input) {
          return 'Yes';
        } else {
          return 'No';
        }
      };
    });

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/checkout', {
      templateUrl: 'js/components/checkout/checkout.view.html',
      controller: 'checkoutController',
      controllerAs: 'checkoutCtrl'
    })
    .otherwise('/');
  }

})();