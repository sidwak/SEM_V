using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Services;
using ConsoleApp1.defaultmain;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello this will consume a web service");
            defaultmainSoapClient client = new defaultmainSoapClient();
            //Console.Write("Enter rupees amount to convert to dollar: ");
            //string arg1 = Console.ReadLine();
            //int amount = int.Parse(arg1);
            //Console.WriteLine("To dollars: "+ client.ConvertToDollar(amount));
            

            Console.Write("Enter the input currency ('USD','INR','PND','CND'): ");            
            string inType = Console.ReadLine();
            Console.Write("Enter the output currency ('USD','INR','PND','CND'): ");
            string outType = Console.ReadLine();
            Console.Write(String.Format("Enter the rate for {0} to {1} conversion: ", inType, outType));
            int inRate = int.Parse(Console.ReadLine());
            Console.Write("Enter the amount: ");
            int inAmount = int.Parse(Console.ReadLine());
            string convertedAmount = client.GetCurrencyConvertion(inAmount, outType, inRate);
            Console.Write(String.Format("Converted amount to {0}: {1}", outType, convertedAmount));
            Console.ReadKey();

        }
    }
}
