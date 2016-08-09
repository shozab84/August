/* Mini-project 1  - Build a small game where the user has to guess a secret number which is generated automatically in Javascript. After each guess the webpage displays to the user whether their guess is too large or too small. When the user guesses the secret number correctly - three pieces of information are displayed on the webpage: (1) the correct number  (2)the number of guesses (3)the message “Well done – correct guess!”  */
var randomNumber = 0;
var numberOfGuesses = 0;
var successMessage = "You guessed correctly!";
var tooBigMessage = "Your guess was too big.";
var tooSmallMessage = "Your guess was too small.";
var tryAgainMessage = "Have another go!";
var numberOfGuessesMessage = "Your number of guesses was: ";


//Generate random number
randomNumber = Math.floor((Math.random() * 100) + 1);

//Declare variable for listening to button1
var event1 = document.getElementById("buttonGuess");
//Set up event listener on button1 click
event1.addEventListener('click', checkGuess, false);

function checkGuess() {  
    //get user's guess
    var usersGuessedString = document.getElementById("tbGuess").value;
    var usersGuessedNumber = parseInt(usersGuessedString);
    document.getElementById("feedback1").innerHTML = " users guessed number is " + usersGuessedNumber;
    
    //display random number to help with testing - remove when testing complete
    //document.getElementById("debug").innerHTML = "random number is" + randomNumber;
    
    //count number of guesses
    numberOfGuesses++;
    
    //check guess and give feedback
    if (usersGuessedNumber === randomNumber)
        {
            document.getElementById("feedback1").innerHTML = successMessage;
            document.getElementById("feedback2").innerHTML = numberOfGuessesMessage + numberOfGuesses;
        }
    else if (usersGuessedNumber > randomNumber)
        {
            document.getElementById("feedback1").innerHTML = tooBigMessage;
            document.getElementById("feedback2").innerHTML = tryAgainMessage;
        }
    else if (usersGuessedNumber < randomNumber)
        {
            document.getElementById("feedback1").innerHTML = tooSmallMessage;
            document.getElementById("feedback2").innerHTML = tryAgainMessage; 
        }
}