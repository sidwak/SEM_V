"use client";

import { useEffect, useRef, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import SideHeroDiv from "../components/sideHeroDiv";
import AlertModal from "../components/alertModal";

export default function CancelPage() {
  const [dateVal, setDateVal]: any = useState({
    startDate: null,
    endDate: null,
  });
  const [isBidValid, setIsBidValid] = useState(false);
  const bookIdRef: any = useRef(null);
  const [bookIdState, setBookIdState]: any = useState(-1);
  const reasonRef: any = useRef(null);
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
      if (isBidValid === true) {
        popUpModalAlert_ConfirmCancel();
      } else {
        popUpModalAlert_InvalidId();
      }
    }
  }

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
  function popUpModalAlert_CancelSuccess(cancelStatus: string) {
    setModalHead("Reservation Cancelled");
    setModalDesc(
      `Your reservation is cancelled successfully and the cancellation status is: ${cancelStatus}. For any further queries you can contact our helpline for any assitance`
    );
    setModalClose(false);
  }
  function popUpModalAlert_ConfirmCancel() {
    setModalHead("Cancel Reservation?");
    setModalDesc(
      `Please confirm that you want to cancel your reservation. Once done you may not be able to find another room because of availabilty and any issuse with your cancellation`
    );
    setModalClose(false);
  }

  function sendCancelDataToBackend() {
    if (isBidValid === false) {
      console.log("The id is not set");
      popUpModalAlert_InvalidId();
    } else {
      fetch("http://127.0.0.1:5000/getReservationCancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: bookIdRef.current.value }),
      })
        .then((res) => {
          return res.text();
        })
        .then((response) => {
          console.log("data cancel send success");
          console.log(response);
          popUpModalAlert_CancelSuccess(response);
        })
        .catch((err) => {
          console.log("error data send" + err);
        });
    }
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
                Cancel Reservation
              </p>
              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Please fill the details to cancellation
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
                    ref={reasonRef}
                  />
                </div>
                <div className="mt-6">
                  <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-800 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    onClick={sendCancelDataToBackend}
                  >
                    Cancel Reservation
                  </button>
                </div>
              </div>

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
