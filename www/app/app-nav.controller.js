(function (angular) {
    'use strict';


    AppNavController.$inject = ['$log','$state', '$transitions'];
    function AppNavController($log, $state, $transitions) {
        var ctrl = this;
        ctrl.$onInit = onInit;
        ctrl.linkTo = linkTo;

        function onInit() {
          ctrl.linkActive='home';
          ctrl.navTitle = 'REI Numbers';
        }

        function linkTo(page) {
          $state.go(page);
          ctrl.linkActive=page;
        }

        $transitions.onSuccess({}, function(transition) {
          switch (transition.to().name) {
            case 'home': ctrl.navTitle = 'REI Numbers';break;
            case 'rental': ctrl.navTitle = 'Rental Property Calc';break;
            case 'flip': ctrl.navTitle = 'Fix and Flip Calc';break;
            case 'saved': ctrl.navTitle = 'My Saved Reports';break;
            case 'about': ctrl.navTitle = 'About REI Numbers';break;
            default : ctrl.navTitle = 'REI Numbers';
          }
        });
    }

    angular
        .module('app')
        .controller('AppNavController', AppNavController);

}(window.angular));
