//objects exercise 5 - 	
//Create an object within an object (nested) and display a nested object property on the webpage

// object literal is created
var person = 
	{
	
		firstname: "Syed",
		surname	: "Rizvi",
		fullname: function() 
		{		
		return person.firstname + " "+ person.surname;	
		},
		address: 
		{
		 
		road: "Longley",
		city: "London"
		
	    }
		
		
	}
	
	document.getElementById("personsName").innerHTML= person.fullname();
    document.getElementById("personsAddress").innerHTML= person.address.road + "<br/>" + person.address.city;
     
	
	
	
