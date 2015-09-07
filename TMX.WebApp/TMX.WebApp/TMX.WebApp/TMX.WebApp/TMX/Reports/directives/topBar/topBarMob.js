
angular.module('Reports')
.directive('topBarMob', function() {
  return {
    restrict: 'A',
    templateUrl: 'Reports/partials/topBar/topBar-Mob.html',
    controller: "TopCtrl"
  };
});