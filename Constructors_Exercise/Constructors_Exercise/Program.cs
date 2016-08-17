using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarSalesStaticMethods
{
    class Program
    {

        // here we will write our Car class (naming starts with capital letter)
        class Car
        {
            public string make;
            public string model;
            public int price;
            public Boolean sold;

            public static int numberOfCars;

            // we will create a constuctor to add the car details

            public Car(string make, string model, int price)
            {
                this.make = make;
                this.model = model;
                this.price = price;
                this.sold = false;
                numberOfCars++;// increment the numberOfCars each time a new car details is added when calling this Add car method

            }
            // next step is to make a ListCar method -it will be used to display the details of the car
            public void ListCar()
            {
                //display details of an individual car
                Console.WriteLine("The details of the car are:");
                Console.WriteLine("Make and Model: {0}{1}, price: £{ 2:N0}.", make, model, price);
                if (sold)
                {
                    Console.WriteLine("This car has been sold");
                }
                else
                {
                    Console.WriteLine("This car has not yet been sold");
                }

                Console.WriteLine();

            }


            // creating a Sold Method for -recording the sale of the car
            public void Sold(bool isSold, int price)
            {
                this.sold = isSold; // we have already declared sold in Car class
                this.price = price;
            }

            //list all cars

            public static void ListAllCars(List<Car> allCars)// classes can be used as datatype that's why we have used Car class as datatype while creating list
            {
                int totalValueSold = 0;
                int totalValueInStock = 0;

                foreach (Car item in allCars)
                {
                    Console.WriteLine("The details of this car are: ");
                    Console.Write("Make and model: {0} {1}, price: £{2:N0}.", item.make, item.model, item.price);  //:N0 formats the number
                    if (item.sold)
                    {
                        Console.WriteLine("This car has been sold.");
                        totalValueSold += item.price;
                    }
                    else
                    {
                        Console.WriteLine("This car is unsold.");
                        totalValueInStock += item.price;
                    }
                    Console.WriteLine();
                }
                Console.WriteLine("The total value of cars sold is: £{0:N0}.", totalValueSold);
                Console.WriteLine("The total value of cars still in stock is: £{0:N0}.", totalValueInStock);
                Console.WriteLine();
            }




        }// Car class ends

                
        static void Main(string[] args)
        {

            Car.numberOfCars = 0;
            List<Car> allCars = new List<Car>();


            //adding cars
            
            
            // Car1 object is created and Now calling the constructor
            Car car1 = new Car("RollsRoyce", "Silver Cloud", 35000);
            //Its simple we are just adding value to a list
            allCars.Add(car1);

            Car car2= new Car("Aston Martin", "DB5", 750000);
            allCars.Add(car2);

            Car car3 = new Car("Reliant", "Robin", 550);
            allCars.Add(car3);

            //display cars data
            Console.WriteLine("Total number of cars in stock is: {0}", Car.numberOfCars);
            Console.WriteLine();

            Car.ListAllCars(allCars);

            //record the sale of a car
            car3.Sold(true, 350);

            //display cars data
            Console.WriteLine("Total number of cars in stock is: {0}", Car.numberOfCars);
            Console.WriteLine();

            Car.ListAllCars(allCars);








        }//static ends here

    }//Program ends here
}//namespace ends here
