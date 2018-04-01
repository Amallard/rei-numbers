(function (angular) {
    'use strict';

    HomeController.$inject = ['$log', '$state'];
    function HomeController($log, $state) {
        var ctrl = this;
        ctrl.$onInit = onInit;
        ctrl.linkTo = linkTo;


        function onInit() {

        }

        function linkTo(page) {
          $state.go(page);
        }
    }

    angular
        .module('components.home')
        .controller('HomeController', HomeController);

}(window.angular));
