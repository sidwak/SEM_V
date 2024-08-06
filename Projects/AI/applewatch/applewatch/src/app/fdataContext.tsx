import { useContext } from "react";
import React from "react";

const fdataContext = React.createContext({
  fdata: { weather: "shine", day: "Tuesday" },
  setFdata: (props: any) => {},
});

export interface IfdataInner {
  weather: string;
  day: string;
}

export interface Ifdata {
  fdata: IfdataInner;
  setFdata: React.Dispatch<React.SetStateAction<IfdataInner>>;
}

export default fdataContext;
