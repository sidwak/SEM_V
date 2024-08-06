import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import datetime as dt
from pathlib import Path

#cd to current path in terminal
cv = pd.read_csv('dailyActivity_merged.csv')

necessarydata = [
    'Id','ActivityDate','TotalSteps','VeryActiveMinutes',
    'FairlyActiveMinutes','LightlyActiveMinutes',
    'SedentaryMinutes','Calories'
]
cv = cv[necessarydata]
cv.rename(columns={'ActivityDate':'Date'},inplace=True)
cv['TotalMinutes'] = cv['FairlyActiveMinutes'] + cv['LightlyActiveMinutes'] + cv['SedentaryMinutes']+ cv['VeryActiveMinutes']
cv['TotalHours'] = np.round(cv['TotalMinutes']/60)
cv['Date'] = pd.to_datetime(cv['Date'])
cv['DayOfWeek'] = cv['Date'].dt.day_name()

print(cv.head(2),end="\n\n")
print("Info the dataset:\n",cv.info(),end="\n\n")
print("Checking if there are any null values:\n",cv.isnull().sum(),end="\n\n")
print("Checking if there are any duplicate values:\n",cv.duplicated().sum(),end="\n\n")
print("Describing the dataset:\n",cv.describe(),end="\n\n")