import { useState } from "react";
import { RestoCard } from "./RestroCard";
import { div } from "framer-motion/client";
import ShimmerUiCard from "./ShimmerUi/ShimmerUiCard";
export const SliderMenu = () => {
  const [ok, setOk] = useState(false);
  setTimeout(() => {
    setOk(true);
  }, 1000);
  return ok ? (
    <div className=" w-[1440px] m-auto mt-2 p-4">
      <h1 className=" font-bold text-5xl">
        {" "}
        Restaurants with online food delivery in Mumbai
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
      </div>
    </div>
  ) : (
    <div className=" w-[1440px] m-auto mt-2 p-4">
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
