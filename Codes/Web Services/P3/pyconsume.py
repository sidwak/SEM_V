from zeep import Client
url = "http://localhost:50438/defaultmain.asmx?wsdl"
client = Client(wsdl=url)
print("Math Operation")
opr1 = int(input("Enter operand 1: "))
opr2 = int(input("Enter operand 2: "))
whichOpr = input("Enter which operation (*,/,-,+): ")
result = client.service.DoMath(opr1, opr2, whichOpr)
print("Output:",result)
