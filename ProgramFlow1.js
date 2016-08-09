//Program flow - ex 1 -get user input and put it into an alert message using a function

//Declare variable for listening to button1
var event1 = document.getElementById("button1");

//Set up event listener on button1 click
event1.addEventListener('click',showAlert,false);

function showAlert()
{
    //Get the value from the text box and save it to local variable
    var userinput1 = document.getElementById("input1").value;
    //display the user's text in an alert box
    window.alert(userinput1);
    
}