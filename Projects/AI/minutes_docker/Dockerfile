FROM final-tensor-python-base

WORKDIR /app

# Copy the model and other necessary files
COPY calorie_minutes_prediction_model.keras /app
COPY mainapp.py /app
COPY minutes_model_scaler.pkl /app

# Install dependencies

EXPOSE 5000

# Run the Flask app
CMD ["python3", "mainapp.py"]