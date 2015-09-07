
angular
    .module('MasterData')
    .controller('ManageSalesTargetContentCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $modal, $log, $window, sharedProperties) {


        sharedProperties.setProperty("Sales Target Management");

        $scope.mainGridOptions = {
            dataSource: {
                data: [
                          { Distributor: "12105608", User: "EXAMPLE1", ProductBrand: "GT", Location: "Order", Type: "Order", StartDate: "Order", Amount: "Order", Quantity: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { Distributor: "2105608", User: "EXAMPLE2", ProductBrand: "GT", Location: "Order", Type: "Order", StartDate: "Order", Amount: "Order", Quantity: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { Distributor: "2105608", User: "EXAMPLE3", ProductBrand: "GT", Location: "Order", Type: "Order", StartDate: "Order", Amount: "Order", Quantity: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { Distributor: "2105608", User: "EXAMPLE4", ProductBrand: "GT", Location: "Order", Type: "Order", StartDate: "Order", Amount: "Order", Quantity: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { Distributor: "2105608", User: "EXAMPLE5", ProductBrand: "GT", Location: "Order", Type: "Order", StartDate: "Order", Amount: "Order", Quantity: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { Distributor: "2105608", User: "EXAMPLE6", ProductBrand: "GT", Location: "Order", Type: "Order", StartDate: "Order", Amount: "Order", Quantity: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { Distributor: "2105608", User: "EXAMPLE7", ProductBrand: "GT", Location: "Order", Type: "Order", StartDate: "Order", Amount: "Order", Quantity: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { Distributor: "2105608", User: "EXAMPLE8", ProductBrand: "GT", Location: "Order", Type: "Order", StartDate: "Order", Amount: "Order", Quantity: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" }
                        
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
                    field: "Distributor",
                    title: "Distributor",
                    width: 180,
                },
                            {
                                field: "User",
                                encoded: false,
                                title: "User",
                                width: 180,

                            },
                            {
                                field: "ProductBrand",
                                title: "Product Brand",
                                width: 180,
                            },

                             {
                                 field: "Location",
                                 title: "Location",
                                 width: 180,
                             },
                              {
                                  field: "Type",
                                  title: "Type",
                                  width: 180,
                              },
                               {
                                   field: "StartDate",
                                   title: "Start Date",
                                   width: 180,
                               },
                                {
                                    field: "Amount",
                                    title: "Amount",
                                    width: 180,
                                },
                            {
                                field: "Quantity",
                                title: "Quantity",
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
                templateUrl: 'MasterData/partials/modalWindow/modalSalesTargetAdd.html',
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




