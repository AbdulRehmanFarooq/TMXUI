
   angular
     .module('MasterData', ['ngMaterial','ngAnimate','ui.bootstrap','angular-click-outside','kendo.directives', 'ngRoute', 'LeftNavigationBar'])

     .controller('MasterDataCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $modal,$log,$window, $http) {

         
       $scope.Margin="topmargin";
       $scope.RightPanel=$window.innerHeight-64;
      
       $scope.LeftClass="leftpanel";
       $scope.smallLeft=false;

       $scope.closeLeft = function () {
         $mdSidenav('right').close()
           .then(function () {
             $log.debug("close RIGHT is done");
           });
         }

       $scope.resizeleft = function()
       {    console.log("asdsa");
         if($scope.LeftClass=="leftpanel2")
           {
             $scope.LeftClass="leftpanel";
             $scope.smallLeft=false;
           }
         else
           {
             $scope.LeftClass="leftpanel2";
             $scope.smallLeft=true;
         }
         
       };

       Init($scope, $http);
        })

    

  .config( ['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/CustomerManagement1', {
        templateUrl: 'MasterData/partials/contents/manageCustomer-content.html',
        controller: 'ManageCustomerContentCtrl'

      })
      .when('/DistributorManagement', {
        templateUrl: 'MasterData/partials/contents/manageDistributor-content.html',
        controller: 'ManageDistributorContentCtrl'
      })
       .when('/SupplierManagement', {
           templateUrl: 'MasterData/partials/contents/manageSupplier-content.html',
           controller: 'ManageSupplierContentCtrl'
       })
      .when('/SalesTargetManagement', {
          templateUrl: 'MasterData/partials/contents/manageSalesTarget-content.html',
          controller: 'ManageSalesTargetContentCtrl'
      })
       .when('/CompanyManagement', {
           templateUrl: 'MasterData/partials/contents/manageCompany-content.html',
           controller: 'ManageCompanyContentCtrl'
       })
       .when('/ProductManagement', {
           templateUrl: 'MasterData/partials/contents/manageProduct-content.html',
           controller: 'ManageProductContentCtrl'
       })
      
  }]).filter('Translate', function () {
      return translate;
  });




 
 


        
       
  