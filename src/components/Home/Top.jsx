import React from "react";

import "swiper/css";  
import "swiper/css/navigation";
import { slideData } from "../helper/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../common/Heading";


function Top() {
  return (
    <div className="bg-black">
      <div className="max-w-[1466px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12  mt-20 md:mt-24 lg:mt-28 2xl:mt-32 pt-12 md:pt-14">
        
        <Heading title={"Top Picks"} hclassName={"text-[#fff]"}/>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },

            450: {
              slidesPerView: 3,
            },

            670: {
              slidesPerView: 4,
            },
            870: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          Navigation={true}
          modules={[Navigation]}
          className="mySwiper "
        >
          {slideData.map((item, index) => (
            <SwiperSlide key={index} className="text-white text-center mt-16 lg:mt-20">
              <div className="relative overflow-hidden after:content-[''] after:bg-[#000]/[0.5] after:absolute after:w-full after:h-full after:top-0 after:left-full after:bottom-0 after:transition-all after:duration-700 after:ease-in-out after:hover:left-0 image-item group flex justify-center items-center text-center">
                <span className="absolute justify-center text-center flex items-center bg-white opacity-0 group-hover:opacity-100 duration-700 z-[11]">
                  <a
                    className="text-black bg-white py-2.5 px-6 fs-16 font-normal leading-[105%] text-black"
                    href="/"
                  >
                    Add
                  </a>
                </span>
                <img src={item.img} alt="slider" />
              </div>
              <p className="text-xl md:text-2xl font-normal leading-[105%] play pb-12 sm:pb-14 md:pb-16 lg:pb-20 mt-1">
                {item.text}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Top;