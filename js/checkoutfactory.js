 angular.module("gymdayapp")
 		.factory("checkoutfactory",checkoutfactory);


function checkoutfactory()
{
	var checkout = {
		  
		  checkoutplanlist: [],

		  checkoutobjectid : 0,
 
		  finalamount : 0,
		  
		  discountrate: 0,
		  
		  getfinalrate:function()
		  {
		  	return this.finalrate;
		  },

		  pushplan:function(checkoutobject)
		  {
		  	 this.checkoutplanlist.push(checkoutobject);
		  	
		  	 this.checkoutobjectid++;
		  },
		  
		  pushdiscount:function(discountobject)
		  {
		  	 console.log("current id", this.checkoutobjectid );
		  	 
		/*  	 var index = this.checkoutplanlist.findIndex(function(objects){
		  	 		
		  	 		        return objects.id == this.checkoutobjectid-1;
		  	 
		  	 });*/
		  	 
		  //	 console.log(index);
		  	 
		  	 console.log("object in which plan will be inserted",this.checkoutplanlist[this.checkoutobjectid-1]);
		  	 this.checkoutplanlist[this.checkoutobjectid-1].discount = discountobject;
		  },

		  popplan:function(planobjectid)
		  {
		  	this.checkoutplanlist = this.checkoutplanlist.filter(
		  		
		  			function(planobject){
		  		
		  				return planobject.id!==planobjectid;
		  		
		  			});
		  },
		  
		  popdiscount:function(objectid)
		  {
		  	  var index = this.checkoutplanlist.findIndex(function(objects){
		  	 		
		  	 		return objects.id == objectid ;
		  	 
		  	 });

		  	 this.checkoutplanlist[index].discount = null;
		  },
		 
		  getcheckoutobjectid:function()
		  {
		       return this.checkoutobjectid;
		  },
		 
		  get_finalrate_with_tax:function(){
		  		return ;
		  }

	}

	return checkout;
}

function checkoutobject(id,plan,servicetype,plancategory,user=null,discount = null)
{
	
	this.id = id;
	this.plan  = plan;
	this.plancategory = plancategory;
	this.servicetype = servicetype;
	this.discount = discount;
	this.user  = user;
	this.isdeleted = false;
	this.deleteobject = function()
	{
		this.isdeleted = true;
	}
    
}
