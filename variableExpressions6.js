//	Collect 2 number values from a user and display in text whether the numbers are the same or different

var event1 = document.getElementById("button1");
event1.addEventListener('click', SameOrDifferent, false);

function SameOrDifferent()
{ 
	var userInput1 = document.getElementById("input1").value;
	var userInput2 = document.getElementById("input2").value;
	
	if (parseInt(userInput1) === parseInt(userInput2))
	{
		var message = "The numbers are same";
	}	
	else {
		var message = "The numbers are not the same";
	}	
	
	document.getElementById("demo").innerHTML = message;	
	
}