"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navActive =
  "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6";
const navUnActive =
  "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6";

export default function Navbar() {
  const [curPage, setCurPage]: any = useState(-1);

  function setCurActivePage(pageIndx: number) {
    setCurPage(pageIndx);
  }
  const patt = usePathname();

  useEffect(() => {
    switch (patt) {
      case "/":
        setCurPage(0);
        break;
      case "/bookingPage":
        setCurPage(1);
        break;
      case "/modifyPage":
        setCurPage(2);
        break;
      case "/cancelPage":
        setCurPage(3);
        break;
    }
  });

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <Link
          href="/"
          className={curPage === 0 ? navActive : navUnActive}
          onClick={() => setCurActivePage(0)}
        >
          Search Rooms
        </Link>

        <Link
          href="/bookingPage"
          className={curPage === 1 ? navActive : navUnActive}
          onClick={() => setCurActivePage(1)}
        >
          Book Reservation
        </Link>

        <Link
          href="/modifyPage"
          className={curPage === 2 ? navActive : navUnActive}
          onClick={() => setCurActivePage(2)}
        >
          Update Reservation
        </Link>

        <Link
          href="/cancelPage"
          className={curPage === 3 ? navActive : navUnActive}
          onClick={() => setCurActivePage(3)}
        >
          Cancel Reservation
        </Link>
      </div>
    </nav>
  );
}
