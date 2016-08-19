using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cSharpAssessment2
{
    class Program
    {

        //Write a console application that prompts the user to enter as many integers as they want to, 
        //then offers them the choice of getting the average of the list, displaying the list, sorting the list or exiting the program.
        static void Main(string[] args)
        {
            List<int> numberList = new List<int>();  // creating a list to pass all numbers entered by the user
            Console.WriteLine("Would you like to add a number to the list? (y/n):");
            string response = Console.ReadLine().ToUpper();
            string answer="";

            do
            {

                if (response == "Y")
                {



                    do
                    {

                        Console.WriteLine("Please enter a number, followed by return:");
                        int userinput = Convert.ToInt32(Console.ReadLine());
                        numberList.Add(userinput);


                        Console.WriteLine("Would you like to add a number to the list? (y/n):");
                        response = Console.ReadLine().ToUpper();





                    } while (response == "Y");

                }
                else
                {



                    Console.WriteLine("Type ‘A’ to get the average of the list, ‘S’ to sort it, or ‘X’ to exit:");
                    answer = Console.ReadLine().ToUpper();

                    switch (answer)

                    {
                        case "A":// for calculating average

                            double avg = numberList.Average();// calculates the average of numbers in the list
                            Console.WriteLine("The average is: " + avg);
                            break;


                        case "D": // I have used foreach loop for displaying the list


                            foreach (int i in numberList)

                            {
                                Console.WriteLine(i);

                            }

                            break;


                        case "S":

                            numberList.Sort(); // here we are calling a sorting method
                            break;

                    } // switch ends here  

                }//end if else

            } while (answer != "X");













        }// main ends here
    }// program ends here
}//namespace ends here
