//objects exercise 2 - Create an object variable and output each object property in a concatenated string onto the webpage

// object literal is created
var hotel = 
	{
	
		name: "The Holiday Inn",
		rooms: 100,
		booked: 35
		
      }

//displaying result in a concatenated string

document.getElementById("hotelDetails").innerHTML = "The hotel name is  "+ hotel.name + ",it has total "+ hotel.rooms+ "rooms and "+hotel.booked+ "are currently booked.";