(function (angular) {
    'use strict';

    AboutController.$inject = ['$log'];
    function AboutController($log) {
        var ctrl = this;
        ctrl.$onInit = onInit;

        function onInit() {


        }
    }

    angular
        .module('components.about')
        .controller('AboutController', AboutController);

}(window.angular));
