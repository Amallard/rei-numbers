(function (angular) {
    'use strict';

    var saved = {
        templateUrl: 'components/saved/saved.html',
        controller: 'SavedController'
    };

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('saved', {
                parent: 'app',
                url: 'saved',
                component: 'saved'
            });
    }

    angular
        .module('components.saved')
        .component('saved', saved)
        .config(config);

}(window.angular));
