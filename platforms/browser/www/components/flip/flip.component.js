(function (angular) {
    'use strict';

    var flip = {
        templateUrl: 'components/flip/flip.html',
        controller: 'FlipController'
    };

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('flip', {
                parent: 'app',
                url: 'flip',
                component: 'flip'
            });
    }

    angular
        .module('components.flip')
        .component('flip', flip)
        .config(config);

}(window.angular));
