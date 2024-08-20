import tensorflow as tf
#from tensorflow.python.keras.models import Sequential
#from tensorflow.python.keras.layers import Dense
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pandas as pd
import numpy as np
from keras.src.layers import Dense
from keras.src.layers import Input
from keras.src.models import Model
from keras.src.saving import load_model
import pickle

# Load your dataset
# Assume `data` is a pandas DataFrame containing your dataset
data = pd.read_csv('WalkTheDogs.csv')

weather_encoded = pd.get_dummies(data['Weather'], prefix='Weather')
day_encoded = pd.get_dummies(data['Day'], prefix='Day')
data_encoded = pd.concat([data, weather_encoded, day_encoded], axis=1)
data_encoded.drop(['Weather', 'Day', 'Steps'], axis=1, inplace=True)

# Prepare your dataset
# Assuming 'calories' is the label and other columns are features
X = data_encoded.drop(['Kcal', 'Id'], axis=1)
y = data_encoded['Kcal']

#print(data_encoded.head(3))

# Convert categorical variable 'with_dog' to numerical (if needed)
#X['Walk'] = X['Walk'].astype(int)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

isTrain = False
if isTrain:
    # Define the model using keras.src.Model
    inputs = Input(shape=(X_train_scaled.shape[1],))
    x = Dense(64, activation='relu')(inputs)
    x = Dense(32, activation='relu')(x)
    x = Dense(16, activation='relu')(x)
    outputs = Dense(1)(x)  # Output layer for regression
    model = Model(inputs=inputs, outputs=outputs)

    # Compile the model
    model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mae'])

    # Train the model
    model.fit(X_train_scaled, y_train, epochs=100, batch_size=32, validation_split=0.2)

    # Evaluate the model
    loss, mae = model.evaluate(X_test_scaled, y_test)
    print(f"Test MAE: {mae}")

    # Make predictions
    predictions = model.predict(X_test_scaled)

    # Save the trained model to a file
    model.save('distance_calorie_prediction_model.keras')
else:
    model = load_model('distance_calorie_prediction_model.keras')
    predictions = model.predict(X_test_scaled)
    with open('distance_scaler.pkl', 'wb') as f:
        pickle.dump(scaler, f)
    # Display some predictions
    for i in range(5):
        print(f"Predicted: {predictions[i][0]:.2f}, Actual: {y_test.iloc[i]}")