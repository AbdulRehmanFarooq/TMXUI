angular
    .module('MasterData')
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

        $scope.mainGridOptions2 = {
            toolbar: [
                 { name: "create", text:"Add New Record" }
            ],
            columns: [
              { field: "Product" },
              { field: "Price" }
            ],
            dataSource: {
                schema: {
                    model: { id: "id" }
                }
            },
            editable: true
        };

   

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});