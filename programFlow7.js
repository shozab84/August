//Program flow - ex 7 - display 1-10 on the page using a do-while loop

//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', loopTheLoop, false);
function loopTheLoop(){
	// Intialize the variable needed in the loop
	
	var i =0;
	var output="";
	
	//loop while i less than 10 

	do
		
	{
		// add the number plus an endline to the output string
		output+=(i+1) +"<br>"
		i++;	
	}
	
	while (i<10)
	
		// display the output string
	
	document.getElementById("result").innerHTML = output;
}



