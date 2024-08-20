"use client";

import Image from "next/image";
import { useContext, useRef } from "react";
import walkDataContext from "./walkDataContext";
import Minutes_InputPage from "./minutes_inputpage";
import Walk_InputPage from "./walk_inputpage";

interface I_InputPageProps {
  isWalkApp: boolean;
  setIsWalkApp: Function;
}

export default function InputPage(props: I_InputPageProps) {
  return (
    <div className="bg-stone-200 w-full h-full text-2xl border-l-4 border-black pl-2">
      <button
        onClick={() => {
          props.setIsWalkApp(!props.isWalkApp);
        }}
        className="bg-purple-400 p-1 px-2 rounded-xl"
      >
        ChangeApp
      </button>
      <Walk_InputPage />
      <Minutes_InputPage />
    </div>
  );
}
