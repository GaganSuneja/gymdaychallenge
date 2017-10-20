angular.module("gymdayapp")
       .controller("servicecontroller",servicecontroller);

function servicecontroller($scope,servicefactory,checkoutfactory,usersfactory)
{

  $scope.selectedservice = {};
 
  var default_service = servicefactory["gymnasium"][0]["standard"];
  
  $scope.selectedservice.current_service = default_service;
  
  $scope.services = servicefactory;

  $scope.selectedservice.current_servicetype;

  $scope.offers = servicefactory.offers;

  var default_plan_selected = "standard";
  
  var planselected = default_plan_selected;
 
  var default_service_selected =  "gymnasium";
  
  var serviceselected = default_service_selected;

  var default_offer_selected  ="flat10";
 
  var offerselected  = default_offer_selected;

  var finalplanselected = [];
  
  $scope.finalcheckouts = [];

  console.log("final checkouts",$scope.finalcheckouts);

  $scope.selectservicetype = function(servicetype)
  {
  	  serviceselected = servicetype;

  	  console.log("selectservicetype");
  	 
  	  console.log("servicetype",servicetype);
     
      console.log("planselected",planselected);
     
      console.log("service type selected",servicefactory[serviceselected][0]);
  	  
  	  $scope.selectedservice.current_service = servicefactory[serviceselected][0][planselected];
  }
   
  $scope.selectplan = function(plan)
  {
  	  
  	  planselected = plan;
  	 
  	  console.log("selectplan");
  	  
  	  console.log(plan);	
  	 
  	  console.log("planselected",planselected);
  	 
  	  console.log("serviceselected",serviceselected);

  	  console.log(servicefactory[serviceselected][0][planselected]);
  	
  	  $scope.selectedservice.current_service = servicefactory[serviceselected][0][planselected];
  	  
  	  console.log("selected users are",usersfactory.getselecteduser());
  
  	  console.log(checkoutobject.checkoutplanlist);
  }
  
  $scope.showupdiscount = function()
  {
		 console.log("show up");
		 
		 var a = $scope.show;
		     a = a.toLowerCase().trim();
  		        
  		 console.log(servicefactory[a]); 

  		 console.log("checkoutplanlist",checkoutfactory.checkoutplanlist);
  		
  		 checkoutfactory.pushdiscount(servicefactory[a]);		

  		 console.log("checkoutplanlist after insertions",checkoutfactory.checkoutplanlist);

  		 $scope.finalcheckouts = checkoutfactory.checkoutplanlist;

		 console.log("checkouts",$scope.finalcheckouts);
	  }

  $scope.select_offer = function(offer)
    {
  		
  		offerselected = offer;
  		
   		$scope.selectedoffer = servicefactory["offers"][0][offerselected]; 		

   		$scope.finalcheckouts = checkoutfactory.checkoutplanlist;

   		console.log("checkouts",$scope.finalcheckouts);
   		
    }

  $scope.select_final_plan  = function(plandetails)
  {

  		var obj  = new checkoutobject(checkoutfactory.getcheckoutobjectid(),plandetails,serviceselected,planselected);

  		console.log("checkoutfactory, obj",checkoutfactory.checkoutplanlist,obj);
  			
  		checkoutfactory.pushplan(obj);

  		$scope.finalcheckouts = checkoutfactory.checkoutplanlist;
  	
  		console.log("checkouts",$scope.finalcheckouts);
  
  }

  $scope.deselect_final_plan = function()
  {
  
  		checkoutfactory.pop_final_plan();
  		
  		$scope.finalcheckouts = checkoutfactory.checkoutplanlist;
  
  }

  $scope.deselect_final_offer = function()
  {
  
  	    checkoutfactory.pop_discount();
  		
  		$scope.finalcheckouts = checkoutfactory.checkoutplanlist;
  
  }

}

