//Mini Project (Arrays): Random winner generator       
        //http://lite-support.co.uk/dev/published/randomwinnergenerator/rwg.html
        //Users can input elements into an array and then select a random winner //from that array and display it on the screen

// declare an array

var names =[];

//set up event handler for "Add name" button
var event1=document.getElementById("nameButton");
event1.addEventListener('click',getName, false);


// declaring function getName
function getName(){
	
	var name = document.getElementById("nameInput").value;// getting value from text box
	
	// add it to array
	names.push(name);
	
	//create an output string for the array
	
	var textString="";
	
	for (var i =0; i<names.length;i++)
	{
		textString += "<li>" + names[i] + "</li> <br/>";
		
			
	}
	
	  //display the contents of the array
    document.getElementById("namesList").innerHTML = textString;
	
	// declaring function chooseWinne
	
	
}

var event2=document.getElementById("winnerButton");
event2.addEventListener('click',chooseWinner, false);

function chooseWinner(){
		//choose a random number between 1 and the length of the array
		
		var winner = names[Math.floor(Math.random() * names.length)];

		
		//display the name of the winner
		
		document.getElementById("winnerDisplay").innerHTML = "The winner is " + winner;
				
		
	}