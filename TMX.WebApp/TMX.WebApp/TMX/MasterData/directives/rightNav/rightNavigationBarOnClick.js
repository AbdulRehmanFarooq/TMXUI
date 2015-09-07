
angular.module('MasterData')
.directive('rightNavigationBarOnClick', function() {
  return {
    restrict: 'A',
    templateUrl: 'MasterData/partials/rightNav/rightNav-onClick.html',
    controller: "RightCtrl"
  };
});