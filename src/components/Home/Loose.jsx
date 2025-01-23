import React from "react";
import { looseData } from "../helper/Helper";
import Heading from "../common/Heading";


function Loose() {
  return (
    <div className="max-w-[1466px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 mt-[70px] md:mt-[90px] lg:mt-[112px]">
      <Heading title={"Loose Charms"}/>
      <div className="flex flex-wrap justify-center xl:justify-between gap-x-4 gap-y-6 mt-[60px] md:mt-[73px]">
        {looseData.map((item, index) => (
          <div className="border-2 border-[rgba(0,0,0,0.10)]" key={index}>
            <div className="max-w-[260px] sm:max-w-[230px] lg:max-w-[257px] xl:max-w-[220px] min-[1330px]:max-w-[230px] min-[1380px]:max-w-[240px] 2xl:max-w-[257px] relative overflow-hidden after:content-[''] after:bg-[#000]/[0.5] after:absolute after:w-full after:h-full after:top-0 after:left-full after:bottom-0 after:transition-all after:duration-700 after:ease-in-out after:hover:left-0 image-item group flex flex-col justify-center text-center items-center">
              <span className="absolute justify-center text-center flex items-center after:duration-700 after:transition-all z-[11] mx-auto flex-col opacity-0 group-hover:opacity-100">
                <p className="text-nowrap mb-5 text-white text-center font-normal play text-xl">
                  Lorem ipsum dolor
                </p>
                <p className="text-[#FF9900] text-nowrap mb-6 text-center font-normal text-xl leading-[105%] popins">
                  € 5.99
                </p>
                <a
                  className="bg-[#BD0004] py-2.5 px-6 fs-16 font-normal leading-[105%] text-white text-center text-base popins"
                  href="/"
                >
                  Add
                </a>
              </span>
              <img src={item.img} alt="bangle-1" width="100%" />
              <div className="flex items-center w-full justify-between mt-[-41px] relative !group-hover:opacity-0 group-hover:hidden">
                <p className="text-xl font-normal popins leading-[105%] text-black ml-3">
                  {item.number}
                </p>
                <button className="text-[#BD0004] text-base font-normal popins leading-[105%] py-2.5 px-8 border-2 border-[#BD0004]">
                  {item.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loose;