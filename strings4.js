//Strings - exercise 4 - Input a sentence and a search string and search for the last occurrence of the string using lastIndexof() method


//declare an empty array
var sentence = [];



//set up an event handler on the button
var event1 = document.getElementById("searchButton");
event1.addEventListener('click', getUserInput, false);



function getUserInput()
{

	//get the sentence entered by the user
    var sentence = document.getElementById("sentenceInput").value;
    //get the search string entered by the user
    var searchString = document.getElementById("stringInput").value;
    
    
	
	
	
	//split the sentence up into an array of characters
    var sentenceArray = sentence.split("");
    //split the search string up into an array of characters
    var searchArray = searchString.split("");
    
    
	
	
	//set an index found value to a value that can't be an array index
    var indexFound = -1;
    //search for the search string within the sentence
    indexFound = sentence.lastIndexOf(searchString); // this is a method in javascript which returns the position of the last occurrence of a specified value in a string.
    
    
	
	
	//if the string was found display its name and index, otherwise give an error message
    
		
	if (indexFound >= 0)
        {
            document.getElementById("result").innerHTML = searchString + " is in the sentence at position " + (indexFound + 1);
        }
    else
        {
            document.getElementById("result").innerHTML = searchString + " is not in the sentence.";
        }
 
}