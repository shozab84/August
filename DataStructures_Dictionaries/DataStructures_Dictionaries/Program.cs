using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructures_Dictionaries
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> codingLanguages = new Dictionary<string, string>();
            codingLanguages.Add("HTML", "Hyper Text Markup Language");
            codingLanguages.Add("CSS", "Cascading Style Sheets");
            Console.WriteLine("This program contains a  dictionary of coding languages");
            Console.WriteLine("To check a key in the dictionary, press K" );
            Console.WriteLine("To check a value in the dictionary, press V ");
            Console.WriteLine("To lookup a key in the dictionary, press L");
            Console.WriteLine("To count the list in the dictionary, press C");
            Console.WriteLine("To exit, press x");
            string userinput = Console.ReadLine().ToUpper();

            do
            {

                switch (userinput)
                {
                    case "K":
                        Console.WriteLine("Please enter the key you want to check");
                        string x = Console.ReadLine();
                        if (codingLanguages.ContainsKey(x))// checking a key in the dictionary
                        {
                            Console.WriteLine("Hurray! your key is in the dictionary");
                        }
                        break;

                    case "V":
                        Console.WriteLine("Please enter the value you want to check");
                        string y = Console.ReadLine();
                        if (codingLanguages.ContainsKey(y))// checking a value in the dictionary
                        {
                            Console.WriteLine("Hurray! your value is in the dictionary");
                        }
                        break;

                    case "L":

                        Console.WriteLine("Please enter the key who's value you want to check");
                        string z = Console.ReadLine();
                        string result;
                        codingLanguages.TryGetValue(z, out result);// using key to look up a value
                        default;


                    case "C":

                       string dictionayLength;
                       dictionaryLength = codingLanguages.Count;
                        

                    default:
                     break;


                }//end swtich statement
            } while (userinput != "X");




        }//end main
    }//end program class
}//end namespace
