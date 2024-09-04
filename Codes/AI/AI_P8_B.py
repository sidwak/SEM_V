import numpy as np
import tensorflow as tf
#from tensorflow.keras.models import Sequential
#from tensorflow.keras.layers import Dense
from tensorflow import keras;
from keras.api.models import Sequential
from keras.api.layers import Dense

# [Hours Studied, Hours Slept]
X = np.array([[10, 7], [9, 8], [3, 7], [2, 6], [5, 6], [8, 6], [1, 5], [7, 7]])
y = np.array([1, 1, 0, 0, 1, 0, 0, 1])  # 1 = Pass, 0 = Fail

model = Sequential()

model.add(Dense(8, input_dim=2, activation="relu")) 
model.add(Dense(4, activation="relu")) 
model.add(Dense(1, activation="sigmoid"))

model.compile(loss="binary_crossentropy", optimizer="adam", metrics=["accuracy"])

model.fit(X, y, epochs=100, batch_size=2)

# Testing
new_data = np.array([[9, 8], [4, 4]]) 
predictions = model.predict(new_data)

for i, prediction in enumerate(predictions):
    print(f"Sample {i + 1}: {'Pass' if prediction > 0.5 else 'Fail'} with probability {prediction[0]:.2f}")
