import pandas as pd
import numpy as np
import tensorflow as tf
import datetime as dt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error
from keras.src.layers import Dense
from keras.src.layers import Input
from keras.src.models import Model
from keras.src.saving import load_model
import pickle

data = pd.read_csv('dailyActivity_merged.csv')

unnecessarydata = [
    'Id','TotalSteps','VeryActiveDistance',
    'ModeratelyActiveDistance','LightActiveDistance',
    'SedentaryActiveDistance','TotalSteps', 'TotalDistance',
    'TrackerDistance', 'LoggedActivitiesDistance', 'Calories'
]

# Spliting features and target
X = data.drop(unnecessarydata, axis=1)
y = data['Calories']

X["ActivityDate"] = pd.to_datetime(X['ActivityDate'])
X["ActivityDate"] = X["ActivityDate"].dt.day_name()
# One-hot encoding the 'ActivityDate' column
X = pd.get_dummies(X, columns=['ActivityDate'])

#print(X.info())
#print(X.head(3))
#print(y.head(3))
"""
#   Column                  Non-Null Count  Dtype
---  ------                  --------------  -----
0   VeryActiveMinutes       457 non-null    int64
1   FairlyActiveMinutes     457 non-null    int64
2   LightlyActiveMinutes    457 non-null    int64
3   SedentaryMinutes        457 non-null    int64
4   ActivityDate_Friday     457 non-null    bool 
5   ActivityDate_Monday     457 non-null    bool 
6   ActivityDate_Saturday   457 non-null    bool 
7   ActivityDate_Sunday     457 non-null    bool
8   ActivityDate_Thursday   457 non-null    bool
9   ActivityDate_Tuesday    457 non-null    bool
10  ActivityDate_Wednesday  457 non-null    bool

The weekdays will be ordered in alpha order after the getDummies() function
"""

# Spliting the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Normalizing the numerical features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

isTrain = False
if isTrain:
    # Defining the input layer
    inputs = Input(shape=(X_train.shape[1],))
    # Defining hidden layers
    x = Dense(64, activation='relu')(inputs)
    x = Dense(32, activation='relu')(x)

    # Defining the output layer
    outputs = Dense(1)(x)

    # Creating the model
    model = Model(inputs=inputs, outputs=outputs)

    # Compiling the model
    model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mae'])

    # Training the model
    model.fit(X_train, y_train, epochs=100, batch_size=32, validation_split=0.2)

    # Evaluating the model
    loss, mae = model.evaluate(X_test, y_test)
    print(f'Mean Absolute Error: {mae}')

    model.save('calorie_minutes_prediction_model.keras')
else:
    model = load_model('calorie_minutes_prediction_model.keras')

    y_pred = model.predict(X_test)

    with open('minutes_model_scaler.pkl', 'wb') as f:
        pickle.dump(scaler, f)

    mse = mean_squared_error(y_test, y_pred)
    print(f'Mean Squared Error: {mse}')

    for i in range(5):
        print(f"Predicted: {y_pred[i][0]:.2f}, Actual: {y_test.iloc[i]}")