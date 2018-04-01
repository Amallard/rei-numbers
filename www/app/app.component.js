(function (angular) {
    'use strict';

    var app = {
        templateUrl: 'app/app.html',
        controller: 'AppController',
        bindings: {
        }
    };

   config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                abstract: true,
                component: 'app'
            });
    }

    angular
        .module('app')
        .component('app', app)
        .config(config);

}(window.angular));
