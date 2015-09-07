
angular.module('Reports')
.directive('topBarComp', function() {
  return {
    restrict: 'A',
    templateUrl: 'Reports/partials/topBar/topBar-Comp.html',
    controller: "TopCtrl"
  };
});