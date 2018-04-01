(function (angular) {
    'use strict';

    SavedController.$inject = ['$log'];
    function SavedController($log) {
        var ctrl = this;
        ctrl.$onInit = onInit;

        function onInit() {
            $log.debug(ctrl);
            console.log(ctrl.currentUser);
        }
    }

    angular
        .module('components.saved')
        .controller('SavedController', SavedController);

}(window.angular));
