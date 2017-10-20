console.log("included users controller");
angular.module("gymdayapp")
       .controller("userscontroller",usercontroller);

function usercontroller($scope,usersfactory)       
{
	
	
	$scope.users  = {};

	console.log(usersfactory);

	$scope.users.list = usersfactory.userlist;	

	$scope.selecteduser = "";

	console.log("in user contoller",$scope.users.list)	;

	console.log("type of users",typeof($scope.users.list));
	
	$scope.searchbarvisibility = true;
	
	$scope.searchvisibility = false;
	
	$scope.finalresultvisibility = false;
	
	$scope.showsearchresults = function()
	{
			$scope.searchvisibility = true;
	}
	$scope.closesearchresults = function()
	{
		    $scope.searchvisibility = false;
	}
	$scope.selectresult = function(user)
	{
		  
		  $scope.selecteduser = user;
		  
		  usersfactory.selectuser(user);
		  
		  $scope.searchvisibility = false;
		  $scope.finalresultvisibility = true;
		  $scope.searchbarvisibility  =false;
	}
	$scope.backtoinitial = function()
	{
		$scope.searchbarvisibility = true;
	
		$scope.searchvisibility = false;
	
		$scope.finalresultvisibility = false;
	}


}



