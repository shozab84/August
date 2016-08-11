/*Interest only calculator

Create a small Javascript programme that enables users to calculate the interest they would pay on borrowing some money for a period of time at a fixed interest rate.

There are 3 inputs, amount to borrow, interest rate, length of time of loan

Calculate and display the monthly interest payment on the loan and the total interest paid on the loan for the length of time of loan.*/

// declare a variable for listening to buttonCalculate
var event1 = document.getElementById("buttonCalculate");

//setup event listner

event1.addEventListener('click', calculateInterest, false);


function calculateInterest(){
	
	// get user input for Loan amount
	
	var loanAmount = document.getElementById("tbLoan").value;
	var loan = parseInt(loanAmount);
	
	// get user input for Interest rate
	
	var interestRate = document.getElementById("tbRate").value;
    var rate = parseInt(interestRate);
	
	
	// get user input for term
	
	var years = document.getElementById("tbTerm").value;
    var term = parseInt(years);
	
	// Interest calculation
	
	 var totalInterest = (loan * (rate/100) * term).toFixed(2);
     var monthlyRepayment = (totalInterest/(term * 12)).toFixed(2);
	
	// displaying output in HTML
	
	document.getElementById("feedback1").innerHTML = "Your monthly interest payment will be £"+ monthlyRepayment;
	
	document.getElementById("feedback2").innerHTML = "Your total interest will be £"+ totalInterest;
	
		
	
	
}

