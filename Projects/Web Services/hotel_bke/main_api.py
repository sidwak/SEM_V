from flask import Flask, jsonify, make_response, request
from flask_cors import CORS, cross_origin
from zeep import Client
wsdl = "http://localhost:8080/ws/helloworld.wsdl"
client = Client(wsdl=wsdl,)
app = Flask(__name__)
CORS(app)

room1 = [{
   "r_name": "The Grand Lux",
   "r_desc": "Best living of your life",
   "r_img": "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
   "r_price": "500"
},
{
   "r_name": "The Grand Lux",
   "r_desc": "Best living of your life",
   "r_img": "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
   "r_price": "500"
},
{
   "r_name": "The Grand Lux",
   "r_desc": "Best living of your life",
   "r_img": "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
   "r_price": "500"
},
{
   "r_name": "The Grand Lux",
   "r_desc": "Best living of your life",
   "r_img": "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
   "r_price": "500"
},
{
   "r_name": "The Grand Lux",
   "r_desc": "Best living of your life",
   "r_img": "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg",
   "r_price": "500"
},]

@app.route('/rooms')
def hello_world():
   mainReq = {
      "message": "hello"
   }
   response = client.service.getRooms(**mainReq)
   rres = []
   indx = 0
   for i in response:
      room = {
         "r_name": i['r_name'],
         "r_desc": i['r_desc'],
         "r_img": i['r_img'],
         "r_price": i['r_price']
      }
      rres.append(room)
      indx =+ 1
   print(rres)
   return jsonify(rres)

@app.route('/')
def hello():
   return "hello"

@app.route("/book", methods = ['POST'])
def bookReservation():
   print(request.json)
   print(type(request.json))
   mainReq = {
      "fullName": request.json['fullName'],
      "email": request.json['email'],
      "phone": request.json['phoneNo'],
      "roomType": request.json['roomType'],
      "stayRange": {'startDate': request.json['stayRange']['startDate'], 'endDate': request.json['stayRange']['endDate']}
   }
   print(mainReq)
   response = client.service.getRoomBook(**mainReq)
   print(response)
   rres = make_response(response)
   rres.headers['Content-Type'] = 'text/plain'
   #rres.headers.extend({'isBooked': "BookingConfirm"})
   #rres.headers.add("Access-Control-Expose-Headers","Authorization") 
   #cors and fetch issuse, rather use res.body
   return rres

@app.route("/getReservationDetails", methods = ['POST'])
def getReservationDetails():
   mainReq = {
      "bookingId": request.json['bookingId']
   }
   response = client.service.getReservDetails(**mainReq)
   print(response)
   details = {
      "fullName": response['fullName'],
      "email": response['email'],
      "phone": response['phone'],
      "roomType": response['roomType'],
      "stayRange": {'startDate': response['stayRange']['startDate'], 'endDate': response['stayRange']['endDate']},
      "r_name": response['r_name'],
      "r_desc": response['r_desc'],
      "r_img": response['r_img'],
      "r_price": response['r_price']
   }
   return jsonify(details)

@app.route("/getReservationModified", methods = ['POST'])
def getReservationModified():
   print(request.json)
   print(type(request.json))
   mainReq = {
      "bookingId": request.json['bookingId'],
      "fullName": request.json['fullName'],
      "email": request.json['email'],
      "phone": request.json['phoneNo'],
      "roomType": request.json['roomType'],
      "stayRange": {'startDate': request.json['stayRange']['startDate'], 'endDate': request.json['stayRange']['endDate']}
   }
   print(mainReq)
   response = client.service.getReservModify(**mainReq)
   print(response)
   rres = make_response(response)
   rres.headers['Content-Type'] = 'text/plain'
   #rres.headers.extend({'isBooked': "BookingConfirm"})
   #rres.headers.add("Access-Control-Expose-Headers","Authorization") 
   #cors and fetch issuse, rather use res.body
   return rres

@app.route("/getReservationCancel", methods = ['POST'])
def getReservationCancel():
   mainReq = {
      "bookingId": request.json['bookingId']
   }
   response = client.service.getReservCancel(**mainReq)
   rres = make_response(response)
   rres.headers['Content-Type'] = 'text/plain'
   return rres

@app.route("/getReservationValid", methods = ['POST'])
def getReservationValid():
   mainReq = {
      "bookingId": request.json['bookingId']
   }
   print('bookinId',request.json['bookingId'])
   response = client.service.getReservIsValid(**mainReq)
   rres = {"reservIsValid": response}
   print(rres)
   return jsonify(rres)

if __name__ == '__main__':
   app.run()