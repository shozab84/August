//	Collect 2 numbers from the user and display on the webpage if one of them  or both of them are greater than 10
// check event listner is working
//alert("event listner is working");
//get the value from the text box and save it to local variable
var event1 = document.getElementById("button1");
event1.addEventListener('click', calculations, false);

function calculations()
{ 
	var userInput1 = document.getElementById("input1").value;
	var userInput2 = document.getElementById("input2").value;
	
	var numA = parseInt(userInput1);
	var numB = parseInt(userInput2);
	
	if (numA > 10 && numB > 10) {
		document.getElementById("demo").innerHTML =  "They are both greater than 10";	
	}
	if (numA > 10 || numB > 10) {
		document.getElementById("demo").innerHTML =  "Atleast one of them is  greater than 10";
	}
	
	

		
}