import requests
import json

url = 'http://localhost:5053/predict'

# Make sure the features array matches the input size expected by your model
# The weekdays will be ordered in alpha order after the getDummies() function
# So they are already Friday, Mon, Sat, sun, thur, tues, wed
features = [11251, 6.3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0]

# Creating the payload (the data to send in the POST request)
payload = {'features': features}

# Sending the POST request with JSON data
response = requests.post(url, json=payload)

# Printing the response from the server
if response.status_code == 200:
    print(f"Prediction: {response.json()['prediction']}")
else:
    print(f"Failed to get prediction, status code: {response.status_code}")
