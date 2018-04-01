(function (angular) {
    'use strict';

    var rentalResults = {
        templateUrl: 'components/rentalResults/rentalResults.html',
        controller: 'RentalResultsController'
    };

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('rentalResults', {
                parent: 'app',
                url: 'rentalResults',
                component: 'rentalResults'
            });
    }

    angular
        .module('components.rentalResults')
        .component('rentalResults', rentalResults)
        .config(config);

}(window.angular));
