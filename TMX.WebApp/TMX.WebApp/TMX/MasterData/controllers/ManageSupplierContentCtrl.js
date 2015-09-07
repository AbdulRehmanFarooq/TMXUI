
angular
    .module('MasterData')
    .controller('ManageSupplierContentCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $modal, $log, $window, sharedProperties) {


        sharedProperties.setProperty("Supplier Management");

        $scope.mainGridOptions = {
            dataSource: {
                data: [
                          { SupplierCode: "2105608-AN-0001-KHI123", SupplierName: "EXAMPLE", SupplierType: "GT", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { SupplierCode: "2105608-AN-0001-KHI", SupplierName: "EXAMPLE", SupplierType: "GT", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { SupplierCode: "2105608-AN-0001-KHI", SupplierName: "EXAMPLE", SupplierType: "GT", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { SupplierCode: "2105608-AN-0001-KHI", SupplierName: "EXAMPLE", SupplierType: "GT", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { SupplierCode: "2105608-AN-0001-KHI", SupplierName: "EXAMPLE", SupplierType: "GT", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { SupplierCode: "2105608-AN-0001-KHI", SupplierName: "EXAMPLE", SupplierType: "GT", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { SupplierCode: "2105608-AN-0001-KHI", SupplierName: "EXAMPLE", SupplierType: "GT", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { SupplierCode: "2105608-AN-0001-KHI", SupplierName: "EXAMPLE", SupplierType: "GT", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { SupplierCode: "2105608-AN-0001-KHI", SupplierName: "EXAMPLE", SupplierType: "GT", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" }
                    
                ],
                pageSize: 50
            },
            
            height: 500,
            filterable: true,
            columnMenu: true,
            groupable: true,
            sortable: true,
            resizable: true,
            pageable: {
                pageSizes: [2, 100, 200, 500],
                refresh: true,
                buttonCount: 5
            },
            columns:
            [
                {
                    field: "SupplierCode",
                    title: "Supplier Code",
                    width: 180,
                },
                            {
                                field: "SupplierName",
                                encoded: false,
                                title: "Supplier Name",
                                width: 180,

                            },
                            {
                                field: "SupplierType",
                                title: "Supplier Type",
                                width: 180,
                            },
                          
                             {
                                 field: "Status",
                                 title: "Status",
                                 width: 180,
                             },
                            {

                                field: "Edit",
                                title: "  ",
                                encoded: false,
                                width: 100,
                                filterable: false,
                                sortable: false,
                            },

            ],
            editable: "popup"
        };


        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;


        $scope.open = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'MasterData/partials/modalWindow/modalSupplierAdd.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

    })




