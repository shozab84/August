/* Arrays - ex 3 - Add and Remove first and last elements  on and off an array using shift, unshift, push and pop methods*/

//declare an empty array
var items = ["happy", "doc", "sleepy"];

//set up an event handler on the button
var event1 = document.getElementById("button1");
event1.addEventListener('click', getUserInput, false);

function getUserInput() 
{
    //add something to the start of the array and return the new length    
    items.unshift(document.getElementById("input1").value);
    //add something to the end of the array and return the new length
    var arraySize = items.push(document.getElementById("input2").value);
    
    //create an output string for the array
    var textString = "";
    
    for(var i = 0; i < items.length; i++)
        {
            textString += items[i] + " ";
            
        }
    
    //display the contents of the array
    document.getElementById("result").innerHTML = textString;
    //display the length of the array
    document.getElementById("arrayLength").innerHTML = "The array is " + arraySize + " items long."
   
    //remove the first item from the array
    var shifted = items.shift();
    //remove the last item from the array
    var popped = items.pop();
    
    //create an output string for the array
    var textString = "";
    
    for(var i = 0; i < items.length; i++)
        {
            textString += items[i] + " ";
            
        }
    //display the contents of the array
    document.getElementById("result2").innerHTML = textString;
    //display the length of the array
    document.getElementById("arrayLength2").innerHTML = "The array is " + items.length + " items long."
    //display information about what has happened to the array
    textString = shifted + " was removed from the beginning of the array and " + popped + " was removed from the end of the array.";
    document.getElementById("arrayRemovals").innerHTML = textString; 
}