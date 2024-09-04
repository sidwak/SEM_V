<%-- 
    Document   : delData
    Created on : Sep 4, 2024, 9:34:46 PM
    Author     : Siddhesh
--%>


<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Delete data</title>
    </head>
    <body>
        <%@page import="mainpackage.DeleteData"%>
        <%
            String id = request.getParameter("id");
            DeleteData.deldata(id);
        %>
    </body>
    </html>