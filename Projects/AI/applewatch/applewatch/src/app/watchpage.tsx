import Image from "next/image";
import watchJPG from "../assets/watefd.png";
import WeatherApp from "./weatherapp";
import MinutesApp from "./minutesApp";

export default function WatchPage() {
  return (
    <div
      className="w-full h-full flex justify-center items-center "
      style={{
        backgroundImage: `url(${watchJPG.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" w-[380px] h-[465px] bg-black rounded-[90px] flex justify-center items-center">
        <div className="text-white text-2xl">
          {/* <WeatherApp /> */}
          <MinutesApp />
        </div>
      </div>
    </div>
  );
}
