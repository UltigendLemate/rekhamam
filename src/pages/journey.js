import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { journeyMilestones } from "@/utility/data";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Journey() {
  return (
    <div className="">
      <h2 className="heading text-7xl tracking-wider md:text-8xl font-bold text-center py-10 pb-5 font-tangerine">
        My Journey...
      </h2>
      <div className="grid lg:grid-cols-3 lg:gap-10 lg:px-10">
        {journeyMilestones.map((milestone, index) => {
          return (
            <div key={index} className="w-full flex py-5 lg:shadow-lg lg:shadow-yellow-700/40 flex-col items-center relative">
          <Swiper
            pagination={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className=" w-[80vw] lg:w-[85%] lg:h-72  h-56 "
          >
            {milestone.img.map((img, index) => {
              return(
                <SwiperSlide key={index} className="relative">
              <Image
                src={`/journey/${img}`}
                alt="journey image"
                fill={true}
                className=" object-cover"
              />
            </SwiperSlide>
              )
            }
            )}
          </Swiper>
          <div className="relative "></div>
          <h3 className="heading text-3xl py-4 text-left font-kanit w-[80%] tracking-widest font-bold">
            {milestone.year}
          </h3>
          <p className="text-white w-[80%] font-kanit">
            {milestone.text}
          </p>
        </div>
          )
        })}
        

      </div>
      {/* image size 300x224 or 500 x 375 */}
    </div>
  );
}
