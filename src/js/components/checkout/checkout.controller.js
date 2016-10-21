(function() {

  'use strict';

  angular
    .module('myApp.components.checkout', [])
    .controller('checkoutController', checkoutController);

  checkoutController.$inject = ['cart'];

  function checkoutController(cart) {
    /*jshint validthis: true */
    var vm = this;

    vm.cart = cart.items;
    vm.subtotal = 0;

    vm.addQuantity = (item) => vm.cart[vm.cart.indexOf(item)].quantity++;

    vm.lowerQuantity = (item) => {
      if (item.quantity <= 1) {
        vm.remove(item);
      } else {
        vm.cart[vm.cart.indexOf(item)].quantity--;
      }
    };

    vm.remove = (item) => {
      vm.cart.splice([vm.cart.indexOf(item)], 1);
    };

    vm.getSubtotal = function() {
      let runningTotal = 0;
      vm.cart.forEach(item => runningTotal += (item.quantity * item.price));
      vm.subtotal = runningTotal;
    };

    vm.getSubtotal();

  }

})();
