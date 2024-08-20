import Image from "next/image";
import { useContext, useRef } from "react";
import walkDataContext from "./walkDataContext";
import Minutes_InputPage from "./minutes_inputpage";

export default function Walk_InputPage() {
  const weatherRef: any = useRef(null);
  const dayRef: any = useRef(null);
  const milesRef: any = useRef(null);
  const stepsRef: any = useRef(null);
  const dogsRef: any = useRef(null);

  const { walkData, setWalkData } = useContext(walkDataContext);

  function saveData() {
    let vval = weatherRef.current.value;
    console.log(vval);
    console.log(weatherRef.current.options[2].innerHTML);
    console.log(dayRef.current.value);
    console.log(milesRef.current.value);
    console.log(stepsRef.current.value);
    console.log(dogsRef.current.value);

    var isWithDog = dogsRef.current.checked ? "Yes" : "No";

    const newData = { weather: vval, day: dayRef.current.value };

    setWalkData({
      ...walkData,
      weather: vval,
      day: dayRef.current.value,
      miles: milesRef.current.value,
      steps: stepsRef.current.value,
      withDog: isWithDog,
    });
  }

  //console.log(fdata);

  return (
    <div className="text-2xl">
      <h1 className="font-bold">
        Below parameters provides the sensors data to the AccuWalker app
      </h1>
      <div>
        <div className="text-slate-500">Weather</div>
        <select id="weatherId" ref={weatherRef} className="w-40">
          <option value={"shine"}>Shine</option>
          <option value={"cold"}>Cold</option>
          <option value={"rainy"}>Rainy</option>
        </select>
      </div>
      <div>
        <div className="text-slate-500">Day</div>
        <select id="dayId" ref={dayRef} className="w-40">
          <option value={"Monday"}>Monday</option>
          <option value={"Tuesday"}>Tuesday</option>
          <option value={"Wednesday"}>Wednesday</option>
          <option value={"Thursday"}>Thursday</option>
          <option value={"Friday"}>Friday</option>
          <option value={"Saturday"}>Saturday</option>
          <option value={"Sunday"}>Sunday</option>
        </select>
      </div>
      <div>
        <div className="text-slate-500">Miles</div>
        <input type="number" id="milesId" ref={milesRef} className="w-40" />
      </div>
      <div>
        <div className="text-slate-500">Steps</div>
        <input type="number" id="stepsId" ref={stepsRef} className="w-40" />
      </div>
      <div className="flex">
        <div className="mr-2 text-slate-500">Walking with dog</div>
        <input type="checkbox" id="dogId" ref={dogsRef} value={"Yes"} />
      </div>
      <button
        className="bg-amber-400 p-1 px-2 rounded-xl hover:scale-105"
        onClick={saveData}
      >
        SendData
      </button>
    </div>
  );
}
