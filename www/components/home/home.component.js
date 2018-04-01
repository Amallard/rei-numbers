(function (angular) {
    'use strict';

    var home = {
        templateUrl: 'components/home/home.html',
        controller: 'HomeController',
        bindings: {

		    }
    };

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'app',
                url: 'home',
                component: 'home'
            });
    }

    angular
        .module('components.home')
        .component('home', home)
        .config(config);

}(window.angular));
