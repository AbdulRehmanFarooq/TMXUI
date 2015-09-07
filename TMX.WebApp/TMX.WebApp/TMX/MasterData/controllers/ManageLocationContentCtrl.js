 angular
     .module('MasterData')
     .controller('ManageLocationContentCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $modal, $log, $window, sharedProperties) {

       sharedProperties.setProperty("Location Management");
         
       

       $scope.mainGridOptions = {

        dataSource:{

		  data:[
                           { LocationCode: "AN-0001-KHI", LocationName: "KA", LocationType: " General Trader", ParentLocation: "Gulshan-e-Iqbal ", Status: "Order", Longitude: "None", Latitude:"None",EffectiveDate:"25-11-2016",Edit: "  <a href=\"\"><i  class=\"fa fa-pencil fa-lg tablehyperlink\" ng-click=\"open()\"></i></a><a href=\"\"><i  class=\"fa fa-trash-o fa-lg tablehyperlink\"></i></a>" },
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
						    field: "LocationCode",
						    title: "Location Code",
                            width:100

                        },
                        {
                            field: "LocationName",
                            title: "Location Name",
                            width:140

                        },{
                            field: "LocationType",
                            title: "Location Type",
                            width: 100
                        },
						{
                            field: "ParentLocation",
                            title: "Parent Location",
							width: 140
                        },
						{
                            field: "Status",
                            title: "Status",
                            width: 100
						},
                        {
                            field: "Longitude",
                            width: 100
                        },
                         {
                             field: "Latitude",
                             width: 100
                         },
                          {
                              field: "EffectiveDate",
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
               templateUrl: 'MasterData/partials/modalWindow/modalLocationAdd.html',
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