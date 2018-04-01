(function (angular) {
    'use strict';

    var rental = {
        templateUrl: 'components/rental/rental.html',
        controller: 'RentalController'
    };

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('rental', {
                parent: 'app',
                url: 'rental',
                component: 'rental'
            });
    }

    angular
        .module('components.rental')
        .component('rental', rental)
        .config(config);

}(window.angular));
