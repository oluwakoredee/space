/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import data from "../assets/data.json";

const Technology = () => {
  const [index, setIndex] = useState(0);

  console.log("index:", index);
  const technology = data.technology;
  console.log(technology[index]);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div className="bg-technology-mobile w-screen  bg-cover text-white  bg-no-repeat z-0 h-screen">
      <div className="gap-10 flex text-center w-screen flex-col items-center ">
        <p className="barlow-condensed-regular pt-3 flex h-[19px] text-[16px] gap-3  ">
          <p className="text-[#383B4B]">03</p> SPACE LAUNCH 101
        </p>
        <img src={technology[index].images.landscape} alt="" className="  " />
      </div>
      <div className={`pt-8`}>
        <div className="barlow-condensed-thin flex gap-6 items-center pl-24 ">
          <p
            className={
              index === 0
                ? ` text-center  bg-white text-black p-6 h-[10px] w-[10px] rounded-3xl`
                : "h-[10px] w-[10px] p-6 rounded-3xl border-white border-[1px]"
            }
            onClick={() => {
              handleClick(0);
            }}
          >
            1
          </p>
          <p
            className={
              index === 1
                ? ` bg-white  text-center text-black p-6 h-[10px] w-[10px] rounded-3xl`
                : "h-[10px] w-[10px]  p-6 rounded-3xl border-white border-[1px]"
            }
            onClick={() => {
              handleClick(1);
            }}
          >
            2
          </p>
          <p
            className={
              index === 2
                ? `bg-white  text-center text-black p-6 h-[40px] w-[40px] rounded-3xl`
                : "h-[10px] w-[10px] p-6 rounded-3xl border-white border-[1px]"
            }
            onClick={() => {
              handleClick(2);
            }}
          >
            3
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[11px] pt-10 leading-7">
        <h2 className="barlow-condensed-regular tracking-wide leading-4 text-[14px] text-[#D0D6F9] h-[17px] w-[132px] text-center">
          THE TERMINOLOGY...
        </h2>
        <h1 className="bellefair-regular text-[24px] uppercase pb-4 w-[327px] text-center h-[28px]">
          {technology[index].name}
        </h1>
        <p className="barlow-condensed-regular flex  text-center left-[24px] text-[#D0D6F9]  leading-7 text-[15px] font-normal w-[327px] h-[100px] top-[125px] ">
          {technology[index].description}
        </p>
      </div>
    </div>
  );
};

export default Technology;
