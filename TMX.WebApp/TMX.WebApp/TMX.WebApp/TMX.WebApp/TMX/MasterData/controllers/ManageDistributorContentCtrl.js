 angular
     .module('MasterData')
     .controller('ManageDistributorContentCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, sharedProperties) {

       sharedProperties.setProperty("Distributor Management");
         
       

       $scope.mainGridOptions = {

        dataSource:{

		  data:[
                           { CustomerCode:"2105608-AN-0001-KHI",CustomerName:"<a  md-ink-ripple  href=\"#0\" ng-click=\"toggleRight()\" class=\"cd-btn hidden-lg\">Metro Store (AHI Rd)</a><span class=\"hidden-md hidden-sm hidden-xs\">Metro Store (AHI Rd)</span>",CustomerType:"GT",CustomerClass:"SG",Distributor:"an Distributor",CustomerLocation:"Gulshan-e-Iqbal ",PopStatus:"Order",CreditStatus:"",CreditLimit:"",Edit:"  <a md-ink-ripple ><i data-toggle=\"modal\" data-target=\"#myModal\" class=\"mdi-editor-mode-edit i-24\"></i></a><a><i data-toggle=\"modal\" class=\"mdi-action-delete i-24\"></i></a>"},
						    { CustomerCode:"2106338-AN-0001-KHI",CustomerName:"<a  md-ink-ripple  href=\"#0\" ng-click=\"toggleRight()\" class=\"cd-btn hidden-lg \" >FRESH BAKERS</a><span class=\"hidden-md hidden-sm hidden-xs\">FRESH BAKERS</span> ",CustomerType:"GT",CustomerClass:"SG",Distributor:"An Distributor",CustomerLocation:"Gulshan-e-Iqbal ",PopStatus:"Order",CreditStatus:"",CreditLimit:"",Edit:"  <a md-ink-ripple ><i data-toggle=\"modal\" data-target=\"#myModal\" class=\"mdi-editor-mode-edit i-24\"></i></a><a><i data-toggle=\"modal\" class=\"mdi-action-delete i-24\"></i></a>" }
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

                        },{
                            field: "CustomerType",

                        },{
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

            

     });