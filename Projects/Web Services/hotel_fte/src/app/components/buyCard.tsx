import Link from "next/link";
import { useRouter } from "next/navigation";

interface IBuyCard {
  rName: string;
  rDesc: string;
  rImg: string;
  rPrice: string;
}
//max-w-md
export default function BuyCard(props: IBuyCard) {
  const router = useRouter();
  function goToReservationPage() {}

  return (
    <div className="w-[440px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-slate-800">
      <div className="px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {props.rName}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {props.rDesc}
        </p>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={props.rImg}
        alt="NIKE AIR"
      />

      <div className="flex items-center justify-between px-4 py-4 bg-slate-800">
        <h1 className="text-lg font-bold text-white">${props.rPrice}/N</h1>
        <button
          className="px-2 py-1 text-md font-semibold text-white transition-all duration-100 transform bg-blue-500 rounded hover:bg-blue-700 hover:scale-110"
          onClick={() => {
            router.push("bookingPage");
          }}
        >
          Book
        </button>
      </div>
    </div>
  );
}
