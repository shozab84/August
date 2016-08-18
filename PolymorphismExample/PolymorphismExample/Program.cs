using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PolymorphismExample
{


    class Polygon
    {
        public virtual void Draw()                  //Polymorphic method 
        {
            Console.WriteLine("Drawing a Polygon");
        }
    } // end of class Polygon   


    

    class Rectangle : Polygon
   { 

        public override void Draw()

    { 
        Console.WriteLine( "Drawing a Rectangle.");

    }

   }// end of rectangle class


    class Triangle : Polygon
    {

        public new void Draw()// Polymorphic method
        {
            Console.WriteLine("Drawing a Triangle");

        }

    }


    class Program
    {
        static void Main(string[] args)
        {

            // creating a List of Polygons

            List<Polygon> polygons = new List<Polygon>();
            polygons.Add(new Polygon()); 
            polygons.Add(new Rectangle()); // rectangle is cast as a Polygon
            polygons.Add(new Triangle()); // Triangle is cast as a Polygon

            foreach (Polygon p in polygons)
            {
                p.Draw();

            }

            Triangle traingle1 = new Triangle();
            traingle1.Draw();

        }
    }
}
