/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="flex  w-screen md:fixed  bg-black lg:bg-transparent    overflow-x-hidden md:pl-10   justify-between pt-4 pl-6 pr-4">
     <Link to={"/"} >
      <img
        src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1710170669/space-tour/Group_2_zyec8i.png"
        alt=""
        className="h-[48px] w-[48px] md:mt-6 xl:mt-[30px]  mb-2 lg:mt-[64px] lg:ml-4"

      />
      </Link>
      <div className="md:flex hidden  lg:flex xl:mt-2 lg:bg-transparent xl:gap-[90px] uppercase lg:backdrop-blur-lg lg:mt-[40px] lg:pr-[200px] lg:gap-10 md:bg-[rgb(255,255,255,4%)] p-9 text-white gap-5">
        
      <NavLink className={({isActive}) => isActive ? 'border-b-2  border-white flex items-center  gap-2 ':" flex items-center  gap-2"}  to={"/"}>
              <b className="barlow-condensed-regular md:hidden lg:flex">00</b> <p>Home</p>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'border-b-2 border-white flex items-center  gap-2':"flex items-center gap-2"} to={"/destination"}>
              <b className="barlow-condensed-regular md:hidden lg:flex">01</b> <p>Destination</p>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'border-b-2 border-white flex items-center  gap-2':"flex items-center gap-2"} to={"crew"}>
              <b className="barlow-condensed-regular md:hidden lg:flex">02</b> <p>Crew</p>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'border-b-2 border-white flex items-center  gap-2':"flex items-center gap-2"} to={"Technology"}>
              <b className="barlow-condensed-regular md:hidden lg:flex">03</b> <p>Technology</p>
            </NavLink>
      </div>
      <div className="md:hidden">
        <span className="text-white relative z-40" onClick={() => setShow((prev) => !prev)}>
          {show ? (
            <img
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1710170668/space-tour/Group_lvuedt.png"
              alt=""
              className="h-8  text-3xl right-5 top-5 fixed z-30"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1710170668/space-tour/Group_lvuedt.png"
              alt=""
              className="h-8 text-3xl right-5 top-5 fixed z-30"
            />
          )}
        </span>
        {show && (
          <div className="bg-slate-400 uppercase z-30  w-[75%] text-white bg-transparent  backdrop-blur-md   gap-7 flex flex-col barlow-condensed-regular items-start right-0 text-base  pl-5 pr-20 top-0 pt-20 h-screen absolute ">
            <NavLink className="flex items-center gap-2"  to={"/"}>
              <b className="barlow-condensed-medium">00</b> <p>Home</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/destination"}>
              <b className="barlow-condensed-regular">01</b> <p>Destination</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"crew"}>
              <b className="barlow-condensed-regular">02</b> <p>Crew</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"Technology"}>
              <b className="barlow-condensed-regular">03</b> <p>Technology</p>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
