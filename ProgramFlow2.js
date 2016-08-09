/Program flow - ex 2 - pass 3 variables into a function, add them and display the result

//Declare variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click',inputAndDisplay,false);
//get three numbers from text boxes


function inputAndDisplay(){
    //get values from text boxes
    var userinput1 = document.getElementById("input1").value;
    var userinput2 = document.getElementById("input2").value;
    var userinput3 = document.getElementById("input3").value;
    
    //convert string inputs to numbers
    var number1 = parseInt(userinput1);
    var number2 = parseInt(userinput2);
    var number3 = parseInt(userinput3);
    
    //call function to add numbers
    var output = addThree(number1, number2, number3);
    
    document.getElementById("result").innerHTML = output;
}

function addThree(number1, number2, number3){
        
    return number1 + number2 + number3;
    
}
 