(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'inventory', 'cart'];

  function mainController($scope, inventory, cart) {
    /*jshint validthis: true */
    var vm = this;
    vm.searchCategory = '';
    vm.searchName = '';
    // vm.categories = inventory.items.forEach((item) => {
    //   vm.categories.concat(item.categories);
    // });;

    vm.inventory = inventory.items;
    vm.cart = cart.items;
    vm.cartCount = cart.quantity;

    vm.addToCart = (item, quantity) => {
      if (item.inStock) {
        if (quantity === 1) {
          item.quantity = 1;
        } else if (quantity > 1) {
          item.quantity = quantity;
        }
        cart.items.push(item);
      } else {
        console.log('this item is out of stock!');
      }
      cart.count();
    };
  }

})();
