using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace selectionStructureifelse
{
    class Program
    {
        static void Main(string[] args)
        {

            int guess;
            int yourNumber = 10; 
            Console.WriteLine("Please enter a number");
            guess = Convert.ToInt32(Console.ReadLine());// converting into an integer and saving it in a variable

            if (guess > yourNumber) // if they guess high
            {
                Console.WriteLine("I was thinking of a lower number");
            }
            else if (guess < yourNumber)
            {
                Console.WriteLine("I was thinking a higher number");// if they guess low
            }
                 else 
                {
                     Console.WriteLine("yes you are correct");
                }



        }
    }
}
