<%-- 
    Document   : delData
    Created on : Sep 4, 2024, 10:14:51 PM
    Author     : Siddhesh
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%@page import="mainpackage.DeleteData"%>
        <%
            String jspId = request.getParameter("id");
            DeleteData.deleteDataOperation(jspId);
        %>
    </body>
</html>
