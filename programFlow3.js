//Program flow - ex 3 - scope: declare the same variable inside and outside a function, giving it different values

//Note that this code runs as soon as the page is loaded without waiting for the button click
//declare a global variable
var var1 = 555;
document.getElementById("result1").innerHTML = "Outside the function the global variable var 1 has a value of " + var1;


//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click',display,false);


function display(){
    
    var var1 = 9999;
    
    document.getElementById("result2").innerHTML = "Inside the function the local variable var 1 has a value of " + var1;
}