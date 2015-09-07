
angular.module('MasterData')
.directive('topBarComp', function() {
  return {
    restrict: 'A',
    templateUrl: 'MasterData/partials/topBar/topBar-Comp.html',
    controller: "TopCtrl"
  };
});