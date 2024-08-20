"use client";

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import SideHeroDiv from "../components/sideHeroDiv";

export default function CancelPage() {
  const [dateVal, setDateVal]: any = useState({
    startDate: null,
    endDate: null,
  });
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <SideHeroDiv />
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img
                  className="w-auto h-7 sm:h-8"
                  src="https://merakiui.com/images/logo.svg"
                  alt=""
                />
              </div>
              <p className="text-xl text-gray-500 dark:text-gray-300 mt-2">
                Cancel Reservation
              </p>
              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Please fill the details to cancellation
              </p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    htmlFor="bookId"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Booking Id
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      name="bookId"
                      id="bookId"
                      placeholder="#123646"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <button className="text-white font-light text-md bg-blue-500 rounded-lg mt-2 ml-2 px-1 hover:bg-blue-700">
                      Check
                    </button>
                  </div>
                </div>
                <p className="mt-6 text-sm text-center text-gray-400">
                  Enter you Booking Id to cancel
                </p>
                <div className="mt-3">
                  <label
                    htmlFor="reasonTx"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Enter the reason for cancellation
                  </label>
                  <textarea
                    name="reasonTx"
                    id="reasonTx"
                    placeholder="High cost.."
                    className="block w-full h-24 px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-800 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Cancel Reservation
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                You will receive the cancellation confirmation for your
                reservation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
