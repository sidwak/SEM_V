import { useEffect } from "react";

interface IAlertModal {
  isClose: any;
  setClose: any;
  headData: any;
  descData: any;
}

export default function AlertModal(props: IAlertModal) {
  function closeModal() {
    props.setClose(true);
  }
  return (
    <div className="absolute left-1/2 top-1/2">
      <div className="relative -left-1/2 -translate-y-1/2">
        <div className={props.isClose ? "hidden" : "block"}>
          <div className="w-72 bg-slate-800 rounded-xl p-3 py-3 flex flex-col items-center justify-center text-white text-center">
            <p className="text-lg">{props.headData}</p>
            <p className="text-sm text-gray-400">{props.descData}</p>
            <div className="w-full flex justify-end mt-4">
              <button
                className="p-1 px-2 w-16 rounded-md bg-white text-black hover:bg-gray-400 hover:scale-105"
                onClick={closeModal}
              >
                Close
              </button>
              {/* <button className="p-1 px-2 w-16 rounded-md bg-blue-600 hover:bg-blue-800 hover:scale-105">
                Ok
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}