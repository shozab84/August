//Create an array variable with 10 elements and using a for loop  display each element on the webpage
var items =["one","two","three","four","five","six","seven","eight","nine","ten"]; 

//create an output string

var textString ="";
// use for loop to go through all 10 elements

for (var i = 0; i<items.length;i++)
{
  textString+= items[i]+ " ";	
}

// display the contents of the array

document.getElementById("arrayDisplay").innerHTML = textString;