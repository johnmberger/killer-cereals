(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .filter('capitalize', function() {
      return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
      };
    });

  function appConfig() {}

  $('select').material_select();

})();
