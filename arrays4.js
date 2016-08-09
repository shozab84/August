// Arrays - ex4 - Add to an array at a specific index point in the array 

//declare an array and display it on screen
var items = ["happy", "doc", "sleepy"];

// create an output string for the array
var textString = "";
    
    //loop through the array, getting the items and putting them in an output string
    for(var i = 0; i < items.length; i++)
        {
            textString += items[i] + " ";
        }

//display the contents of the array
document.getElementById("arrayDisplay").innerHTML = textString;

//set up an event handler on the add button (Now Click me!)
var event1 = document.getElementById("buttonAdd");
event1.addEventListener('click', AddArrayItem, false);

//set up an event handler on the remove button (Remove item)
var event1 = document.getElementById("buttonRemove");
event1.addEventListener('click', RemoveArrayItem, false);