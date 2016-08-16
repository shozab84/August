using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MethodsExercise
{
    class Car // decalring the class (It should not be in Main)

    {

        public string make;
        public string model;
        public int price;
        public Boolean sold;
        public static int numberOfCars;// static property

        public void AddCar(string make, string model, int price)// creating AddCar method to add some cars to the program
        {
            this.make = make;
            this.model = model;
            this.price = price;
            this.sold = false;
            Car.numberOfCars++;
            
        }
                
    }

    class Program
    {
        static void Main(string[] args)
        {

            // Instantiating Car object

            Car car1 = new Car();
            car1.AddCar("Honda", "Jazz", 18000);  //calling AddCar method and passing values in it
            car1.AddCar("Mercedes", "SLX", 40000);
            car1.AddCar("Maruti", "swift", 9000);



        }
    }
}
