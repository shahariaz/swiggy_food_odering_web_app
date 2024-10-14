import { motion } from "framer-motion";
export const RestoCard = (props) => {
  const { name, sla, avgRatingString, cuisines, areaName, cloudinaryImageId } =
    props.data;
  return (
    <motion.div
      className=" w-[400px] h-[400px] mt-5 shadow-md rounded-2xl p-2 "
      whileHover={{ scale: 0.93 }}
      transition={{ duration: 0.3 }}
    >
      <img
        className=" w-full h-[280px] rounded-2xl "
        src={"https://media-assets.swiggy.com/" + cloudinaryImageId}
        alt=""
      />
      <div className=" p-2">
        <h2 className=" text-xl"> {name.split("(")[0]} </h2>
        <p className=" text-xl font-thin ">
          {avgRatingString} ⭐, <span>{sla?.slaString}</span>
        </p>
        <p> {cuisines.join(",")} </p>
        <p> {areaName} </p>
      </div>
    </motion.div>
  );
};
