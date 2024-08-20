"use client";

import { useRef, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import SideHeroDiv from "../components/sideHeroDiv";
import AlertModal from "../components/alertModal";

export default function BookingPage() {
  const [dateVal, setDateVal]: any = useState({
    startDate: null,
    endDate: null,
  });
  const fullNameRef: any = useRef("defaultName");
  const emailRef: any = useRef("default@email.com");
  const phoneRef: any = useRef("1234567890");
  const roomTypeRef: any = useRef("defaultType");

  const [modalClose, setModalClose]: any = useState(true);

  function sendDataToBackend() {
    console.log(fullNameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
    console.log(roomTypeRef.current.value);
    console.log(dateVal);
    const postData = {
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      phoneNo: phoneRef.current.value,
      roomType: roomTypeRef.current.value,
      stayRange: dateVal,
    };
    fetch("http://127.0.0.1:5000/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    })
      .then(function (res) {
        return res.text();
      })
      .then((response) => {
        console.log("data send success");
        console.log(response);
        setModalClose(false);
      })
      .catch((err) => {
        console.log("error data send" + err);
      });
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <AlertModal isClose={modalClose} setClose={setModalClose} />
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
                Book Reservation
              </p>
              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Please fill your details
              </p>
            </div>

            <div className="mt-8">
              <div>
                <div>
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
                    ref={fullNameRef}
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
                    ref={emailRef}
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
                    ref={phoneRef}
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
                  <select
                    className="bg-white dark:bg-gray-900 text-white"
                    ref={roomTypeRef}
                  >
                    <option value={"1bed"}>1 Bed</option>
                    <option value={"2bed"}>2 Bed</option>
                    <option value={"duplex"}>Duplex</option>
                  </select>
                </div>
                <div className="mt-6">
                  <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    onClick={sendDataToBackend}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>

              <p className="mt-6 text-sm text-center text-gray-400">
                You will receive the payment link once reservation is confirmed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
