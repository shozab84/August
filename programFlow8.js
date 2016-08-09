//Program flow - ex 8 -  Create a nested loop that displays two sequences of numbers from 1-10, with one sequence nested inside the other 

//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', nestedLoop, false);


function nestedLoop() {
    
    //intialise variable for loops
    var output = "";
    
    //run outer loop 10 times
    for(var i = 0; i < 10; i++)
        {
            output += "Outer loop number is " + (i + 1) + "<br>";
            
            //run inner loop 10 times for every time that the outer loop runs
            for(var j = 0; j < 10; j++)
                {
                    //indent output string with 2 non-breaking spaces on each line,
                    //then add message, number and link break to output string
                    output += "&nbsp; &nbsp; Inner loop number is " +  (j + 1) + "<br>";
                }
            
        }
    
    document.getElementById("result").innerHTML = output;
}
