/*Objects and arrays quiz exercise - Your challenge is to create a small quiz using an array of objects in Javascript.  The quiz can be on any topic of your choice and no more than 5 questions. An additional challenge will be to track the users score.
You should use to build your solution: an object constructor to create quiz objects, Push objects into an array,, Use a For loop to rotate through the array and display the questions onto the DOM.
Extra features: users receive a response to their answers, storage of the correct answers, user feedback of their overall score in the quiz*/

//question constructor
function Question(text, answer1, answer2, answer3, answer4, correctAnswer)
{
    this.text = text;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correctAnswer = correctAnswer;
}
//declare empty array for questions
var questionList = [];
//declare questions 
var question1 = new Question("Who was the fairest of them all?", "The Wicked Stepmother", "The Prince","Snow White","Bashful", 3);
var question2 = new Question("Who thought a girl would never guess his name?", "Prince Charming", "The Beast","Jack","Rumplestiltskin", 4);
var question3 = new Question("Who slept for 100 years?","Rip Van Winkle","Sleeping Beauty","The Little Mermaid","The Fairy Godmother",2);

//add questions to array
questionList.push(question1);
questionList.push(question2);
questionList.push(question3);

//put required html tags into arrays, so they can be used in the for loop
var tagListQuestions = ["q1","q2","q3"];
var tagListAnswers = ["q1AnswerList","q2AnswerList","q3AnswerList"];
var tagListInputs = ["q1Answer","q2Answer","q3Answer"];

//display the questions and answers
for(var i = 0; i < questionList.length; i++)
{
    document.getElementById(tagListQuestions[i]).innerHTML = questionList[i].text;
    document.getElementById(tagListAnswers[i]).innerHTML = 
        "<li>" + questionList[i].answer1 + "</li>" +
        "<li>" + questionList[i].answer2 + "</li>" +
        "<li>" + questionList[i].answer3 + "</li>" +
        "<li>" + questionList[i].answer4 + "</li>"
}
			
//setting up an event on the "Submit Quiz" button	
var event1 = document.getElementById("finishQuiz");
event1.addEventListener('click',getAnswers, false);

// work through the user input and get all the answers

function getAnswers()
{

    var currentAnswer = 0;
    var score = 0;
    
	for(var i = 0; i < questionList.length; i++)
   {
       //get next answer
       currentAnswer = parseInt(document.getElementById(tagListInputs[i]).value);
       //if it's correct, increase the score
       if(currentAnswer === questionList[i].correctAnswer)
       {
           score++;
       }
   }
   //display the score
   document.getElementById("result").innerHTML = "You scored " + score + " out of " + questionList.length;

}
	

		
			
			
		
	

