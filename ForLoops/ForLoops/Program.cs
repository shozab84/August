using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForLoops
{
    class Program
    {
        static void Main(string[] args)
        {
            int i;
            string[] sevenDwarves = { "Happy", "Doc", "Sleepy", "Dopey", "Bashful", "Grumpy" };
            for (i = 0; i < sevenDwarves.Length; i++) // tell each dwarf by name that dinner is ready using for loop
            {
                Console.WriteLine("Here is your dinner " + sevenDwarves[i]);

            }

            foreach (string dwarf in sevenDwarves)// tell each dwarf that his drink is ready using foreach loop
            {
                Console.WriteLine("And here is a nice warm drink," + dwarf);
            }

            // Extention
            for (i = 0; i < sevenDwarves.Length; i++)
            {
                Console.WriteLine("What do you want for dinner, " + sevenDwarves[i]+ "?");
                String response = Console.ReadLine();
                Console.WriteLine(sevenDwarves[i]+ ", your " + response + "is ready." );
            }
                
        }
    }
}
