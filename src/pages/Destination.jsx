/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import moonimg from "../../src/assets/destination/image-moon.webp";
import data from "../assets/data.json";
import './destination.css'

const Destination = () => {
  const [planet, setPlanet] = useState();

  const [index, setIndex] = useState(0);

  console.log("index:", index);
  const destination = data.destinations;
  console.log(destination[index]);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    //Two styles are applied 
    //1. the tailwind styling is applied (bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop).
    //2. .css styling because vercel does not recognize the tailwind styling.
    <div className="bgi w-screen bg-cover lg:h-fit overflow-hidden xl:flex xl:h-screen   text-white  bg-no-repeat z-0 h-screen">
      <div className="gap-10 flex flex-col xl: items-center md:text-[20px]  ">
        <p className="barlow-condensed-regular pt-3 flex md:mt-36 md:mr-[550px] xl:text-[28px]  md:text-[20px] xl:tracking-[3px] xl:absolute xl:left-[200px]    xl:pl-[0px]  gap-3 ">
          <p className="text-[#383B4B]    tracking-widest md:text-[20px] xl:text-[28px]  ">01</p> PICK YOUR DESTINATION
        </p>
        <img
          src={destination[index].images.webp}
          alt=""
          className=" w-[160px] md:w-[300px] md:mb-8 xl:w-[445px] xl:absolute xl:left-[210px] xl:top-[270px] xl:h-[500px] "
        />
      </div>
      <div className={`pt-4  xl:pt-[11px] xl:mt-[100px] xl:mb-[200px] xl:pb-[200px]  xl:absolute xl:right-[100px]  xl:text-left`}>
        <div className="barlow-condensed-thin xl:ml-[-200px] xl:pt-40 flex  gap-6 items-center pl-24 xl:pl-[200px] xl:flex md:pl-[280px] tracking-[3px] md:leading-5	 ">
          <p
            className={index === 0 ? ` border-b-2` : ""}
            onClick={() => {
              handleClick(0);
            }}
          >
            MOON
          </p>
          <p
            className={index === 1 ? ` border-b-2 ` : ""}
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
        <div className="flex flex-col items-center">
          <h1 className="bellefair-regular text-[64px] xl:ml-[-180px] xl:text-[100px] uppercase md:text-[80px]">
            {destination[index].name}
          </h1>
          <p className="barlow-condensed-regular flex items-center xl:pr-44   xl:items-start xl:text-left xl:pl-0 md:text-[16px] text-center left-[24px] text-[#D0D6F9] pb-6 leading-6 text-sm font-normal md:w-[500px] w-[327px] h-[125px] top-[125px] px-5">
            {destination[index].description}
          </p>
        </div>
        <div className="md:flex md:pl-48 border-t-[0.009px]    border-t-[#383B4B] ">
        <div className="flex flex-col items-center xl:text-start xl:gap-3 border-t-[0.009px] xl:absolute xl:left-[-10px]  xl:pl-[-100px] h-[61px] border-t-[#383B4B] text-center pt-6">
          <p className="barlow-condensed-regular h-[17px] w-[216px]  text-[#D0D6F9]">
            AVG DISTANCE
          </p>
          <h2 className="bellefair-regular h-[32px] w-[216px] text-[28px]">
            {destination[index].distance}
          </h2>
        </div>
        <div className="flex flex-col items-center xl:gap-3 h-[61px] xl:absolute xl:right-20 pt-6 text-center">
          <p className="barlow-condensed-regular w-[216px] text-[#D0D6F9] h-[17px]">
            EST. TRAVEL TIME
          </p>
          <h2 className="bellefair-regular h-[32px] w-[216px] text-[28px]">
            {destination[index].travel}
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
