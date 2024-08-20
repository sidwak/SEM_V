"use client";

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import SideHeroDiv from "../components/sideHeroDiv";

export default function BookingPage() {
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
                Update Reservation Details
              </p>
              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Please refill the details to change
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
                  Enter you Booking Id to update details
                </p>
                <div className="mt-3">
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Alex Smith"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-3">
                  <label
                    htmlFor="phoneNo"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Phone No
                  </label>
                  <input
                    type="number"
                    name="phoneNo"
                    id="phoneNo"
                    placeholder="+012387982352"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-3">
                  <p className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Select Stay Period
                  </p>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <Datepicker
                      value={dateVal}
                      onChange={(newValue) => setDateVal(newValue)}
                    />
                  </div>
                </div>
                {/* <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div> */}
                <div className="mt-3 flex justify-between items-center">
                  <p className="block text-sm text-gray-600 dark:text-gray-200">
                    Select Room Type
                  </p>
                  <select className="bg-white dark:bg-gray-900 text-white">
                    <option>1 Bed</option>
                    <option>2 Bed</option>
                    <option>Duplex</option>
                  </select>
                </div>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Update Booking
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                You will receive the update confirmation for your reservatoin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
