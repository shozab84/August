//Collect a user input and allocate it to a new array using the push method.
//declare an array and put some items in it.
var items = ["happy", "doc", "sleepy"];

//setup an event handler on the button
var event1 = document.getElementById("button1");
// listening
event1.addEventListener('click',getuserinput, false);// calling function getuserinput

function getuserinput(){
	
//push new item into the array and find out the new size of the array
	var arraySize = items.push(document.getElementById("input1").value);
	
//create an output string for the array
	var textString = "";
	
	for (var i = 0; i<items.length;i++)
		{
			
			textString+= items[i] +" ";
			
		}
	// display the array
	document.getElementById("result").innerHTML= textString;
	
	// display the length of array
	
	document.getElementById("arrayLength").innerHTML = "The array is" + arraySize +"Items long"
	
	
}


