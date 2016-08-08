//Collect 2 number values from user and display sum of those values on webpage

var event1 = document.getElementById("button1");
event1.addEventListener('click', myFirst, false);

function myFirst()
{ 
	var userInput1 = document.getElementById("input1").value;
	var userInput2 = document.getElementById("input2").value;
	
	var sum = parseFloat(userInput1) + parseFloat(userInput2);
	
	document.getElementById("demo").innerHTML = sum;
}