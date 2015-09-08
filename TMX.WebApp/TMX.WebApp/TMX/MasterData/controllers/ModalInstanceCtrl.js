angular
    .module('MasterData')
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

 
   

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});