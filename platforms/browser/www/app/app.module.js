(function (angular) {
    'use strict';

    angular
        .module('app', [
            'ui.router'
        ])
        .config(config)
        .run(run);

    config.$inject = ['$urlRouterProvider', '$uiRouterProvider'];
    function config($urlRouterProvider, $uiRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        // $locationProvider.html5Mode(true);
        // $uiRouterProvider.trace.enable("TRANSITION");
        // $uiRouterProvider.trace.enable("UIVIEW");
    }

    run.$inject = ['$rootScope'];
    function run($rootScope) {
        $rootScope.$on("$stateChangeError", console.log.bind(console));
    }

}(window.angular));

