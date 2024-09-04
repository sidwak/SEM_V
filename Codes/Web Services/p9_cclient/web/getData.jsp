<%-- 
    Document   : getData
    Created on : Sep 4, 2024, 9:34:36 PM
    Author     : Siddhesh
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Get Data</title>
        <script>
            //take id from request to display data
            <% String id_str = request.getParameter("id"); %>
            var id = <%=id_str%>
            var request =new XMLHttpRequest();

            request.open('GET','http://localhost:8080/p9/webresources/mainpackage.usertable'
            );

            request.onload=function()
            {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(this.response,"text/xml");
                var x=xmlDoc.getElementsByTagName("usertable");
                console.log(x);
                console.log(id);

                //for displaying only required id data
                var table=document.getElementById("myTable");
                var row=table.insertRow(-1);
                var cell1=row.insertCell(0);
                var cell2=row.insertCell(1);

                console.log(xmlDoc.getElementsByTagName("usertable")[id-
                1].childNodes[0].firstChild.nodeValue)

                cell1.innerHTML=xmlDoc.getElementsByTagName("usertable")[id-
                1].childNodes[1].firstChild.nodeValue;

                cell2.innerHTML=xmlDoc.getElementsByTagName("usertable")[id-
                1].childNodes[0].firstChild.nodeValue;

            };
            request.send();
        </script>
    </head>
    <body>
        <center>
            <table id="myTable" border="1" cellpadding="5" cellspacing="3"
            width="50%">
            <tr>
                <th>ID</th>
                <th>First Name</th>
            </tr>
            </table>
        </center>
    </body>
</html>