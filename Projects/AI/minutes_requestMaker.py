import requests
import json

# Define the URL for the POST request
#url = 'http://localhost:5000/predict'
url = 'http://localhost:6565/predict'

# Create a sample feature input
# Make sure the features array matches the input size expected by your model
# The weekdays will be ordered in alpha order after the getDummies() function
# So the they are already
features = [20, 5, 268, 805, 0, 0, 0, 1, 0, 0, 0]  # Example features

# Create the payload (the data to send in the POST request)
payload = {'features': features}

# Send the POST request with JSON data
response = requests.post(url, json=payload)

# Print the response from the server
if response.status_code == 200:
    print(f"Prediction: {response.json()['prediction']}")
else:
    print(f"Failed to get prediction, status code: {response.status_code}")
