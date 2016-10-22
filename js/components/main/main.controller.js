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
    vm.priceSort = '';

    vm.inventory = inventory.items;
    vm.cart = cart.items;
    vm.cartCount = cart.quantity;
    vm.categories = inventory.categories;

    /* jshint ignore:start */
    vm.addToCart = (item, quantity) => {
      if (item.inStock) {
        if (cart.items.length) {
          for (var i = 0; i < cart.items.length; i++) {
            if (cart.items[i]["_id"] === item["_id"]) {
              Materialize.toast('Quantity Updated!', 3000);
              return cart.items[i].quantity += quantity;
            }
          }
        }
        Materialize.toast('Added to cart!', 3000);
        item.quantity = quantity;
        cart.items.push(item);
      } else {
        console.log("item not available!");
      }
    };
    /* jshint ignore:end */
  }

})();
