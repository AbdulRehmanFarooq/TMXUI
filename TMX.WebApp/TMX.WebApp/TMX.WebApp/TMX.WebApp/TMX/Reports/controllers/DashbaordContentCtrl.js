
angular
    .module('Reports')
    .controller('DashboardContentCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil,  $log, sharedProperties) {
         sharedProperties.setProperty("Dashboard");
    });