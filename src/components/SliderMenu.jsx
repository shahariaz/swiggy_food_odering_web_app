import { useState, useEffect } from "react";
import { RestoCard } from "./RestroCard";

import ShimmerUiCard from "./ShimmerUi/ShimmerUiCard";
export const SliderMenu = () => {
  const [ok, setOk] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    setOk(false);
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await response.json();

    setData(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(data);
    setOk(true);
  };

  return ok ? (
    <div className=" w-[1980px] m-auto mt-2 p-4">
      <h1 className=" font-bold text-5xl">
        {" "}
        Restaurants with online food delivery in Mumbai
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {data.map((restro, index) => (
          <RestoCard key={index} data={restro.info} />
        ))}
      </div>
    </div>
  ) : (
    <div className=" w-[1980px] m-auto mt-2 p-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <ShimmerUiCard />
        <ShimmerUiCard />
        <ShimmerUiCard />
        <ShimmerUiCard />
        <ShimmerUiCard />
        <ShimmerUiCard />
        <ShimmerUiCard />
        <ShimmerUiCard />
        <ShimmerUiCard />
      </div>
    </div>
  );
};
