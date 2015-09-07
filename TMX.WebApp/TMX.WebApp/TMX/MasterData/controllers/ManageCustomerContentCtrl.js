
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
                          { CustomerCode: "2105608-AN-0001-KHI", CustomerName: "<a    href=\"#CustomerManagement1\" ng-click=\"resizeleft();  toggleLeft(); toggleRight(); \" class=\"tablehyperlink\" hide-lg>Metro Store (AHI Rd)</a><span class=\"hide show-lg\">Metro Store (AHI Rd)</span>", CustomerType: "GT", CustomerClass: "SG", Distributor: "an Distributor", CustomerLocation: "Gulshan-e-Iqbal ", CreditStatus: "", CreditLimit: "", OutstandingCashMemo: "", OutstandingAmount: "", PopStatus: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { CustomerCode: "2106338-AN-0001-KHI", CustomerName: "<a   href=\"#CustomerManagement1\" ng-click=\"resizeleft(); toggleLeft(); toggleRight();\" class=\"tablehyperlink \" hide-lg >FRESH BAKERS</a><span class=\"hide show-lg\">FRESH BAKERS</span> ", CustomerType: "GT", CustomerClass: "SG", Distributor: "An Distributor", CustomerLocation: "Gulshan-e-Iqbal ", CreditStatus: "", CreditLimit: "", OutstandingCashMemo: "", OutstandingAmount: "", PopStatus: "Order", Status: "Order", Edit: "  <a md-ink-ripple href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\" ><i class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { CustomerCode: "2105608-AN-0001-KHI", CustomerName: "<a    href=\"#CustomerManagement1\" ng-click=\"resizeleft();  toggleLeft(); toggleRight(); \" class=\"tablehyperlink\" hide-lg>ABC</a><span class=\"hide show-lg\">ABC</span>", CustomerType: "GT", CustomerClass: "SG", Distributor: "an Distributor", CustomerLocation: "Gulshan-e-Iqbal ", CreditStatus: "", CreditLimit: "", OutstandingCashMemo: "", OutstandingAmount: "", PopStatus: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { CustomerCode: "2105608-AN-0001-KHI", CustomerName: "<a    href=\"#CustomerManagement1\" ng-click=\"resizeleft();  toggleLeft(); toggleRight(); \" class=\"tablehyperlink\" hide-lg>DEF</a><span class=\"hide show-lg\">DEF</span>", CustomerType: "GT", CustomerClass: "SG", Distributor: "an Distributor", CustomerLocation: "Gulshan-e-Iqbal ", CreditStatus: "", CreditLimit: "", OutstandingCashMemo: "", OutstandingAmount: "", PopStatus: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { CustomerCode: "2105608-AN-0001-KHI", CustomerName: "<a    href=\"#CustomerManagement1\" ng-click=\"resizeleft();  toggleLeft(); toggleRight(); \" class=\"tablehyperlink\" hide-lg>GHI</a><span class=\"hide show-lg\">GHI</span>", CustomerType: "GT", CustomerClass: "SG", Distributor: "an Distributor", CustomerLocation: "Gulshan-e-Iqbal ", CreditStatus: "", CreditLimit: "", OutstandingCashMemo: "", OutstandingAmount: "", PopStatus: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { CustomerCode: "2105608-AN-0001-KHI", CustomerName: "<a    href=\"#CustomerManagement1\" ng-click=\"resizeleft();  toggleLeft(); toggleRight(); \" class=\"tablehyperlink\" hide-lg>JKL </a><span class=\"hide show-lg\">JKL</span>", CustomerType: "GT", CustomerClass: "SG", Distributor: "an Distributor", CustomerLocation: "Gulshan-e-Iqbal ", CreditStatus: "", CreditLimit: "", OutstandingCashMemo: "", OutstandingAmount: "", PopStatus: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { CustomerCode: "2105608-AN-0001-KHI", CustomerName: "<a    href=\"#CustomerManagement1\" ng-click=\"resizeleft();  toggleLeft(); toggleRight(); \" class=\"tablehyperlink\" hide-lg>MNO</a><span class=\"hide show-lg\">MNO</span>", CustomerType: "GT", CustomerClass: "SG", Distributor: "an Distributor", CustomerLocation: "Gulshan-e-Iqbal ", CreditStatus: "", CreditLimit: "", OutstandingCashMemo: "", OutstandingAmount: "", PopStatus: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { CustomerCode: "2105608-AN-0001-KHI", CustomerName: "<a    href=\"#CustomerManagement1\" ng-click=\"resizeleft();  toggleLeft(); toggleRight(); \" class=\"tablehyperlink\" hide-lg>PQR</a><span class=\"hide show-lg\">PQR</span>", CustomerType: "GT", CustomerClass: "SG", Distributor: "an Distributor", CustomerLocation: "Gulshan-e-Iqbal ", CreditStatus: "", CreditLimit: "", OutstandingCashMemo: "", OutstandingAmount: "", PopStatus: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
                          { CustomerCode: "2105608-AN-0001-KHI", CustomerName: "<a    href=\"#CustomerManagement1\" ng-click=\"resizeleft();  toggleLeft(); toggleRight(); \" class=\"tablehyperlink\" hide-lg>STU</a><span class=\"hide show-lg\">STU</span>", CustomerType: "GT", CustomerClass: "SG", Distributor: "an Distributor", CustomerLocation: "Gulshan-e-Iqbal ", CreditStatus: "", CreditLimit: "", OutstandingCashMemo: "", OutstandingAmount: "", PopStatus: "Order", Status: "Order", Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" }
                   ],
                    pageSize:50
            },
            height: 500,
            filterable: true,
            columnMenu: true,
            groupable: true,
            sortable: true,
            resizable:true,
            pageable: {
                pageSizes: [2, 100, 200, 500],
                refresh: true,
                buttonCount: 5
            },
            columns:
            [
                {
                    field: "CustomerCode",
                    title: "Customer Code",
                    width: 180,
                            },
                            {
                                field: "CustomerName",
                                encoded:false,
                                title: "Customer Name",
                                width: 180,

                            },
                            {
                                field: "CustomerType",
                                title: "Customer Type",
                                width: 180,
                            },
                            {
                                field: "CustomerClass",
                                title: "Customer Class",
                                width: 180,
                            },
                            {
                                field: "Distributor",
                                title: "Distributor",
                                width: 180,
                            },
                            {
                                field: "CustomerLocation",
                                title: "Customer Location",
                                width: 180
                            },
                            {
                                field: "CreditLimit",
                                title: "Credit Limit",
                                width: 180,
                               
                            },
                            {
                                field: "CreditStatus",
                                title: "Credit Status",
                                width: 180,
     
                            },
                            {
                                field: "OutstandingCashMemo",
                                title: "Outstanding Cash Memo",
                                width: 180,

                            },
                            {
                                field: "OutstandingAmount",
                                title: "Outstanding Amount",
                                width: 180,
                            },
                            {
                                field: "PopStatus",
                                title: "Pop Status",
                                width: 180,
                            },
                             {
                                 field: "Status",
                                 title: "Status",
                                 width: 180,
                             },
                            {
                            
                                field: "Edit",
                                title:"  ",
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
                    templateUrl: 'MasterData/partials/modalWindow/modalCustomerAdd.html',
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

    


