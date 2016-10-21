(function() {
  'use strict';

  angular
    .module('cart', [])
    .service('cart', [Cart]);

  function Cart() {
    var vm = this;
    vm.items = [];
    vm.quantity = 0;
    vm.showCheckout = false;
  }

}());
