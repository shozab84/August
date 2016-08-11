//Create an array of Countries England, France, Italy, Mexico, Poland, Russia, China, Greece, Egypt, India

//Create a  user text input field. User can enter a country. The array is searched and when a match is found the position in the array is displayed and the user is given a message to inform whether the country is present or not in the array


// declare an array
var countries =["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"]; 


// setting up an event handler on the button

var event1 = document.getElementById("countryButton");
event1.addEventListener('click',getuserinput,false);


function getuserinput(){
		
	
	//get the search string entered by the user
	
	var searchString = document.getElementById("countryInput").value;
	
	//get the index of the country from an array (-1 if not found)
	
	var searchResult = countries.indexOf(searchString);
	
	//If the country was found display its name and Index
	
	
	if (searchResult>= 0)
		
	{
	
	document.getElementById("countryDisplay").innerHTML = searchString + "is the array at position" + (searchResult + 1);
	
	}
	
	else
		
	{	
		
	document.getElementById("countryDisplay").innerHTML = searchString + "is not in the array";	
	
	}
	
	
	
}








//create an output string

var textString ="";
// use for loop to go through all 10 elements

for (var i = 0; i<items.length;i++)
{
  textString+= items[i]+ " ";	
}

// display the contents of the array

document.getElementById("arrayDisplay").innerHTML = textString;