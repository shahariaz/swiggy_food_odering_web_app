import { Hero } from "./Hero";
import { LocationButton } from "./LocationButton";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-white to-[#D1C6F6] p-3 rounded-b-3xl">
      <div className="max-w-[1980px] mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"
              alt="Swiggy Logo"
              className="h-9"
            />
            <div className="bg-slate-700 h-9 w-[1px]" />
            <LocationButton />
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-[350px] h-9 border outline-none rounded-lg pl-10 pr-2 py-1 bg-[#F0F0F5]"
              placeholder="Search for restaurants, dishes..."
            />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>
        </nav>
        <Hero />
      </div>
    </header>
  );
};

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
    />
  </svg>
);
