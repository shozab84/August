//Strings - exercise 5 - Input a string and output all characters looping first to last character using for (var i = 0; i < string.length; i++) displaying charAt(i)


///Strings - exercise 5 - Input a string and output all characters looping first to last character using for (var i = 0; i < string.length; i++) displaying charAt(i)

//declare an empty array
var sentence = [];

//set up an event handler on the button
var event1 = document.getElementById("outputButton");
event1.addEventListener('click', outputString, false);

function outputString()
{
    //get the string entered by the user
    var inputString = document.getElementById("stringInput").value;
    
    
	
    //create an output string for the array
    var textString = "";
    
	
    //add characters to the text string with a line break after each
    for(var i = 0; i < inputString.length; i++)
        {
            textString += inputString.charAt(i) + "<br/>"; // charAt() method returns a character of a string, you just specify the index and it will get it for you
        }
    
    //display the contents of the array
    document.getElementById("result").innerHTML = textString;

 
}
 