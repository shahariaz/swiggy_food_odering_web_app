import { RestoCard } from "./RestroCard";
export const SliderMenu = () => {
  return (
    <div className=" w-[1440px] m-auto mt-2 p-4">
      <h1 className=" font-bold text-5xl"> What's on your mind?</h1>
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
  );
};
