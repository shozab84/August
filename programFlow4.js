//Program flow - ex 4 - create a function with a for loop in it that displays 1-50 on the webpage

//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', displayLoop, false);


function displayLoop() {
    
    var outputString = "";
     
    //display 1-50 on the screen, concatenating the string
    for (i = 1; i <= 50; i++)
        {
           outputString += i + "<br>";
           document.getElementById("result").innerHTML = outputString; 
        }
    
    
}