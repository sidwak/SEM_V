# Use an official TensorFlow runtime as a parent image
#FROM tensorflow/tensorflow:latest
FROM python:3.12.4

#RUN apt-get update \
#    && apt-get upgrade \
#    && apt-get install python3.12.4

# Set the working directory
WORKDIR /app

# Copy the model and other necessary files
COPY calorie_prediction_model.keras /app
COPY mainapp.py /app
COPY scaler.pkl /app

# Install dependencies
RUN pip install --ignore-installed Flask keras scikit-learn numpy tensorflow

EXPOSE 5000

# Run the Flask app
CMD ["python", "mainapp.py"]
