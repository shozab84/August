using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SwitchExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            String nextPresident;
            Console.WriteLine("Hillary Clinton, Donald Trump and Ted Cruz are running for the next president of the united states");
            Console.WriteLine("Who do you think will win?");

            nextPresident = Console.ReadLine().ToLower();


            switch (nextPresident)
            {
                case "hillary clinton":
                case "clinton":
                case "hillary":
                
                    Console.WriteLine("She is one of my favorite candidate");
                    break;
                case "Donald Trump":
                    Console.WriteLine("He don't know what he is talking about most of the time");
                    break;
                case "Ted Cruz":
                    Console.WriteLine("I don't know much about him");
                    break;

                default:
                    Console.WriteLine("You have entered the wrong option");
                    break;
            }

            
            }


        }
    }

