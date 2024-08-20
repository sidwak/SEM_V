"use client";

import { useContext, useRef } from "react";
import minsDataContext from "./minsDataContext";
import { I_MinsData, I_MinsDataInner } from "./minsDataContext";

export default function Minutes_InputPage() {
  const dayRef: any = useRef(null);
  const veryAMRef: any = useRef(null);
  const modAMRef: any = useRef(null);
  const fairAMRef: any = useRef(null);
  const lighAMRef: any = useRef(null);

  const { minsData, setMinsData } = useContext(minsDataContext);

  function dataUpdated() {
    setMinsData({
      ...minsData,
      day: dayRef.current.value,
      veryAM: veryAMRef.current.value,
      modAM: modAMRef.current.value,
      fairAM: fairAMRef.current.value,
      lighAM: lighAMRef.current.value,
    });
  }

  return (
    <div className="text-2xl">
      <hr className="h-1 w-full bg-black mt-5"></hr>
      <h1 className="font-bold">
        Below parameters provides the sensors data to the ActivityTrack app
      </h1>
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
        <div className="text-slate-500">VeryActiveMinutes</div>
        <input
          type="number"
          id="veryActiveM_Id"
          ref={veryAMRef}
          className="w-40"
        />
      </div>
      <div>
        <div className="text-slate-500">ModeratelyActiveMinutes</div>
        <input
          type="number"
          id="modActiveM_Id"
          ref={modAMRef}
          className="w-40"
        />
      </div>
      <div>
        <div className="text-slate-500">FairlyActiveMinutes</div>
        <input
          type="number"
          id="fairActiveM_Id"
          ref={fairAMRef}
          className="w-40"
        />
      </div>
      <div>
        <div className="text-slate-500">LightlyActiveMinutes</div>
        <input
          type="number"
          id="lightActiveM_Id"
          ref={lighAMRef}
          className="w-40"
        />
      </div>
      <button
        className="bg-amber-400 p-1 px-2 rounded-xl hover:scale-105 mt-2"
        onClick={dataUpdated}
      >
        SendData
      </button>
    </div>
  );
}
