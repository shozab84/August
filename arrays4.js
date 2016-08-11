//declare an array and display it on screen
var items = ["happy", "doc", "sleepy"];

//create an output string for the array
var textString = "";
    
    //loop through the array, getting the items and putting them in an output string
    for(var i = 0; i < items.length; i++)
        {
            textString += items[i] + " ";
        }
    
//display the contents of the array
document.getElementById("arrayDisplay").innerHTML = textString;

//set up an event handler on the add button
var event1 = document.getElementById("buttonAdd");
event1.addEventListener('click', AddArrayItem, false);

//set up an event handler on the add button
var event1 = document.getElementById("buttonRemove");
event1.addEventListener('click', RemoveArrayItem, false);

function AddArrayItem() 
{
    //get the item to be inserted from the user input    
    var newItem = document.getElementById("input1").value;
    //get the insertion position from the user input
    var insertPosition = parseInt((document.getElementById("input2").value) - 1);
    //check that the insertion position is valid and warn the user if it isn't
    if ((insertPosition >= 0) && (insertPosition <= items.length))
        {
            items.splice(insertPosition, 0, newItem);
        }
    else
        {
            alert("Please enter a number greater than or equal to 1 and less than or equal to " + (items.length+1) );
        }
    
    
    //create an output string for the array
    var textString = "";
    
    //loop through the array, getting the items and putting them in an output string
    for(var i = 0; i < items.length; i++)
        {
            textString += items[i] + " ";
            
        }
    
    //display the contents of the array
    document.getElementById("result").innerHTML = textString;
    //display the length of the array
    document.getElementById("arrayLength").innerHTML = "The array is " + items.length + " items long."
   
}

function RemoveArrayItem()
{
    //get the removal position from the user input
    var removalPosition = parseInt((document.getElementById("input3").value) - 1);
    
    //check that the removal position is valid and warn the user if it isn't
    if ((removalPosition >= 0) && (removalPosition < items.length))
        {
            items.splice(removalPosition, 1);
        }
    else
        {
            alert("Please enter a number greater than or equal to 1 and less than or equal to " + items.length);
        }
    
    //create an output string for the array
    var textString = "";
    
    //loop through the array, getting the items and putting them in an output string
    for(var i = 0; i < items.length; i++)
        {
            textString += items[i] + " ";
            
        }
    
    //display the contents of the array
    document.getElementById("arrayLength2").innerHTML = textString;
    //display the length of the array
    document.getElementById("arrayRemovals").innerHTML = "The array is " + items.length + " items long."
    
}

