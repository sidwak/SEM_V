using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace webservicesp1n1
{
    /// <summary>
    /// Summary description for defaultmain
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class defaultmain : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        public string CheckEvenOdd(int num)
        {
            if (num % 2 == 0) 
            {
                return "Number is even";
            }
            return "Number is odd";
        }

        [WebMethod]
        public string ConvertToDollar(int num)
        {
            return ((float)num / (float)89).ToString() + "$";
        }

        [WebMethod]
        public string GetCurrencyConvertion(int inAmount, string outType, int outRate)
        {
            float convertedAmount = (float)inAmount / (float)outRate;
            return (convertedAmount).ToString() + "$";
        }
    }
}
