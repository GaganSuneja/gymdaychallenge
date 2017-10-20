angular.module("gymdayapp")
       .factory("usersfactory",usersfactory)



function usersfactory()
{
	

	var users = 
	{
		selecteduser:0,
		"userlist":[
		new user("gagan","suneja","8373969481",0,"MEMBER"),
		new user("Hello","suneja","8373969481",1,"MEMBER"),
		new user("jariti","suneja","8373969481",2,"MEMBER"),
		new user("utkarsh","suneja","8373969481",3,"MEMBER"),
		new user("anmol","suneja","8373969481",4,"MEMBER"),
		new user("yo","suneja","8373969481",2,"MEMBER"),
		new user("happy","suneja","8373969481",0,"MEMBER")
		],
		getselecteduser:function(user)
		{
			return this.selecteduser;
		},
	    selectuser:function(user)
	    {
	    	this.selecteduser = user;
	    }
	};
	
	return users;

}       
function user(firstname,lastname,phone,status,type)
{
	this.firstname = firstname;
	this.lastname  = lastname;
	this.phone     = phone;
	this.status    = status;
	this.type      = type
}
