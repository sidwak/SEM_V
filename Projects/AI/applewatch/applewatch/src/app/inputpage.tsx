"use client";

import Image from "next/image";
import { useContext, useRef } from "react";
import fdataContext from "./fdataContext";

export default function InputPage() {
  const weatherRef: any = useRef(null);
  const dayRef: any = useRef(null);
  const milesRef: any = useRef(null);
  const stepsRef: any = useRef(null);
  const dogsRef: any = useRef(null);

  const { fdata, setFdata } = useContext(fdataContext);

  function saveData() {
    let vval = weatherRef.current.value;
    console.log(vval);
    console.log(weatherRef.current.options[2].innerHTML);
    console.log(dayRef.current.value);
    console.log(milesRef.current.value);
    console.log(stepsRef.current.value);
    console.log(dogsRef.current.value);

    const newData = { weather: vval, day: dayRef.current.value };

    setFdata({ ...fdata, weather: vval, day: dayRef.current.value });
  }

  //console.log(fdata);

  return (
    <div className="bg-stone-200 w-full h-full text-2xl border-l-4 border-black pl-2">
      This is the input page
      <div>
        <label htmlFor="weatherId">Weather:</label>
        <select id="weatherId" ref={weatherRef}>
          <option value={"shine"}>Shine</option>
          <option value={"cold"}>Cold</option>
          <option value={"rainy"}>Rainy</option>
        </select>
      </div>
      <div>
        <label htmlFor="dayId">Day:</label>
        <select id="dayId" ref={dayRef}>
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
        <label htmlFor="milesId">Miles:</label>
        <input type="number" id="milesId" ref={milesRef} />
      </div>
      <div>
        <label htmlFor="stepsId">Steps:</label>
        <input type="number" id="stepsId" ref={stepsRef} />
      </div>
      <div>
        <label htmlFor="dogId">With Dog:</label>
        <input type="checkbox" id="dogId" ref={dogsRef} />
      </div>
      <button
        className="bg-amber-400 p-2 rounded-xl hover:scale-105"
        onClick={saveData}
      >
        Calculate
      </button>
    </div>
  );
}
