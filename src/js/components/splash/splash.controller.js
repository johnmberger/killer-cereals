(function() {

  'use strict';

  angular
    .module('myApp.components.splash', [])
    .controller('splashController', splashController);

  splashController.$inject = ['inventory'];

  function splashController(inventory) {
    /*jshint validthis: true */
    var vm = this;

    this.inventory = inventory.items;

  }

})();
