/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import data from "../assets/data.json";
import "./technology.css";
import Navbar from "../components/Navbar";

const Technology = () => {
  const [index, setIndex] = useState(0);

  console.log("index:", index);
  const technology = data.technology;
  console.log(technology[index]);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    //Two styles are applied 
    //1. the tailwind styling is applied (bg-technology-mobile md:bg-technology-tablet xl:bg-technology-desktop).
    //2. .css styling because vercel does not recognize the tailwind styling.
    <div className="bge  w-screen md:pt-[10px] md:mb-10 md:mt-[-10px]  bg-cover text-white  bg-no-repeat z-0 h-screen">
      <Navbar/>
      <div className="gap-10 flex text-left md:items-start md:text-[20px] md:tracking-wider tracking-wider text-[16px] md:mt-40 md:gap-16  w-screen flex-col items-center ">
        <p className="barlow-condensed-regular xl:text-[28px] xl:pl-[200px] pt-3 md:pl-12 flex h-[19px] text-[16px] gap-3  ">
          <p className="text-[#383B4B]">03</p> SPACE LAUNCH 101
        </p>
        <img src={technology[index].images.landscape} alt="" className="w-full xl:hidden " />
        <img src={technology[index].images.portrait} alt="" className="w-[515px] h-[527px] absolute right-0 top-[180px] xl:flex hidden " />
      </div>
      <div className={`pt-8 `}>
        <div className="barlow-condensed-thin text-center xl:absolute   xl:pl-1 xl:left-[200px] xl:top-[300px] xl:flex-col md:pl-80 flex gap-6 items-center pl-[125px] ">
          <p
            className={
              index === 0
                ? ` bg-white  text-center text-black xl:text-[32px] xl:pt-4 pt-2 xl:w-[80px] xl:h-[80px]  w-[40px] h-[40px] items-center   rounded-full text`
                : "pt-2  w-[40px] h-[40px] items-center xl:text-[32px] xl:pt-4 xl:w-[80px] xl:h-[80px]   rounded-full text   border-white border-[1px]"
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
                ? ` bg-white  text-center xl:w-[80px] xl:pt-4 xl:text-[32px] xl:h-[80px] text-black pt-2  w-[40px] h-[40px] items-center   rounded-full text`
                : "  pt-2  w-[40px] h-[40px] items-center xl:pt-4 xl:text-[32px] xl:w-[80px] xl:h-[80px]   rounded-full text   border-white border-[1px]"
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
                ? ` bg-white  text-center xl:w-[80px] xl:pt-4 xl:h-[80px] xl:text-[32px] text-black pt-2  w-[40px] h-[40px] items-center   rounded-full text`
                : "pt-2  w-[40px] h-[40px] xl:w-[80px] xl:pt-4  xl:h-[80px] xl:text-[32px] items-center   rounded-full text   border-white border-[1px]"
            }
            onClick={() => {
              handleClick(2);
            }}
          >
            3
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center xl:text-start  xl:absolute xl:left-[320px]  xl:top-[260px] gap-[11px] pt-10  leading-7">
        <h2 className="barlow-condensed-regular xl:text-start xl:text-[16px]  xl:mr-[300px] tracking-wide leading-4 md:text-[16px]  text-[14px] text-[#D0D6F9] h-[17px] w-[132px] text-center">
          THE TERMINOLOGY...
        </h2>
        <h1 className="bellefair-regular xl:text-start md:text-[40px] xl:pl-[] xl:text-[56px]  xl:w-[480px]  xl:ml-[45px] md:w-[400px] md:pt-[16px] text-[24px] uppercase pb-4 w-[327px] text-center h-[28px]">
          {technology[index].name}
        </h1>
        <p className="barlow-condensed-regular xl:leading-6   xl:text-[16px] md:leading-6 xl:pr-[38px]  xl:mr-[80px] xl:text-start flex md:text-[16px] md:w-[350px] md:pt-[20px] text-center left-[24px] text-[#D0D6F9]  leading-7 text-[15px] font-normal w-[327px] h-[100px] top-[125px] ">
          {technology[index].description}
        </p>
      </div>
    </div>
  );
};

export default Technology;
