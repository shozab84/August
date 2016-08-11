/* string1 exercise 
Input text and display text in 3 boxes (1) unmodified (2) toUpperCase (3) toLowerCase
*/

//settingup event listner
var event1 = document.getElementById("submitText");
event1.addEventListener('click',convertText,false);

function convertText()
{
	// getting value from the text box
	var textInput = document.getElementById("inputTextBox").value;
	
	// displaying original text
	
	document.getElementById("textEntered").innerHTML = textInput;
	
	  //convert text to upper case and display it
	document.getElementById("textUpperCase").innerHTML = textInput.toUpperCase();
	document.getElementById("textLowerCase").innerHTML = textInput.toLowerCase();
	
}
