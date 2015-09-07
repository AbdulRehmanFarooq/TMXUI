angular
    .module('MasterData')
    .controller('ModalInstancePricelistCtrl', function ($scope, $modalInstance, items) {

        $scope.mainGridOptions2 = {
            toolbar: [
                 { name: "create", text: "Add New Record" }
            ],
            
            columnMenu: true,
            resizable: true,
            pageable: {
                pageSize: 50,
                pageSizes: [5,10,20],
                refresh: true,
                buttonCount: 1
            },
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