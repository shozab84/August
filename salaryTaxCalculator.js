// Assessment exercise - Salary Tax calculator

//setting up event listener

var event1 = document.getElementById("submitText");
event1.addEventListener('click', taxcal, 'false');


//calling function - taxcalculator

function taxcal(){
	

   // getting the gross salary amount entered by user from HTML and assigning it to a variable
	
	var grossSalary = document.getElementById("inputTextBox").value;
	var gross = parseInt(grossSalary);
	
			
	// calculating tax paid at 20% salary bracket
	
	if (gross> 11000) // tax is calculated at 20% (basic)  on gross earning between 11000 and 43,000 pounds
	{
	
		var taxPaid20 = ((gross - 11000)/5).toFixed();
	}
	
	else 
	{
	   var taxPaid20 = 0;
	}
		
	
	// calculating tax paid at 40% salary bracket
	
	if((gross > 43000) && (gross <= 150000)) // tax is calculated at 40% (higher rate)  on gross earning between 43,000 pounds and 150,000 ppounds
		
		{
			var taxPaid40 = ((gross- 43000)*0.4).toFixed();
		}
	else
		{
			var taxPaid40 = 0;
		}
	
	
	if (gross > 150000) // tax calculated at 45% on gross earnning over 150,000 pounds
		
		{
			var taxPaid45 = ((gross- 150000)*(45/100)).toFixed();
		}
	else
		{
			var taxPaid45 = 0;
		}
	

	// calculating NI paid 
	
	if (gross > 8060) // NI is calculated at 12% on gross earning between between £8,060 and £43,000

	{
	
		var niPaid12 = ((gross - 8060)*(12/100)).toFixed();
	}
	
	else 
	{
	   var niPaid12 = 0;
	}
		
	
	
	if (gross > 43000) // NI is calculated at 2% on gross earning over £43,000

	{
	
		var niPaid2 = ((gross - 43000)*(2/100)).toFixed();
	}
	
	else 
	{
	   var niPaid2 = 0;
	}
	
		
	
	
	var totalTax =  parseInt(taxPaid20) + parseInt(taxPaid40) + parseInt(taxPaid45);
	//var netSalary =  gross - totalTax;
	
	var totalNi =  parseInt(niPaid12) + parseInt(niPaid2);
	
	var netSalary =  gross - totalTax - totalNi;
	
	
	
    
//Displaying the gross salary amount on the HTML document

  document.getElementById("gsSal").innerHTML= gross;
    
//Displaying the tax free allowance on the HTML document
  document.getElementById("TxFrAll").innerHTML= 11000;

//Displaying the tax paid at 20% on the HTML document
  document.getElementById("txPd20").innerHTML= taxPaid20;

//Displaying the tax paid at 40% on the HTML document
  document.getElementById("txPd40").innerHTML= taxPaid40;

//Displaying the tax paid at 45% on the HTML document
  document.getElementById("txPd45").innerHTML= taxPaid45;
		
//Displaying the NI paid at 12% on the HTML document
  document.getElementById("nipd12").innerHTML= niPaid12;
	
//Displaying the NI paid at 2% on the HTML document
  document.getElementById("nipd2").innerHTML= niPaid2;
	
//Displaying the net salary after deducting taxes and NI on the HTML document
  document.getElementById("nSal").innerHTML= netSalary;	
	
}
