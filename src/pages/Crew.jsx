/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import data from "../assets/data.json";
import './crew.css'

const Crew = () => {
  const [index, setIndex] = useState(0);
  console.log("index: ", index);
  const crew = data.crew;
  console.log(crew[index]);

  const handleClick = (index) => {
    setIndex(index);
  };
  return (
    //Two styles are applied 
    //1. the tailwind styling is applied.
    //2. .css styling because vercel does not recognize the tailwind styling.
    <div className="bga  w-screen bg-cover text-white md:pt-40  bg-no-repeat z-0 h-screen">
      <div className="border-b-[1px] md:border-0   xl:text-[28px]     md:text-[20px]  border-b-[#383B4B] gap-10 flex flex-col items-center ">
        <p className="barlow-condensed-regular xl:tracking-[4.72px] md:absolute md:left-10 pt-3 flex xl:absolute xl:left-40   gap-3 ">
          <p className="text-[#383B4B]   md:text-gray-400">02</p> MEET YOUR CREW
        </p>
        <img
          src={crew[index].images.webp}
          alt=""
          className=" md:absolute bottom-0 xl:absolute xl:right-[150px]  xl:bottom-1 xl:h-[612px] xl:w-[468.07] md:h-[572px] md:w-[456.37px]  w-[160px]"
        />
      </div>
      <div className={`pt-8 md:pl-[255px] pl-[60px] `}>
        <div className="barlow-condensed-thin xl:absolute xl:left-20 xl:bottom-[0px]  flex  gap-6 md:absolute md:top-[450px]  xl:mt-40  xl:pr-20 xl:text-left  items-center pl-24 ">
          <p
            className={
              index === 0
                ? ` border-b-2 bg-white p-1 rounded-full`
                : " border-b-1 border-white p-1  bg-gray-500 rounded-full"
            }
            onClick={() => {
              handleClick(0);
            }}
          ></p>
          <p
            className={
              index === 1
                ? ` border-b-2 bg-white p-1 rounded-full`
                : "border-b-1 border-white p-1  bg-gray-500 rounded-full"
            }
            onClick={() => {
              handleClick(1);
            }}
          ></p>
          <p
            className={
              index === 2
                ? ` border-b-2 bg-white p-1 rounded-full`
                : "border-b-1 border-white p-1  bg-gray-500 rounded-full"
            }
            onClick={() => {
              handleClick(2);
            }}
          ></p>
          <p
            className={
              index === 3
                ? ` border-b-2 bg-white p-1 rounded-full`
                : "border-b-1 border-white p-1  bg-gray-500 rounded-full"
            }
            onClick={() => {
              handleClick(3);
            }}
          ></p>
        </div>
      </div>
      <div className="flex pt-6 flex-col xl:absolute xl: xl:text-left  text-center md:gap-3 md:mt-4 items-center">
        <h2 className="bellefair-regular xl:text-[32px] xl:w-[400px]  xl:text-left xl:top-[100px]  xl:absolute xl:left-40  text-[18px]  text-center  text-[#383B4B] md:text-gray-400 uppercase">
          {crew[index].role}
        </h2>
        <h1 className="bellefair-regular xl:w-[800px]   xl:text-[56px] items-center  xl:absolute xl:left-40  xl:top-[170px] text-[24px] md:w-[500px] xl:text-left  md:text-[30px] text-center uppercase text-[#FFFFFF]  leading-6   w-[327px] h-[54px] top-[125px] ">
          {crew[index].name}
        </h1>
        <p className="barlow-condensed-regular xl:text-[18px] md:w-[420px] xl:absolute xl:left-40 xl:pr-20 xl:top-[240px] flex md:mt-[-20px] md:px-[5px] xl:text-left  items-center text-center left-[24px] text-[#D0D6F9] pb-14 leading-6 text-sm font-normal w-[327px] h-[170px]  px-5">
          {crew[index].bio}
        </p>
      </div>
    </div>
  );
};

export default Crew;
