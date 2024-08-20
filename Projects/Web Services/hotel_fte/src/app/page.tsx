"use client";
import Image from "next/image";
import HeroDiv from "./components/heroDiv";
import BuyCard from "./components/buyCard";
import { useEffect, useState } from "react";
import useSWR from "swr";

function GridLoading() {
  return (
    <div className="pt-52 p-40 text-white text-center text-2xl">
      <h1>Loading...</h1>
    </div>
  );
}

function CardsLayout() {
  var [cards, setCards]: any = useState(null);
  /* for (let i = 0; i < 7; i++) {
    cards.push(i);
  } */

  const [data, setData]: any = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/rooms")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        var numArr: any = [];
        for (let i = 0; i < data.length; i++) {
          numArr.push(
            <BuyCard
              rName={data[i]["r_name"]}
              rDesc={data[i]["r_desc"]}
              rImg={data[i]["r_img"]}
              rPrice={data[i]["r_price"]}
            />
          );
        }
        setCards(numArr);
        console.log(cards);
        setLoading(false);
      });
  }, []);

  /* if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>; */
  return (
    <div>
      {isLoading ? (
        <GridLoading />
      ) : (
        <div className="grid xl:grid-cols-3 grid-cols-2 gap-12 w-fit h-fit mx-auto">
          cards
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <HeroDiv />
      <div className="bg-white dark:bg-gray-900 pt-8">
        <CardsLayout />
      </div>
    </div>
  );
}
