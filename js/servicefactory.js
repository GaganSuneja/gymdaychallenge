angular.module("gymdayapp",[])
       .factory("servicefactory",servicefactory)


function servicefactory()
{
	var services = 
	{
		"servicesname":["gymnasium","swimming","yoga","tennis"],
		"plans":["standard","premimum","gold"],
		"offers":["flat10","cooperate"],
		"flat10":
		[
			    {"text":"Awail this offer before diwali"},
			    {"discountpercent":10}
	    ],
        "cooperate":
        [
				{"text":"awail this cooperate discount"},
				{"discountpercent":15}
		],
		"gymnasium":
		[
			{
				"standard":[
				{"months":1,"rate":4000},
				{"months":3,"rate":5000},
				{"months":6,"rate":6000},
				{"months":9,"rate":9000},
				{"months":12,"rate":12000}
			 	 ]
			    ,
				"premimum":[
				{"months":1,"rate":4000},
				{"months":3,"rate":6000},
				{"months":6,"rate":8000},
				{"months":9,"rate":10000},
				{"months":12,"rate":12000}
				]
		       ,
				"gold":[
				{"months":1,"rate":4000},
				{"months":3,"rate":7000},
				{"months":6,"rate":10000},
				{"months":9,"rate":1200},
				{"months":12,"rate":13000}
				]
			}
		],
		"swimming":
		[
			{
				"standard":[
				{"months":1,"rate":4000},
				{"months":3,"rate":7000},
				{"months":6,"rate":9000},
				{"months":9,"rate":12000},
				{"months":12,"rate":15000}
			    ],
				"premimum":[
				{"months":1,"rate":4000},
				{"months":3,"rate":8000},
				{"months":6,"rate":10000},
				{"months":9,"rate":12000},
				{"months":12,"rate":15000}
			    ],
			
				"gold":[
				{"months":1,"rate":4000},
				{"months":3,"rate":6000},
				{"months":6,"rate":8000},
				{"months":9,"rate":10000},
				{"months":12,"rate":12000}
			   ]
			}
		],
		"yoga":
		[
			{
				"standard":[
				{"months":1,"rate":4000},
				{"months":3,"rate":5000},
				{"months":6,"rate":7000},
				{"months":9,"rate":10000},
				{"months":12,"rate":12000}
				]
			,
			
				"premimum":[
				{"months":1,"rate":4000},
				{"months":3,"rate":6000},
				{"months":6,"rate":8000},
				{"months":9,"rate":10000},
				{"months":12,"rate":12000}
				]
			,
			
				"gold":[
				{"months":1,"rate":4000},
				{"months":3,"rate":7000},
				{"months":6,"rate":10000},
				{"months":9,"rate":1200},
				{"months":12,"rate":14000}
				]
			}
		],
		"tennis":
		[
			{
						
				"standard":[
				{"months":1,"rate":4000},
				{"months":3,"rate":5000},
				{"months":6,"rate":6000},
				{"months":9,"rate":11000},
				{"months":12,"rate":12000}
				]
	    	,
			
				"premimum":[
				{"months":1,"rate":4000},
				{"months":3,"rate":5000},
				{"months":6,"rate":6000},
				{"months":9,"rate":1000},
				{"months":12,"rate":11000}
				]
			,
			
				"gold":[
				{"months":1,"rate":4000},
				{"months":3,"rate":5000},
				{"months":6,"rate":6000},
				{"months":9,"rate":8000},
				{"months":12,"rate":15000}
				]
			}
		]
	};

return services;

}
