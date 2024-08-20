import React from "react";

const minsDataContext = React.createContext({
  minsData: {
    day: "Tuesday",
    veryAM: 20,
    modAM: 49,
    fairAM: 201,
    lighAM: 890,
  },
  setMinsData: (props: any) => {},
});

export interface I_MinsDataInner {
  day: string;
  veryAM: number;
  modAM: number;
  fairAM: number;
  lighAM: number;
}

export interface I_MinsData {
  minsData: I_MinsDataInner;
  setMinsData: React.Dispatch<React.SetStateAction<I_MinsDataInner>>;
}

export default minsDataContext;
