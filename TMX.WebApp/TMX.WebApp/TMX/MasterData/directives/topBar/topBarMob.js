
angular.module('MasterData')
.directive('topBarMob', function() {
  return {
    restrict: 'A',
    templateUrl: 'MasterData/partials/topBar/topBar-Mob.html',
    controller: "TopCtrl"
  };
});