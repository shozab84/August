//objects exercise 3 - Create an object with properties and a method. Access the method

// object literal is created
var hotel = 
	{
	
		name: "The Holiday Inn",
		rooms: 100,
		booked: 35,
		cheapestRoom: 300,
		
		checkAvailablity: function()
		{
		  return hotel.rooms - hotel.booked;
		
	}
		
      }

//displaying result in a concatenated string

document.getElementById("hotelDetails").innerHTML = "The hotel name is: " + hotel.name + ", it has a total of " + hotel.rooms + " rooms and " + hotel.booked + " of them are currently booked. The cheapest room is £" + 
hotel.cheapestRoom + ".";

// display the result of an object method

document.getElementById("hotelRoomsAvailable").innerHTML= "There are "+ hotel.checkAvailablity()+ " rooms available";