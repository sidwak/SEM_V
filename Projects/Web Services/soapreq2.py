from zeep import Client

wsdl = "http://localhost:8080/ws/helloworld.wsdl"
client = Client(wsdl=wsdl,)


dataa = {
    "message": "hoidnfdf"
}
response = client.service.GetHello(**dataa)


""" mainReq = {
    "fullName": "Alex John",
    "email": "alex@email.com",
    "phone": "232498094814",
    "roomType": "1bed",
    "stayRange": {'startDate': '2024-08-21', 'endDate': '2024-08-29'}
}
response = client.service.getRoomBook(**mainReq)
print(response)
print(type(response)) """


""" mainReq = {
    "bookingId": "37017050",
    "fullName": "Alex Jonas",
    "email": "alex@email.com",
    "phone": "232498094814",
    "roomType": "1bed",
    "stayRange": {'startDate': '2024-08-21', 'endDate': '2024-08-29'}
}
response = client.service.getReservModify(**mainReq)
print(response)
print(type(response)) """


""" mainReq = {
    "bookingId": "37017050"
}
response = client.service.getReservIsValid(**mainReq)
print(response) """


""" mainReq = {
    "bookingId": "37017050"
}
response = client.service.getReservDetails(**mainReq)
print(response) """



""" mainReq = {
    "message": "hello"
}
response = client.service.getRooms(**mainReq)
print(response)
print(type(response)) """



""" mainReq = {
    "bookingId": "56466688"
}
response = client.service.getReservCancel(**mainReq)
print(response) """