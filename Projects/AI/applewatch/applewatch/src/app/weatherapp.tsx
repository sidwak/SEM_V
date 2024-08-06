import Image from "next/image";
import weatherIcon from "../assets/weathericon.png";
import fdataContext from "./fdataContext";
import { useContext } from "react";

export default function WeatherApp() {
  const { fdata, setFdata } = useContext(fdataContext);

  return (
    <div className="flex flex-col justify-center items-start">
      <div className=" text-cyan-300 text-5xl">AccuWeather</div>
      <div className="text-cyan-300 text-2xl mt-1">Kalyan</div>
      <div className="flex items-center mt-4">
        <Image src={weatherIcon} width={64} height={64} alt="weathericon" />
        <div className="pl-2 text-white text-8xl">62&deg;</div>
      </div>
      <div className="text-2xl text-gray-400">Mostly {fdata.weather}</div>
      <div className="text-xl text-gray-400">27 June, {fdata.day}</div>
      <div className="flex text-2xl text-white justify-between mt-2">
        <div>Miles: 1.5m</div>
        <div>Steps: 2023</div>
      </div>
      <div className="text-xl text-gray-400">With Dog: Yes</div>
      <div className="text-2xl text-orange-400 mt-2">Calories Burned: 3434</div>
      <div className="bg-orange-400 rounded-xl px-2 py-1 hover:scale-105">
        Refresh
      </div>
    </div>
  );
}
