(function() {
  'use strict';

  angular
    .module('myApp.components.main')
    .directive('mtItem', ItemDirective);

  ItemDirective.$inject = [];

  function ItemDirective() {
    return {
      restrict: 'E',
      templateUrl: 'js/components/main/main.view.html'
    };
  }

}());
