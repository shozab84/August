using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IterationStructure
{
    class Program
    {
        static void Main(string[] args)
        {
            string answer = "to get to the other side";
            Console.WriteLine("I've got a riddle for you. Why did the chicken cross the road?");
            string response = Console.ReadLine().ToLower();

                       
            while (response != answer)
                {
                    Console.WriteLine("Please try again");
                    response = Console.ReadLine().ToLower();
                }

               


            }

            else
            
            
            /*
         

            }

            string secondRiddle;

            do
            {

                Console.WriteLine("I have got another riddle for you. What's the yellow and dangerous");// user input control loop
                secondRiddle = Console.ReadLine().ToLower();

            }
            while  
            */
        }
    }
}
