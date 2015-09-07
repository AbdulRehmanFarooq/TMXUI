
angular
    .module('LeftNavigationBar', ['ngMaterial','ngAnimate'])
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, $window) {
      
      
      $scope.LeftPanel=$window.innerHeight-64-88-144;
       $scope.menuwithsub = [
         { name: 'Master Data', index:0, class:"",wanted: true, icon:'fa fa-outdent' ,subs:[{title:'Customer',link:'CustomerManagement1'},{title:'Company',link:'CustomerManagement'},{title:'product',link:'CustomerManagement'},{title:'location',link:'CustomerManagement'},{title:'Scheme',link:'CustomerManagement'},{title:'Supplier',link:'CustomerManagement'},{title:'Route',link:'CustomerManagement'},{title:'Distributor',link:'DistributorManagement'},{title:'Sales',link:'CustomerManagement'},{title:'Pricelist',link:'CustomerManagement'}]  },
         { name: 'Transaction', index:1,class:"",wanted: true, icon:'fa fa-exchange' ,subs:[{title:'Order',link:'CustomerManagement'},{title:'Payment',link:'CustomerManagement'},{title:'Bank Deposit',link:'CustomerManagement'},{title:'Planogram',link:'CustomerManagement'},{title:'Management',link:'CustomerManagement'}]},
         { name: 'Administration', index:2,class:"",wanted: true,icon:'fa fa-sticky-note' ,subs:[{title:'A',link:'CustomerManagement'},{title:'b',link:'CustomerManagement'},{title:'c',link:'CustomerManagement'}]},
         { name: 'Reports',  index:3,class:"",wanted: true,icon:'fa fa-reorder' ,subs:[{title:'A',link:'CustomerManagement'},{title:'b',link:'CustomerManagement'},{title:'c',link:'CustomerManagement'}]}

       ];

       $scope.menuwithoutsub = [
         { name: 'Dashboard', icon:'fa fa-dashcube', link:'dashboard.html' }
       ];

        $scope.close = function () {
              $mdSidenav('left').close()
                .then(function () {
                  $log.debug("close LEFT is done");
                });
        };

        $scope.navclick=function( index,val)
        {

          for (i=0;i<4;i++)
          {
            $scope.menuwithsub[i].wanted=true;
            $scope.menuwithsub[i].class="";
          }
          if(index!=-1)
           {
               $scope.menuwithsub[index].wanted=!val;
               if(val)
               {
                 $scope.menuwithsub[index].class="bgf3f3f3";
               }         }

        };
        
    });