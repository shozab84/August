using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace errorHandling1
{
    class Program
    {
        static void Main(string[] args)
        {
            int firstNumber = 5;
            int secondNumber = 0;
            int result;

            result = firstNumber / secondNumber;
            /*try
            {
                result = firstNumber / secondNumber;

            }

            catch (DivideByZeroException e)
            {
                Console.WriteLine(e.ToString());

            }

            finally
            {
                Console.WriteLine("\nthe rest of the program");
            }
            */
        }
    }
}
