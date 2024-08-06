import pandas as pd

# Sample DataFrame
data = pd.DataFrame({
    'weather': ['shine', 'cold', 'rain'],
    #'day': ['M', 'T', 'W', 'F', 'R', 'S', 'U']
    'day': ['M', 'T', 'W']
})

# One-hot encode the 'weather' column
weather_encoded = pd.get_dummies(data['weather'], prefix='weather')
print(weather_encoded)

# One-hot encode the 'day' column
day_encoded = pd.get_dummies(data['day'], prefix='day')

# Concatenate the encoded columns with the original DataFrame
data_encoded = pd.concat([data, weather_encoded, day_encoded], axis=1)

# Drop the original categorical columns
data_encoded.drop(['weather', 'day'], axis=1, inplace=True)

print(data_encoded)
