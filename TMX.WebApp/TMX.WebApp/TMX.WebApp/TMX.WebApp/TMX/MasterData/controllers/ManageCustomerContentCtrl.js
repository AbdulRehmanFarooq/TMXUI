
 angular
     .module('MasterData')
     .controller('ManageCustomerContentCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $modal,$log,$window, sharedProperties) {
    
     
      sharedProperties.setProperty("Customer Management");
     	
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
          }

          

     	 $scope.mainGridOptions = {
            dataSource:{
                data:[
                          { CustomerCode:"2105608-AN-0001-KHI",CustomerName:"<a    href=\"#CustomerManagement1\" ng-click=\"resizeleft();  toggleLeft(); toggleRight(); \" class=\"tablehyperlink\" hide-lg>Metro Store (AHI Rd)</a><span class=\"hide show-lg\">Metro Store (AHI Rd)</span>",CustomerType:"GT",CustomerClass:"SG",Distributor:"an Distributor",CustomerLocation:"Gulshan-e-Iqbal ",PopStatus:"Order",CreditStatus:"",CreditLimit:"",Edit:"  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>"},
                          { CustomerCode:"2106338-AN-0001-KHI",CustomerName:"<a   href=\"#CustomerManagement1\" ng-click=\"resizeleft(); toggleLeft(); toggleRight();\" class=\"tablehyperlink \" hide-lg >FRESH BAKERS</a><span class=\"hide show-lg\">FRESH BAKERS</span> ",CustomerType:"GT",CustomerClass:"SG",Distributor:"An Distributor",CustomerLocation:"Gulshan-e-Iqbal ",PopStatus:"Order",CreditStatus:"",CreditLimit:"",Edit:"  <a md-ink-ripple href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\" ><i class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" }
                   ],
                    pageSize:20
            },
            resizable:true,
            pageable:true,
            columns:
            [
                {
                                field: "CustomerCode",
                            },
                            {
                                field: "CustomerName",
                                encoded:false,
                                title: "Customer Name"

                            },
                            {
                                field: "CustomerType",
                            },
                            {
                                field: "CustomerClass",
                                title: "CustomerClass",
                            },
                            {
                                field: "Distributor",
                                title: "Distributor",
                            },
                            {
                                field: "CustomerLocation",
                                title: "CustomerLocation",
                                width: 140
                            },
                            {
                                field: "PopStatus",
                                title: "PopStatus",

                            },
                            {
                                field: "Edit",
                                title:"  ",
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
                    templateUrl: 'myModalContent.html',
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

    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

                $scope.items = items;
                $scope.selected = {
                  item: $scope.items[0]
                };

                $scope.ok = function () {
                  $modalInstance.close($scope.selected.item);
                };

                $scope.cancel = function () {
                  $modalInstance.dismiss('cancel');
                };
              });


