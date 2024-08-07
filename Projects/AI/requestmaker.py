import requests
import json

# Define the URL for the POST request
#url = 'http://localhost:5000/predict'
url = 'http://localhost:5051/predict'

# Create a sample feature input
# Make sure the features array matches the input size expected by your model
# The weekdays will be ordered in alpha order after the getDummies() function
# So they are already Friday, Mon, Sat, sun, thur, tues, wed
features = [11251, 6.3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0]  # Example features

# Create the payload (the data to send in the POST request)
payload = {'features': features}

# Send the POST request with JSON data
response = requests.post(url, json=payload)

# Print the response from the server
if response.status_code == 200:
    print(f"Prediction: {response.json()['prediction']}")
else:
    print(f"Failed to get prediction, status code: {response.status_code}")
