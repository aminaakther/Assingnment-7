import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";

const Navber = () => {
  const location = useLocation();


  const isDetailsPage = location.pathname.startsWith("/apps/");

  const getClass = ({ isActive }) => {
    if (isDetailsPage) {
      return "btn text-black border-none";  
    }

    return isActive
      ? "btn text-white bg-[#244D3F]"
      : "btn text-black border-none";
  };

  return (
    <div className="navbar bg-white border-b px-4 md:px-8  fixed top-0 left-0 right-0 z-50 shadow-sm">

  {/* Logo */}
  <div className="flex-1">
    <h1 className="text-lg sm:text-xl md:text-3xl font-bold">
      <span className="text-[#1F2937]">Keen</span>
      <span className="text-[#244D3F]">Keeper</span>
    </h1>
  </div>

  {/* Menu */}
  <div className="flex-none">
    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">

      <NavLink to="/" className={getClass}>
        <span className="text-xl md:text-2xl"><IoMdHome /></span>
        <span className="hidden sm:inline">Home</span>
      </NavLink>

      <NavLink to="/apps" className={getClass}>
        <span className="text-xl md:text-2xl"><CiTimer /></span>
        <span className="hidden sm:inline">Timeline</span>
      </NavLink>

      <NavLink to="/instalApps" className={getClass}>
        <span className="text-xl md:text-2xl"><ImStatsDots /></span>
        <span className="hidden sm:inline">Stats</span>
      </NavLink>

    </div>
  </div>

</div>
  );
};

export default Navber;