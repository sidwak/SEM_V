from flask import Flask, request, jsonify
from keras.src.saving import load_model
from sklearn.preprocessing import StandardScaler
import numpy as np
import pickle

app = Flask(__name__)

# Load the model and scaler
model = load_model('calorie_prediction_model.keras')
#scaler = StandardScaler()  # Ensure you have the same scaler used during training
scaler = None
with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

# Define an endpoint for predictionscd
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = np.array(data['features']).reshape(1, -1)
    features_scaled = scaler.transform(features)
    prediction = model.predict(features_scaled)
    return jsonify({'prediction': str(prediction[0][0])})

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
