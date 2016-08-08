//	Collect 3 numbers from the user (a,b,c) and display on the webpage the difference between the values of the 2 calculations below:

// (a + b) * c  and (a + b + c)

// check event listner is working
//alert("event listner is working");
//get the value from the text box and save it to local variable
var event1 = document.getElementById("button1");
event1.addEventListener('click', calculations, false);

function calculations()
{ 
	var userInput1 = document.getElementById("input1").value;
	var userInput2 = document.getElementById("input2").value;
	var userInput3 = document.getElementById("input3").value;
	var numA = parseInt(userInput1);
	var numB = parseInt(userInput2);
	var numC = parseInt(userInput3);
	
	var calc1 = ((numA+numB)*numC);
	var calc2 = (numA+numB+numC);
	
	var diff_calc = calc1 -calc2;
	
	document.getElementById("demo").innerHTML = "This is the difference of two calc: " + diff_calc;
		
}