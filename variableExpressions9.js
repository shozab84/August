//	Collect a number from the user and display on the webpage if the number entered is negative, less than 10 or greater than 10

// check event listner is working
//alert("event listner is working");
//get the value from the text box and save it to local variable
var event1 = document.getElementById("button1");
event1.addEventListener('click', calculations, false);

function calculations()
{ 
	var userInput1 = document.getElementById("input1").value;
	
	var numA = parseInt(userInput1);
	
	if (numA < 0)
	{
		document.getElementById("demo").innerHTML =  "Number is negative";
	}
	
	else if (numA <10)
		{
			document.getElementById("demo").innerHTML =  "Number is less than 10";
		}
		
	else if (numA >10)
		{
			document.getElementById("demo").innerHTML =  "Number is greater than 10";
		}
		
			

		
}