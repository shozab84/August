using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datastructurecollectionlist
{
    class Program
    {
        static void Main(string[] args)
        {

            List<string> books = new List<string>() { "The hunger games", "catching fire", "The alchemist", "who moved my cheese" };
            Console.WriteLine("This program contains a list of books");
            foreach( string book in books)
            {
                Console.WriteLine(book);
            }


            Console.WriteLine();
            Console.WriteLine("Press A, D, L, S if you want to Add/ Delete/ List / Sort through the list");
            string userinput = Console.ReadLine().ToLower();  

            switch(userinput)
            {
                case "a":
                    Console.WriteLine("Please enter the name of the book you want to add");
                    string addition = Console.ReadLine();
                    books.Add(addition);
                    break;

                case "d":
                    Console.WriteLine("Please enter the name of the book you want to delete");
                    string deletion = Console.ReadLine();
                    books.Add(deletion);
                    break;
                    
                case "l":
                    break;
                    

                case "s":

                    books.Sort();
                    break;

                default:
                    break;  

            }

           

        }
    }
}
