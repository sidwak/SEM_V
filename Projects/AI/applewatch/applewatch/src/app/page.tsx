"use client";

import Image from "next/image";
import WatchPage from "./watchpage";
import InputPage from "./inputpage";
import React, { useState } from "react";
import fdataContext from "./fdataContext";
import { Ifdata, IfdataInner } from "./fdataContext";

export default function Home() {
  const [fdata, setFdata] = useState<IfdataInner>({
    weather: "shine",
    day: "Tuesday",
  });
  const fdataValue: Ifdata = { fdata, setFdata };

  console.log(fdataValue); //strict mode cause the double re-renders, you can disable it but not a good idea

  return (
    <fdataContext.Provider value={fdataValue}>
      <div className="flex flex-row">
        <div className="w-[1144px] h-screen">
          <WatchPage />
        </div>
        <div className="w-full">
          <InputPage />
        </div>
      </div>
    </fdataContext.Provider>
  );
}
