
angular
    .module('MasterData')
    .controller('ManageCompanyContentCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $modal, $log, $window, sharedProperties) {


        sharedProperties.setProperty("Company Management");

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


        $scope.alertfunc = function (Data) {
          $log.debug()
        };
        $scope.mainGridOptions = {
            dataSource: {
                data: [
                         { CompanyCode: "EPPL-001", CompanyName: "EasternProduct(pvt)LTD", CompanyType: "Private", CompanyStatus: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                         { CompanyCode: "EPPL-001", CompanyName: "WesternProduct(pvt)LTD",CompanyType: "Private", CompanyStatus: "Active", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" }
                ],
                pageSize: 20
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
                    field: "CompanyCode",
                    title: "Company Code",
                    width: 100
                },
                {
                    field: "CompanyName",
                    title: "Company Name",
                    width:140
                },
                {
                    field: "CompanyType",
                    title: "Company Type",
                    width:100
                },
                {
                    field: "CompanyStatus",
                    title: "Company Status",
                    width:100
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


    

        $scope.animationsEnabled = true;

        $scope.open= function (size) {

            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'MasterData/partials/modalWindow/modalCompanyAdd.html',
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



