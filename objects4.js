//objects exercise 4 - 	
//Create an object variable with 3 properties: firstname, surname, fullname. For the fullname value create a method which returns the firstname and surname and display on the webpage

// object literal is created
var person = 
	{
	
		firstname: "Syed",
		surname	: "Rizvi",
		fullname: function() {		
		return person.firstname + " "+ person.surname;	
		}
		
	}
	
	document.getElementById("personsName").innerHTML= person.fullname();	
	
		
		
		/*checkAvailablity: function()
		{
		  return hotel.rooms - hotel.booked;
		
	}
		
      }

//displaying result in a concatenated string

document.getElementById("hotelDetails").innerHTML = "The hotel name is: " + hotel.name + ", it has a total of " + hotel.rooms + " rooms and " + hotel.booked + " of them are currently booked. The cheapest room is £" + 
hotel.cheapestRoom + ".";

// display the result of an object method

document.getElementById("hotelRoomsAvailable").innerHTML= "There are "+ hotel.checkAvailablity()+ " rooms available";*/