// eslint-disable-next-line no-unused-vars
import mobile from "../assets/home/background-home-mobile.jpg"
import './home.css' 
 
const Home = () => {
  return (
    <div  className="bg w-screen md:bg-cover md:bg-home-tablet  lg:bg-home-desktop bg-cover text-white  bg-no-repeat z-0  h-dvh flex flex-col gap-20  ">
      <style>
        background-image: url({mobile})
      </style>
      {/* <img className='w-full z-[-100]  h-dvh' src={bgHomeMbImg} alt="" /> */}
      <div className="px-5 gap-10 flex lg:items-start xl:px-44 xl:mt-[300px] lg:px-80 lg:mt-[600px]  md:mt-40 flex-col items-center mt-16 ">
        <p className="barlow-condensed-regular text-[#D0D6F9] md:text-[25px]">
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className="bellefair-regular text-8xl  md:text-[170px] lg:text-[150px] ">
          SPACE
        </h1>
        <p className="barlow-regular font-normal xl: lg:pl-0 text-[#D0D6F9] text-center lg:w-[630px] lg:text-left lg:text-[18px] md:text-[15px] md:px-44">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex lg:mt-[-490px] xl:mr-[400px] xl:mt-[-400px] items-center justify-center">
        <p className="bellefair-regular text-2xl  text-black p-8 h-44 w-44 relative z-[1] pl-10 pt-20 top-2 md:top-28  md:h-72 md:w-72 md:text-5xl md:pt-28 lg:right-[-700px] lg:h-[300px] lg:w-[300px] lg:pl-14 lg:pt-35 xl:right-[-600px]  xl:h-[240px] xl:w-[240px] xl:pl-6 xl:pt-24  rounded-full bg-white">
          EXPLORE
        </p>
      </div>
    </div>
  );
};

export default Home;
