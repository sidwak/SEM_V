<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EvenOddWebForm.aspx.cs" Inherits="webservicesp1n1.EvenOddWebForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:Label ID="Label1" runat="server" Text="Enter the number"></asp:Label>
        <asp:TextBox ID="input1" runat="server"></asp:TextBox>
        <div>
            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Check" />
            <br />
            <asp:Label ID="resultLbl" runat="server"></asp:Label>
        </div>
    </form>
</body>
</html>
