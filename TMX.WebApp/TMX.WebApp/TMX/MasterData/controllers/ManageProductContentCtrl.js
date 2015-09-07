
angular
    .module('MasterData')
    .controller('ManageProductContentCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $modal, $log, $window, sharedProperties) {


        sharedProperties.setProperty("Products Management");
        
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                  .toggle()
                  .then(function () {
                      $log.debug("toggle " + navID + " is done");

                  });
            }, 200);
            return debounceFn;
        }



        $scope.mainGridOptions = {
            dataSource: {
                data: [

                    { ProductCode: "84620", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "84621", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "84621", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "846222", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "846233", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "846244", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "846255", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "84666", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "84627", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "84620", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                    { ProductCode: "84620", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                   { ProductCode: "84620", ProductName: "NH Intensive Nourishing Cream 100 ml", ProductType: "NIVEA Hand", ProductClass: "Hand", Principal: "NIVEA", Weight: "1900 ", WeightUOM: "1900", PrimaryUOM: "PIECES", SecondaryUOM: "1", Status: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" }
                ],
                
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
                    field: "ProductCode",
                    width: 100
                },
                            {
                                field: "ProductName",
                                encoded: false,
                                width:200,
                                title: "ProductName"

                            },
                            {
                                field: "ProductType",
                                width: 100
                            },
                            {
                                field: "ProductClass",
                                width: 100,
                                title: "ProductClass",

                                //editor: "",
                               // template: "<input value='#= PositionID #' data-bind='value:PositionID' data-role='dropdownlist' data-source='options' data-text-field='ProductClass' data-value-field='value' />"
                                
                            },
                            {
                                field: "Principal",
                                width: 100,
                                title: "Principal",
                            },
                            {
                                field: "Weight",
                                title: "Weight",
                                width: 100
                            },
                            {
                                field: "WeightUOM",
                                width: 100,
                                title: "WeightUOM",

                            },
                             {
                                 field: "PrimaryUOM",
                                 width: 100,
                                 title: "PrimaryUOM",

                             },
                               {
                                   field: "SecondaryUOM",
                                   width: 100,
                                   title: "SecondaryUOM",

                               },
                                {
                                    field: "Status",
                                    width: 100,
                                    title: "Status",

                                },
                            {
                                field: "Edit",
                                title: "  ",
                                encoded: false,
                                width: 100,
                            },

            ],
            editable: "popup"
        };

        
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;


        $scope.open = function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'MasterData/partials/modalWindow/modalProductAdd.html',
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




