using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using webservicesp1n2.EvenOddWebService;

namespace webservicesp1n2
{
    public partial class MainForm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            defaultmainSoapClient webService = new defaultmainSoapClient();
            int number = Int32.Parse(input1.Text);
            resultLbl.Text = webService.CheckEvenOdd(number);
        }
    }
}