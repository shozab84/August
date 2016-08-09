//Program flow - ex5 - display the current day and time using a function and a switch statement

//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', getDayAndTime, false);


function getDayAndTime() {
        
    var day = "";
    //create a new date object
    var today = new Date();
    
    //get the day and switch on the value (0-6) to set the day string
    switch (today.getDay()) {
            
        case 0:
            day = "Sunday";
            break;
         case 1:
            day = "Monday";
            break;
         case 2:
            day = "Tuesday";
            break;
         case 3:
            day = "Wednesday";
            break;
         case 4:
            day = "Thursday";
            break;
         case 5:
            day = "Friday";
            break;
         case 6:
            day = "Saturday";
            break;
    }
    
    //get the time for display
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var time = hours + ":" + minutes;
    
    //display the time
    document.getElementById("result").innerHTML = "It's " + day + " and the time is " + time;
    
}