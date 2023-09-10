import React from "react";
import Image from "next/image";

import { audios } from "@/utility/data";

const Family = () => {
  return (
    <div>
    <div className="mb-32">
      <h2 className=" text-5xl tracking-wider md:text-8xl font-bold text-center py-10 pb-5 font-tangerine">
        <span className="heading">My Family &</span>{" "}
        <span className="heading">Friends</span>
      </h2>

      <p className="text-white text-center px-3 text-3xl md:text-5xl font-tangerine ">
      Graced by the Voices of Love: My Family and Friends Speak from the Heart.
      </p>
<div className="grid grid-cols-1 md:mx-20 sm:grid-cols-2 lg:grid-cols-3 ">
  {audios.map((audio, index) => {
    return (
<div key={index} className="flex items-center  rounded-3xl mx-5 my-5 bg-gradient-to-r to-red-200/10  from-white/20">
        <div className="relative w-1/4 aspect-[13/16]  h-fit m-2 ">
          <Image
            src={`/${audio.img}`}
            alt="pic"
            className="aspect- object-cover rounded-3xl "
            fill={true}
          />
        </div>

        <div className="flex flex-col w-3/4 px-3 my-2 text-white font-molengo text-center ">
          <h3 className="heading  text-3xl  font-bold">{audio.name}</h3>
          <h4 className="text-lg">{audio.title}</h4>
          <audio controls  loop className=" h-8 my-2 max-w-[220px] mx-auto">
            <source src={`/${audio.aud}`} type="audio/mp3" className="" />
            Your browser does not support the audio element..
          </audio>
        </div>
      </div>
    )})}
      
      </div>
    </div>

    <div className="fixed sm:hidden bottom-0 left-0 h-32 w-[100vw] bg-[#510000] shadowOnImg">
        <Image src="/set.png" alt="set" fill={true} className=" scale-90 " />
      </div>

            {/* left image on md+  */}
            <div className="fixed hidden sm:block rotate-90 top-[calc(50%-40px)] right-[calc(50%-40px)] h-20 w-full  ">
        <Image
          src="/set.png"
          alt="set"
          fill={true}
          className=" scale-90 object-contain"
        />
      </div>

      {/* right img on md+  */}
      <div className="fixed hidden sm:block -rotate-90 top-[calc(50%-40px)] left-[calc(50%-40px)] h-20 w-full  ">
        <Image
          src="/set.png"
          alt="set"
          fill={true}
          className=" scale-90 object-contain"
        />
      </div>

    </div>
  );
};

export default Family;
