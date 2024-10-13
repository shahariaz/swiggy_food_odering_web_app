import "./shimmer.css";
const ShimmerUiCard = () => {
  return (
    <div className="relative  bg-white h-[400px] overflow-hidden w-[400px] mt-5 shadow-md rounded-2xl p-2">
      <div className="shimmerBG w-[380px] h-[250px] rounded-2xl"></div>
      <div className="p-8">
        <div className="shimmerBG h-6 w-[140px] mb-3 rounded-lg"></div>
        <div className="shimmerBG h-6 w-[40%] mb-3 rounded-lg"></div>

        <div className="shimmerBG h-2 w-full mt-6 mb-4 rounded"></div>
        <div className="shimmerBG h-2 w-full mb-4 rounded"></div>
        <div className="shimmerBG h-2 w-full mb-4 rounded"></div>
        <div className="shimmerBG h-2 w-full mb-4 rounded"></div>
        <div className="shimmerBG h-2 w-[40%] mb-4 rounded"></div>
      </div>
    </div>
  );
};
export default ShimmerUiCard;
