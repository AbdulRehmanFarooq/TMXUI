 angular
     .module('MasterData')
     .controller('ManageDistributorContentCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $modal, $log, $window, sharedProperties) {

       sharedProperties.setProperty("Distributor Management");
         
       

       $scope.mainGridOptions = {

        dataSource:{

		  data:[
                           { DistributorCode:"AN-0001-KHI",DistributorName:"KA",DistributorType:" General Trader",DistributorLocation:"Gulshan-e-Iqbal ",Status:"Order",Parent:"None",Edit:"  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>"},
			   ],
          pageSize:20
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
						    field: "DistributorCode",
						    title: "Distributor Code",
                            width:100

                        },
                        {
                            field: "DistributorName",
                            title: "Distributor Name",
                            width:140

                        },{
                            field: "DistributorType",
                            title: "Distributor Type",
                            width: 100
                        },
						{
                            field: "DistributorLocation",
                            title: "Distributor Location",
							width: 140
                        },
						{
                            field: "Status",
                            title: "Status",
                            width: 100
						},
                        {
                            field: "Parent",
                            title: "Parent",
                            width: 100
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


       $scope.open = function (size) {

           var modalInstance = $modal.open({
               animation: $scope.animationsEnabled,
               templateUrl: 'MasterData/partials/modalWindow/modalDistributorAdd.html',
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


     });