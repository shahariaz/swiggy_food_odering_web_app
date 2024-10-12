import { motion } from "framer-motion";
export const RestoCard = () => {
  return (
    <motion.div
      className=" w-[400px] h-[400px] mt-5 shadow-md rounded-2xl p-2 "
      whileHover={{ scale: 0.93 }}
      transition={{ duration: 0.3 }}
    >
      <img
        className=" w-[380px] h-[250px] rounded-2xl "
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eqmrwob25vzyfvuizx2q"
        alt=""
      />
      <div className=" p-2 ">
        <h2 className=" text-3xl">Vijay Stores</h2>
        <p className=" text-xl font-thin">
          4.5 <span>20-25 mins</span>
        </p>
        <p>Snacks,Sweets</p>
        <p>Scruz Bandra East</p>
      </div>
    </motion.div>
  );
};
