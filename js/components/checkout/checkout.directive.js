(function() {
  'use strict';

  angular
    .module('myApp.components.checkout')
    .directive('mtCheckout', CheckoutDirective);

  CheckoutDirective.$inject = [];

  function CheckoutDirective() {
    return {
      restrict: 'E',
      templateUrl: 'js/components/checkout/checkout.view.html'
    };
  }

}());
