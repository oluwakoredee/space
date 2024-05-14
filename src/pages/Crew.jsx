/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import data from "../assets/data.json";

const Crew = () => {
  const [index, setIndex] = useState(0);
  console.log("index: ", index);
  const crew = data.crew;
  console.log(crew[index]);

  const handleClick = (index) => {
    setIndex(index);
  };
  return (
    <div className="bg-crew-mobile w-screen bg-cover text-white  bg-no-repeat z-0 h-screen">
      <div className="border-b-[1px] border-b-[#383B4B] gap-10 flex flex-col items-center ">
        <p className="barlow-condensed-regular pt-3 flex  gap-3 ">
          <p className="text-[#383B4B]">02</p> MEET YOUR CREW
        </p>
        <img src={crew[index].images.webp} alt="" className="  w-[160px]" />
      </div>
      <div className={`pt-8`}>
        <div className="barlow-condensed-thin flex gap-6 items-center pl-24 ">
          <p
            className={index === 0 ? ` border-b-2` : ""}
            onClick={() => {
              handleClick(0);
            }}
          >
            MOON
          </p>
          <p
            className={index === 1 ? ` border-b-2` : ""}
            onClick={() => {
              handleClick(1);
            }}
          >
            MARS
          </p>
          <p
            className={index === 2 ? ` border-b-2` : ""}
            onClick={() => {
              handleClick(2);
            }}
          >
            EUROPA
          </p>
          <p
            className={index === 3 ? ` border-b-2` : ""}
            onClick={() => {
              handleClick(3);
            }}
          >
            TITAN
          </p>
        </div>
      </div>
      <div className="flex pt-6 flex-col text-center items-center">
        <h2 className="bellefair-regular  text-[18px] text-center text-[#383B4B] uppercase">
          {crew[index].role}
        </h2>
        <h1 className="bellefair-regular items-center  text-[24px] text-center uppercase text-[#FFFFFF]  leading-6   w-[327px] h-[54px] top-[125px] ">
          {crew[index].name}
        </h1>
        <p className="barlow-condensed-regular flex items-center text-center left-[24px] text-[#D0D6F9] pb-14 leading-6 text-sm font-normal w-[327px] h-[170px]  px-5">
          {crew[index].bio}
        </p>
      </div>
    </div>
  );
};

export default Crew;
