﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace webservicesp1n1
{
    public partial class EvenOddWebForm : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            defaultmain webService = new defaultmain();
            int number = Int32.Parse(input1.Text);
            resultLbl.Text = webService.CheckEvenOdd(number);
        }
    }
}