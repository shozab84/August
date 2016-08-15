using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataStructure
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] numbers = new int[6];
            Console.WriteLine("Please enter 5 numbers to be averages, pressing enter everytime");

            for (int i = 1; i< numbers.Length; i++)

            {
                Console.WriteLine("Please enter {0}:", i);
                numbers[i] = Convert.ToInt32(Console.ReadLine());
            }
            Console.WriteLine("Thank you for entering 5 numbers");

            Console.WriteLine("The average of your 5 numbers is: " + (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]) / 5);
            }

        }
    }

