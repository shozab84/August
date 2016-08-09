//Program flow - ex 6 - display the numbers 1-10 on the page using a while loop

//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', loopTheLoop, false);
function loopTheLoop(){
	// Intialize the variable needed in the loop
	
	var i =0;
	var output="";
	
	//loop 10 

	while (i<10)
		{
			output += (i+1)+"<br/>";
			i++;
		}
	
	document.getElementById("result").innerHTML = output;
}



