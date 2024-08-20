import { useContext } from "react";
import React from "react";

const walkDataContext = React.createContext({
  walkData: {
    weather: "shine",
    day: "Tuesday",
    miles: 1.8,
    steps: 13200,
    withDog: "No",
  },
  setWalkData: (props: any) => {},
});

export interface I_WalkDataInner {
  weather: string;
  day: string;
  miles: number;
  steps: number;
  withDog: string;
}

export interface I_WalkData {
  walkData: I_WalkDataInner;
  setWalkData: React.Dispatch<React.SetStateAction<I_WalkDataInner>>;
}

export default walkDataContext;
