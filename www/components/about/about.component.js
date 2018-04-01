(function (angular) {
    'use strict';

    var about = {
        templateUrl: 'components/about/about.html',
        controller: 'AboutController'
    };

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('about', {
                parent: 'app',
                url: 'about',
                component: 'about'
            });
    }

    angular
        .module('components.about')
        .component('about', about)
        .config(config);

}(window.angular));
