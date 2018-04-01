(function (angular) {
    'use strict';

    FlipController.$inject = ['$log'];
    function FlipController($log) {
        var ctrl = this;
        ctrl.$onInit = onInit;

        function onInit() {

        }
    }

    angular
        .module('components.flip')
        .controller('FlipController', FlipController);

}(window.angular));
