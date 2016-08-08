//	Collect a single number value from the user and display on the webpage the number one less and the number one more than the number entered


// check event listner is working
//alert("event listner is working");
//get the value from the text box and save it to local variable
var event1 = document.getElementById("button1");
event1.addEventListener('click', Onelessonemore, false);

function Onelessonemore()
{ 
	var userInput1 = document.getElementById("input1").value;
	var num = parseInt(userInput1);	
	
	var oneless = num - 1;
	var onemore = num + 1;
	document.getElementById("demo").innerHTML = "This is one less: " + oneless + " and this is one more: " + onemore;
		
}