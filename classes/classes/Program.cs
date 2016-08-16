using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication3
{

    class Car // decalring the class (It should not be in Main)

    {

        public string name;
        public string model;
        public string price;
        public bool sold;

        public static int carsSold;// static property

    }

    class Program
    {
        static void Main(string[] args)
        {
            //add car data
            Car myCar1 = new Car(); 
            myCar1.name = "Honda";
            myCar1.model = "Jazz";
            myCar1.price = "18000";
            Car.carsSold = 0;
            Car.carsSold++;

            //add second car data
            Car myCar2 = new Car();
            myCar2.name = "Mercedes";
            myCar2.model = "SLX";
            myCar2.price = "35000";
            Car.carsSold++;

            //add third car data
            Car myCar3 = new Car();
            myCar3.name = "Ford";
            myCar3.model = "fiesta";
            myCar3.price = "13000";
            Car.carsSold++;

            Console.WriteLine("The details of the first Car is: " + myCar1.name + " " + myCar1.model + " " +"£"+ myCar1.price);
            Console.WriteLine("The details of the first Car is: " + myCar2.name + " " + myCar2.model + " " + "£" + myCar2.price);
            Console.WriteLine("The details of the first Car is: " + myCar3.name + " " + myCar3.model + " " + "£" + myCar3.price);
            Console.WriteLine("Total number of cars: " + Car.carsSold );
        }


    }
} 