import Image from "next/image";
import weatherIcon from "../assets/weathericon.png";
import walkDataContext, { I_WalkDataInner } from "./walkDataContext";
import { useContext, useState } from "react";
import { PulseLoader } from "react-spinners";

export default function WalkApp() {
  const { walkData, setWalkData } = useContext(walkDataContext);
  const [kcalPredict, setKcalPredict] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  var translatedWalkData: I_WalkDataInner = {
    weather: walkData.weather,
    day: walkData.day,
    miles: walkData.miles,
    steps: walkData.steps,
    withDog: walkData.withDog,
  };

  async function getAI_Prediction() {
    const features = [11251, 6.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    features[0] = walkData.steps;
    features[1] = walkData.miles;
    features[2] = walkData.withDog == "Yes" ? 1 : 0;
    switch (walkData.weather) {
      case "cold":
        features[3] = 1;
        break;
      case "rainy":
        features[4] = 1;
        break;
      case "shine":
        features[5] = 1;
        break;
    }
    switch (walkData.day) {
      case "Friday":
        features[6] = 1;
        break;
      case "Monday":
        features[7] = 1;
        break;
      case "Thursday":
        features[8] = 1;
        break;
      case "Saturday":
        features[9] = 1;
        break;
      case "Tuesday":
        features[10] = 1;
        break;
      case "Sunday":
        features[11] = 1;
        break;
      case "Wednesday":
        features[12] = 1;
        break;
    }

    var payload = { features: features };
    console.log("payload", JSON.stringify(payload));
    // IMPORTATN CORS ERROR IS NOT SOLVED !!!!!
    // FOR THAT A CRHOME EXTENSION IS USED I.E. CORS UNBLOCK
    // ALSO using mode: no-cors causes 415 error for some reason
    const walkFetchData = await fetch("http://localhost:5053/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Parse the JSON response
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setKcalPredict(parseInt(walkFetchData.prediction));
  }

  return (
    <div className="flex flex-col justify-center items-start w-80 pt-2">
      <div className=" text-cyan-300 text-5xl">AccuWalker</div>
      <div className="text-gray-400 text-2xl">Kalyan</div>
      <div className="flex items-center mt-3">
        <Image src={weatherIcon} width={64} height={64} alt="weathericon" />
        <div className="pl-2 text-white text-8xl">62&deg;</div>
      </div>
      <div className="text-2xl text-lime-400 mt-1">
        Mostly {walkData.weather}
      </div>
      <div className="text-xl text-gray-400">27 June, {walkData.day}</div>
      <div className="flex text-2xl justify-between mt-2 w-80">
        <div>Miles: {walkData.miles}m</div>
        <div>Steps: {walkData.steps}</div>
      </div>
      <div className="text-xl text-gray-400">
        Walking with dog: {walkData.withDog}
      </div>
      <div className="text-2xl text-orange-200 mt-2 flex">
        Calories Burned:
        {isLoading ? (
          <div>
            <PulseLoader color="#f87171" />
          </div>
        ) : (
          <div className="ml-1 text-red-400">{kcalPredict} kcal</div>
        )}
      </div>
      <div
        className="bg-lime-400 rounded-xl px-2 py-1 mt-2 mx-auto text-black hover:scale-105"
        onClick={getAI_Prediction}
      >
        Recalculate
      </div>
    </div>
  );
}
