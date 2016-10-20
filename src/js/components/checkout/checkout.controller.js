(function() {

  'use strict';

  angular
    .module('myApp.components.checkout', [])
    .controller('checkoutController', checkoutController);

  checkoutController.$inject = ['$scope', 'cart'];

  function checkoutController($scope, inventory, cart) {
    /*jshint validthis: true */
    var vm = this;

    vm.cart = [];
  }

})();
