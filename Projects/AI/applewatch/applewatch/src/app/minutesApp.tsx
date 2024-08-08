export default function MinutesApp() {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className=" text-cyan-300 text-5xl">ActivtyTrack</div>
      <div className="text-xl text-gray-400">27 June, Wednesday</div>
      <div className="flex flex-col w-60 items-center">
        <div className="flex items-center">
          <div className="h-32 w-20 bg-green-400"></div>
          <div className="text-2xl w-40 text-end">805 minutes</div>
        </div>
        <div className="flex items-center">
          <div className="h-14 w-20 bg-yellow-400"></div>
          <div className="text-2xl w-40 text-end">230 minutes</div>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-20 bg-orange-400"></div>
          <div className="text-2xl w-40 text-end">40 minutes</div>
        </div>
      </div>
      <hr className="bg-white h-0 w-40"></hr>
      <div className="text-2xl">Calories Burned</div>
      <div className="text-3xl text-red-400 font-medium">3543 kcal</div>
      <div className="text-xl text-gray-400">You are doing good</div>
    </div>
  );
}
