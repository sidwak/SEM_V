"use client";

import { useEffect, useRef, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import SideHeroDiv from "../components/sideHeroDiv";
import AlertModal from "../components/alertModal";

export default function BookingPage() {
  const [modyDetails, setModyDetails]: any = useState({
    bookId: -1,
    fullName: "Alex Albon",
    email: "albon@email.com",
    phone: "098340298394",
    roomType: "1bed",
    stayRange: { startDate: "2024-08-21", endDate: "2024-08-29" },
  });
  const [isBidValid, setIsBidValid] = useState(false);
  const [dateVal, setDateVal]: any = useState({
    startDate: null,
    endDate: null,
  });
  const bookIdRef: any = useRef("-1"); //these values don't initize anything
  const [bookIdState, setBookIdState]: any = useState(-1);
  const fullNameRef: any = useRef("defaultName");
  const emailRef: any = useRef("default@email.com");
  const phoneRef: any = useRef("1234567890");
  const roomTypeRef: any = useRef("defaultType");
  const [modalClose, setModalClose]: any = useState(true);
  const [modalHead, setModalHead]: any = useState("Default_Heading");
  const [modalDesc, setModalDesc]: any = useState(
    "This is the default modal description. you will need to change it in the use state method or this will be like this forever"
  );

  function getReservationDetails() {
    if (bookIdRef.current.value === "-1") {
      console.log("The id is not set");
      popUpModalAlert_IdNotSet();
    } else {
      console.log(isBidValid);
      if (isBidValid === true) {
        fetch("http://127.0.0.1:5000/getReservationDetails", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookingId: bookIdRef.current.value }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setIsBidValid(true);
            fullNameRef.current.value = data["fullName"];
            emailRef.current.value = data["email"];
            phoneRef.current.value = data["phone"];
            roomTypeRef.current.value = data["roomType"];
            let stayRange: any = data["stayRange"];
            setDateVal({
              ...dateVal,
              startDate: stayRange["startDate"],
              endDate: stayRange["endDate"],
            });
            setModyDetails({
              ...modyDetails,
              data,
              bookId: parseInt(bookIdRef.current.value),
            }); // should be last line
          });
      } else {
        popUpModalAlert_InvalidId();
      }
    }
  }

  /* function checkIfReservationIsValid(): boolean {
    var isValid = false;
    fetch("http://127.0.0.1:5000/getReservationValid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId: bookIdRef.current.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data["reservIsValid"] === "true") {
          console.log("the bid is vlid");
          setIsBidValid(true);
          isValid = true;
        } else {
          isValid = false;
        }
      });
    return isValid;
  } */

  useEffect(() => {
    console.log("new booking:" + bookIdState);
    if (bookIdState >= 1) {
      fetch("http://127.0.0.1:5000/getReservationValid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: bookIdRef.current.value }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data["reservIsValid"] === "true") {
            console.log("the bid is vlid");
            setIsBidValid(true);
          } else {
            console.log("the bid is not vlid");
            setIsBidValid(false);
            //isValid = false;
          }
        });
    }
  }, [bookIdState]);

  function sendUpdateDataToBackend() {
    if (isBidValid === false) {
      console.log("The id is not set");
      popUpModalAlert_IdNotSet();
    } else {
      const postData = {
        bookingId: bookIdState,
        fullName: fullNameRef.current.value,
        email: emailRef.current.value,
        phoneNo: phoneRef.current.value,
        roomType: roomTypeRef.current.value,
        stayRange: dateVal,
      };
      fetch("http://127.0.0.1:5000/getReservationModified", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      })
        .then((res) => {
          return res.text();
        })
        .then((response) => {
          console.log("data modified send success");
          console.log(response);
          popUpModalAlert_ModifySuccess(response);
        })
        .catch((err) => {
          console.log("error data send" + err);
        });
    }
  }

  function popUpModalAlert_IdNotSet() {
    setModalHead("Id Not Filled");
    setModalDesc(
      "The Booking Id is not filled, please enter the booking Id for your reservation in order to proceed further"
    );
    setModalClose(false);
  }
  function popUpModalAlert_InvalidId() {
    setModalHead("Id Is Invalid");
    setModalDesc(
      "The entered booking Id is not valid, please enter the correct booking Id for your reservation in order to proceed further"
    );
    setModalClose(false);
  }
  function popUpModalAlert_ModifySuccess(modifyStatus: string) {
    setModalHead("Reservation Updated");
    setModalDesc(
      `Your reservation is updated successfully and the modification status is: ${modifyStatus}. For any further queries you can contact our helpline for any assitance`
    );
    setModalClose(false);
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <AlertModal
        isClose={modalClose}
        setClose={setModalClose}
        headData={modalHead}
        descData={modalDesc}
      />
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
              <div>
                <div>
                  <label
                    htmlFor="bookId"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Booking Id
                  </label>
                  <div className="flex">
                    <input
                      type="number"
                      name="bookId"
                      id="bookId"
                      placeholder="#123646"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      ref={bookIdRef}
                      defaultValue={-1}
                      onChange={(e) => {
                        setBookIdState(Number.parseInt(e.target.value));
                      }}
                    />
                    <button
                      className="text-white font-light text-md bg-blue-500 rounded-lg mt-2 ml-2 px-1 hover:bg-blue-700"
                      onClick={getReservationDetails}
                    >
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
                    onClick={sendUpdateDataToBackend}
                  >
                    Update Booking
                  </button>
                </div>
              </div>

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
