import Image from "next/image";
import watchJPG from "../assets/watefd.png";
import MinutesApp from "./minutesApp";
import WalkApp from "./walkApp";

interface I_WatchPageProps {
  isWalkApp: boolean;
}

export default function WatchPage(props: I_WatchPageProps) {
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
          {props.isWalkApp ? <WalkApp /> : <MinutesApp />}
        </div>
      </div>
    </div>
  );
}
