"use client";

import Image from "next/image";
import WatchPage from "./watchpage";
import InputPage from "./inputpage";
import React, { useState } from "react";
import walkDataContext from "./walkDataContext";
import { I_WalkData, I_WalkDataInner } from "./walkDataContext";
import minsDataContext from "./minsDataContext";
import { I_MinsData, I_MinsDataInner } from "./minsDataContext";

export default function Home() {
  const [walkData, setWalkData] = useState<I_WalkDataInner>({
    weather: "shine",
    day: "Tuesday",
    miles: 1.8,
    steps: 13200,
    withDog: "No",
  });
  const walkDataValue: I_WalkData = { walkData, setWalkData };

  const [minsData, setMinsData] = useState<I_MinsDataInner>({
    day: "Tuesday",
    veryAM: 20,
    modAM: 49,
    fairAM: 201,
    lighAM: 890,
  });
  const minsDataValue: I_MinsData = { minsData, setMinsData };

  const [isWalkApp, setIsWalkApp] = useState(true);

  console.log(walkDataValue); //strict mode cause the double re-renders, you can disable it but not a good idea

  return (
    <walkDataContext.Provider value={walkDataValue}>
      <minsDataContext.Provider value={minsDataValue}>
        <div className="flex flex-row">
          <div className="w-[1144px] h-screen">
            <WatchPage isWalkApp={isWalkApp} />
          </div>
          <div className="w-full">
            <InputPage isWalkApp={isWalkApp} setIsWalkApp={setIsWalkApp} />
          </div>
        </div>
      </minsDataContext.Provider>
    </walkDataContext.Provider>
  );
}
