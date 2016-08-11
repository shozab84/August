//objects exercise 6 - 	
//Build an object constructor, Create 2 instances of the object, Display the properties of the object instances on the webpage

function Hotel(name,rooms,booked)//We usually name 1st letter of the constructor capital
{
this.name = name;
this.rooms = rooms;	
this.booked = booked;	
}

//create 2 hotel objects

var quayHotel = new Hotel("Sheraton", 100, 50);
var parkHotel= new Hotel("Oberoi", 45, 20);

//display the details of the quayHotel

document.getElementById("firstHotel").innerHTML = "The hotel name is "+ quayHotel.name +". It has " + quayHotel.rooms+", out of which "+ quayHotel.booked+" are booked";

document.getElementById("secondHotel").innerHTML = "The hotel name is "+ parkHotel.name +". It has " + parkHotel.rooms+", out of which "+ parkHotel.booked+" are booked";




