/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import moonimg from "../../src/assets/destination/image-moon.webp";
import data from "../assets/data.json";

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
    <div className="bg-destination-mobile w-screen bg-cover text-white  bg-no-repeat z-0 h-screen">
      <div className="gap-10 flex flex-col items-center ">
        <p className="barlow-condensed-regular pt-3 flex  gap-3 ">
          <p className="text-[#383B4B]">01</p> PICK YOUR DESTINATION
        </p>
        <img
          src={destination[index].images.webp}
          alt=""
          className=" w-[160px]"
        />
      </div>
      <div className={`pt-4`}>
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
        <div className="flex flex-col items-center">
          <h1 className="bellefair-regular text-[64px] uppercase">
            {destination[index].name}
          </h1>
          <p className="barlow-condensed-regular flex items-center text-center left-[24px] text-[#D0D6F9] pb-6 leading-6 text-sm font-normal w-[327px] h-[125px] top-[125px] px-5">
            {destination[index].description}
          </p>
        </div>
        <div className="flex flex-col items-center border-t-[0.009px] h-[61px] border-t-[#383B4B] text-center pt-6">
          <p className="barlow-condensed-regular h-[17px] w-[216px] text-[#D0D6F9]">
            AVG DISTANCE
          </p>
          <h2 className="bellefair-regular h-[32px] w-[216px] text-[28px]">
            {destination[index].distance}
          </h2>
        </div>
        <div className="flex flex-col items-center h-[61px] pt-6 text-center">
          <p className="barlow-condensed-regular w-[216px] text-[#D0D6F9] h-[17px]">
            EST. TRAVEL TIME
          </p>
          <h2 className="bellefair-regular h-[32px] w-[216px] text-[28px]">
            {destination[index].travel}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Destination;
