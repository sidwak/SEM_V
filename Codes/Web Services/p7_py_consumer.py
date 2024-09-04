from zeep import Client

wsdl_url = "http://localhost:8080/p7/MainService?WSDL"
client = Client(wsdl=wsdl_url)

d = int(input("Enter number to calculate factorial for: "))
result = client.service.getFactorial(d)
print(f"The factorial of number {d} is:",result)