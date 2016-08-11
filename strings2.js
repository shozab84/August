//Strings exercise 2 - Input a string and display the letter at the given index using the slice() method.  On a separate line display the string from that same character to the end of the string

//clear the error message
document.getElementById("errorMessage").innerHTML = "";

//set up an event on the Submit button
eventSubmit = document.getElementById("submitText");
eventSubmit.addEventListener('click', convertText, false);

function convertText()
{
    //get user input
    var textInput = document.getElementById("inputTextBox").value; 
    var numberInput = parseInt(document.getElementById("inputNumber").value); 
    
    //split the string up into an array of characters
    var textInputArray = textInput.split("");
    
    //check whether the chosen slice position is within the range of the array
    if ((numberInput >0) && (numberInput <= textInputArray.length))
        {
            //clear the error message
            document.getElementById("errorMessage").innerHTML = "";

            //if it's valid, slice the array and display the output, subtracting 1 from the 
            //value entered by the user because strings are zero-indexed
            var chosenCharacter = textInputArray.slice(numberInput - 1, numberInput);
            var restOfString = textInputArray.slice(numberInput);
            
            //display output
            document.getElementById("textEntered").innerHTML = textInput;
            document.getElementById("textCharacter").innerHTML = chosenCharacter;
            document.getElementById("textRestOfString").innerHTML = restOfString;
        }
    else
        {
            //give an error message
            document.getElementById("errorMessage").innerHTML = "Sorry, but there is no text at that position.  Please try again.";
        }
    
    
    
}

