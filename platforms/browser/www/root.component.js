(function (angular) {
    'use strict';

    var root = {
        template: '<ui-view></ui-view>'
    };

    angular
        .module('root')
        .component('root', root);

}(window.angular));

