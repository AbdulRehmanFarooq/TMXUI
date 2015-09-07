angular
    .module('Reports')
    .controller('TopCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil,  $log, sharedProperties) {
            $scope.Search=false;
            $scope.pageTitle=sharedProperties.getProperty();
            $scope.$watch(function () { return sharedProperties.getProperty(); }, function (newValue, oldValue) {
          	  if (newValue !== oldValue) $scope.pageTitle = newValue;
        	});
			
            $scope.toggleLeft = buildToggler('left');
			$scope.toggleRight = buildToggler('right');

			function buildToggler(navID) {
			          var debounceFn =  $mdUtil.debounce(function(){
			              $mdSidenav(navID)
			                .toggle()
			                .then(function () {
			                  $log.debug("toggle " + navID + " is done");
			                });
			            },200);
			            return debounceFn;
			};
    });