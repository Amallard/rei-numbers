(function (angular) {
    'use strict';


    var appNav = {
        templateUrl: 'app/app-nav.html',
        controller: 'AppNavController',
        bindings: {

        }
    };

    angular
        .module('app')
        .component('appNav', appNav);

}(window.angular));
