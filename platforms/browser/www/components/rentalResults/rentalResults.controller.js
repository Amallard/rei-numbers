(function (angular) {
    'use strict';

    RentalResultsController.$inject = ['$log'];
    function RentalResultsController($log) {
        var ctrl = this;
        ctrl.$onInit = onInit;

        function onInit() {
          var plot1 = $.jqplot('pie1', [
            [
              ['Mortgage',650],
              ['Insurance',80],
              ['Taxes',350],
              ['Property Management',100],
              ['CapEx',50],
              ['Vacancy',50]
            ]],{
              gridPadding: {top:50, bottom:50, left:0, right:0},
              seriesDefaults:{
                renderer:$.jqplot.PieRenderer,
                trendline:{ show:false },
                rendererOptions: { padding: 8, showDataLabels: true }
              },
              legend:{
                show:true,
                placement: 'outside',
                rendererOptions: {
                  numberRows: 6
                },
                location:'s',
                marginTop: '15px'
              },
              grid: {
                drawGridLines: true,
                gridLineColor: '#cccccc',
                background: '#efefef',
                borderColor: '#cccccc',
                borderWidth: 1.0,
                shadow: false,
                borderWidth: 0.0
              }
            });
        }

        ctrl.downloadPdf = function() {

          // this function here should create and open a PDF for a user to
          // save / download, email, message, etc.
          
          var doc = new jsPDF();

          doc.text('Hello world!', 20, 20);
          doc.save('a4.pdf');


        }
    }

    angular
        .module('components.rentalResults')
        .controller('RentalResultsController', RentalResultsController);

}(window.angular));
