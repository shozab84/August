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

            List<string> mybooks = new List<string>() { "The hunger games", "catching fire", "The alchemist", "who moved my cheese" };// creating a list of books
            Console.WriteLine("Press A, D, L, S if you want to Add/ Delete/ List / Sort through the list");
            Console.WriteLine("to exit, press x");
            string userinput = Console.ReadLine().ToLower();


            do
            {

                switch (userinput)
                {
                    case "a":
                        Console.WriteLine("Please enter the name of the book you want to add");// showing user text on screen
                        string bookToAdd = Console.ReadLine();// reading user input from the screen
                        mybooks.Add(bookToAdd);//doing addition to the booklist
                        Console.WriteLine(bookToAdd + " has been added to the list");// giving user confirmation
                        break;

                    case "d":
                        Console.WriteLine("Please enter the name of the book you want to delete");
                        string deletion = Console.ReadLine();
                        mybooks.Remove(deletion);// doing deletion from the list
                        break;

                    case "l":
                        foreach (string bookTitle in mybooks)
                        {
                            Console.WriteLine(bookTitle);// showing the list of books
                        }

                        break;


                    case "s":
                        mybooks.Sort();// sorting books in the list
                        Console.WriteLine("Books have been sorted");
                        break;
                        
                    default:
                        break;

                }

                Console.WriteLine("What would you like to do next: A, D, L. S or X?:");// showing user the Menu item so that he can make a choice again
                userinput = (Console.ReadLine().ToLower());

            }

            while (userinput != "x");
                             

            


        }
    }
}
