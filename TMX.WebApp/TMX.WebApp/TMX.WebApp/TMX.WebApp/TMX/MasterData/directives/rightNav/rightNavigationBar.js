
angular.module('MasterData')
.directive('rightNavigationBar', function() {
  return {
    restrict: 'A',
    templateUrl: 'MasterData/partials/rightNav/rightNav.html',
    controller: "RightCtrl"
  };
});