from flask import Flask, jsonify, make_response, request
from flask_cors import CORS, cross_origin
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
   return jsonify(room1)

@app.route('/')
def hello():
   return "hello"

@app.route("/book", methods = ['POST'])
def bookReservation():
   print(request.json)
   rres = make_response("booked")
   rres.headers['Content-Type'] = 'text/plain'
   return rres

if __name__ == '__main__':
   app.run()