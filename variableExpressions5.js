//Collect 2 number values and display the larger

var event1 = document.getElementById("button1");
event1.addEventListener('click', greater, false);

function greater()
{ 
	var userInput1 = document.getElementById("input1").value;
	var userInput2 = document.getElementById("input2").value;
	/*
	if 
		{
			
		parseFloat(userInput1) > parseFloat(userInput2);
		document.getElementById("demo").innerHTML = userInput1;
		}

		else
			
			{
		document.getElementById("demo").innerHTML = userInput2;		
			}
		*/
	
	var largest = Math.max(parseInt(userInput1), parseInt(userInput2))
	
	document.getElementById("demo").innerHTML = largest;	
	
}