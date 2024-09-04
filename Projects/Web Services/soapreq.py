import requests
# SOAP request URL
url = "http://localhost:8080/ws"
 
# structured XML
payload = """
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:gs="mainService">
<soapenv:Header/>
<soapenv:Body>
<gs:GetHelloRequest>
<gs:message>Spain</gs:message>
</gs:GetHelloRequest>
</soapenv:Body>
</soapenv:Envelope>"""
# headers
headers = {
    'Content-Type': 'text/xml; charset=utf-8'
}
# POST request
response = requests.request("POST", url, headers=headers, data=payload)
 
# prints the response
print(response.text)
print(response)