(function (angular) {
    'use strict';

    AppController.$inject = ['$log'];
    function AppController($log) {
        var ctrl = this;
        ctrl.$onInit = onInit;

        function onInit() {
          ctrl.navTitle = 'Hello';
      }
    }

    angular
        .module('app')
        .controller('AppController', AppController);

}(window.angular));
