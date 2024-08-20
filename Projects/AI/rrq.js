// Define the URL for the POST request
const url = "http://localhost:5053/predict";

// Create a sample feature input
const features = [2.5, 5000, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0]; // Example features

// Create the payload (the data to send in the POST request)
const payload = {
  features: features,
};

// Send the POST request with JSON data
fetch(url, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json", // Correct Content-Type
  },
  body: JSON.stringify(payload), // Convert the payload to a JSON string
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse the JSON response
  })
  .then((data) => {
    console.log("Prediction:", data.prediction);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
