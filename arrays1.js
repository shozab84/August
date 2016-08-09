//Arrays - ex 1 - Collect 3 user inputs and allocate them to three members of a new array. Display the array on the webpage

//declare an empty array
	
var items =[];
//set up an event handler on the button
var event1 = document.getElementById("button1");
event1.addEventListener('click', getuserinput, false);

function getuserinput(){

	// get user input in array
items[0] = document.getElementById("input1").value;
items[1] = document.getElementById("input2").value;
items[2] = document.getElementById("input3").value;

//Intialise variable for the loop
	
var textString ="";
	
	

//loop through array, adding array items to output string
for(var i = 0; i<items.length;i++)
	{
			
	textString+=items[i]+" ";
		
	}
	
	//displaying output
	
	document.getElementById("result").innerHTML = textString;
	
}
