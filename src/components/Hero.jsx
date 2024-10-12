export const Hero = () => {
  return (
    <div className="  flex justify-between items-center">
      <section>
        <h1
          className=" font-extrabold text-5xl capitalize text-slate-700 leading-[48px]
        "
        >
          Order Food <br /> Online in <br /> Gurgaon
        </h1>
        <div className=" w-32 pt-2">
          <svg
            width="100%"
            height="70%"
            viewBox="0 0 78 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939"
              stroke="#FF5200"
              strokeWidth="1.5"
            ></path>
          </svg>
        </div>
      </section>
      <img
        width={500}
        height={300}
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
        alt=""
      />
    </div>
  );
};
