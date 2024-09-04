<%-- 
    Document   : output
    Created on : Sep 4, 2024, 7:42:00 PM
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
        <%-- start web service invocation --%><hr/>
        <%
            mainpackage.MainService_Service service = new mainpackage.MainService_Service();
            mainpackage.MainService port = service.getMainServicePort();
            double percent = Double.parseDouble(request.getParameter("percent").toString());
            String result = port.toGrade(percent).toString();
            out.println("<h1>Your Grade is: "+result);
        %>
    </body>   
</html>
