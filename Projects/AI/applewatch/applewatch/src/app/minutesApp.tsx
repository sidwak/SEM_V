import { useContext, useEffect, useState } from "react";
import minsDataContext from "./minsDataContext";
import {
  BarLoader,
  CircleLoader,
  ClockLoader,
  MoonLoader,
  PulseLoader,
  RingLoader,
  ScaleLoader,
} from "react-spinners";

export default function MinutesApp() {
  const { minsData, setMinsData } = useContext(minsDataContext);
  const [kcalPredict, setKcalPredict] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  async function getAI_Prediction() {
    const features = [20, 5, 268, 805, 0, 0, 0, 1, 0, 0, 0];
    features[0] = minsData.veryAM;
    features[1] = minsData.modAM;
    features[2] = minsData.fairAM;
    features[3] = minsData.lighAM;
    switch (minsData.day) {
      case "Friday":
        features[4] = 1;
        break;
      case "Monday":
        features[5] = 1;
        break;
      case "Saturday":
        features[6] = 1;
        break;
      case "Sunday":
        features[7] = 1;
        break;
      case "Thursday":
        features[8] = 1;
        break;
      case "Tuesday":
        features[9] = 1;
        break;
      case "Wednesday":
        features[10] = 1;
        break;
    }
    var payload = { features: features };
    console.log("payload", JSON.stringify(payload));
    // IMPORTATN CORS ERROR IS NOT SOLVED !!!!!
    // FOR THAT A CRHOME EXTENSION IS USED I.E. CORS UNBLOCK
    // ALSO using mode: no-cors causes 415 error for some reason
    const minsFetchData = await fetch("http://localhost:6565/predict", {
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
    setKcalPredict(parseInt(minsFetchData.prediction));
  }

  const type1 = (
    <div className="flex items-end justify-between gap-2">
      <div className="flex flex-col">
        <div className="text-sm text-center text-green-400">Lightly</div>
        <div className="w-20 h-32 bg-green-400"></div>
        <div className="text-2xl text-center">{minsData.lighAM}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm text-center text-yellow-400">Fairly</div>
        <div className="w-20 h-14 bg-yellow-400"></div>
        <div className="text-2xl text-center">{minsData.fairAM}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm text-center text-orange-400">Moderately</div>
        <div className="w-20 h-9 bg-orange-400"></div>
        <div className="text-2xl text-center">{minsData.modAM}</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm text-center text-red-400">Very</div>
        <div className="w-20 h-4 bg-red-400"></div>
        <div className="text-2xl text-center">{minsData.veryAM}</div>
      </div>
    </div>
  );

  const type2 = (
    <div className="flex flex-col gap-2">
      <div className="w-80">
        <div className="h-4 w-80 bg-green-400"></div>
        <div className="flex justify-between">
          <div className="text-sm text-start text-green-400">
            Light Active Minutes:
          </div>
          <div className="text-sm text-end text-green-400">
            {minsData.lighAM} mins
          </div>
        </div>
      </div>
      <div className="w-80">
        <div
          className={`h-4 bg-yellow-400`}
          style={{
            width: Math.round((minsData.fairAM / minsData.lighAM) * 320),
          }}
        ></div>
        <div className="flex justify-between">
          <div className="text-sm text-start text-yellow-400">
            Fairly Active Minutes:
          </div>
          <div className="text-sm text-end text-yellow-400">
            {minsData.fairAM} mins
          </div>
        </div>
      </div>
      <div className="w-80">
        <div
          className={`h-4 bg-orange-400`}
          style={{
            width: Math.round((minsData.modAM / minsData.lighAM) * 320),
          }}
        ></div>
        <div className="flex justify-between">
          <div className="text-sm text-start text-orange-400">
            Moderately Active Minutes:
          </div>
          <div className="text-sm text-end text-orange-400">
            {minsData.modAM} mins
          </div>
        </div>
      </div>
      <div className="w-80">
        <div
          className={`h-4 bg-red-400`}
          style={{
            width: Math.round((minsData.veryAM / minsData.lighAM) * 320),
          }}
        ></div>
        <div className="flex justify-between">
          <div className="text-sm text-start text-red-400">
            Very Active Minutes:
          </div>
          <div className="text-sm text-end text-red-400">
            {minsData.veryAM} mins
          </div>
        </div>
      </div>
    </div>
  );

  const type3 = (
    <div className="flex flex-col w-64 items-center p-2">
      <div className="flex items-center">
        <div className="h-32 w-20 bg-green-400"></div>
        <div className="text-2xl w-40 text-end">805 minutes</div>
      </div>
      <div className="flex items-center">
        <div className="h-14 w-20 bg-yellow-400"></div>
        <div className="text-2xl w-40 text-end">230 minutes</div>
      </div>
      <div className="flex items-center">
        <div className="h-7 w-20 bg-orange-400"></div>
        <div className="text-xl w-40 text-end">40 minutes</div>
      </div>
      <div className="flex items-center">
        <div className="h-7 w-20 bg-red-400"></div>
        <div className="text-xl w-40 text-end">15 minutes</div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-start pt-6">
      <div className=" text-cyan-300 text-5xl">ActivityTrack</div>
      <div className="text-xl text-gray-400 mt-1">27 June, {minsData.day}</div>
      <div className="text-lg ">Your Activiy Minutes</div>
      <hr className="bg-gray-600 h-[2px] w-80 mt-0 mb-2 border-0"></hr>
      {!isLoading ? (
        type2
      ) : (
        <div className="flex mx-auto h-[168px] items-center justify-center">
          <ScaleLoader color="#9ca3af" className="" height={80} width={10} />
        </div>
      )}
      <hr className="bg-gray-600 h-[2px] w-80 mt-1 mb-1 border-0"></hr>
      <div className="flex items-end justify-between w-80">
        <div className="text-2xl">Calories Burned</div>
        <div className="text-3xl text-red-400 font-medium">
          {isLoading ? (
            <div>
              <PulseLoader color="#f87171" />
            </div>
          ) : (
            <div>{kcalPredict} kcal</div>
          )}
        </div>
      </div>
      <div className="text-xl text-gray-400 mx-auto">You are doing good</div>
      <div
        className="bg-lime-400 text-black rounded-xl px-2 py-1 hover:scale-105 mx-auto mt-2"
        onClick={getAI_Prediction}
      >
        Recalculate
      </div>
    </div>
  );
}
