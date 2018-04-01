(function (angular) {
    'use strict';

    var PAGES = [
      {name: 'Details', step: 1, active: true},
      {name: 'Expenses', step: 2, active: false},
      {name: 'Revenue', step: 3, active: false},
      {name: 'Results', step: 4, active: false}
    ];

    RentalController.$inject = ['$log', '$window', '$state'];
    function RentalController($log, $window, $state) {
        var ctrl = this;
        ctrl.$onInit = onInit;
        ctrl.nextPage = nextPage;
        ctrl.getBreadcrumbs = getBreadcrumbs;


        function onInit() {
          ctrl.currentStep=1;
          ctrl.typeOfPurchase='loan';
        }

        function getBreadcrumbs() {
          return PAGES.filter(page => page.active);
        }

        function nextPage() {
          console.log(ctrl.typeOfPurchase);
          if (ctrl.currentStep < 3) {
            PAGES[ctrl.currentStep].active = true;
            ctrl.currentStep+=1;
            $window.scrollTo(0, 0);
          } else {
            $state.go('rentalResults');
          }
        }
    }

    angular
        .module('components.rental')
        .controller('RentalController', RentalController);

}(window.angular));
