import Head from "next/head";
import Image from "next/image";
import { useState,useRef,useLayoutEffect ,useEffect} from "react";


import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import guruji from "../../public/guruji.jpg";
import rekha_main from "../../public/rekha_main.jpg";
import scroll from "../../public/scroll.png";

export default function Home() {

  

  return (
    <div className="bg-[#510000] ">
      <Head>
        <title>Mrs Rekha Arora</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      {/* main content div  */}
      <div className=" bg-[#510000] w-full h-full xl:h-[80vh] lg:flex lg:px-20">
        <div className="md:scale-75 lg:w-[30%] lg:scale-100 lg:flex lg:flex-col lg:space-y-7 lg:ml-5 lg:justify-center lg:h-[100vh] xl:w-[50%]">
          <div className="absolute lg:relative top-24 left-7 h-[48vw] w-[48vw] lg:h-auto lg:w-full lg:top-0 lg:left-0 aspect-square   xl:w-[48%] xl:left-10 xl:top-10">
            <Image
              src={rekha_main}
              alt="rekha_main"
              fill={true}
              className="object-cover rounded-full lg:border-[5px] lg:border-yellow-700"
            />
          </div>
          <div className="absolute top-7 lg:relative right-7 h-[48vw] w-[48vw] lg:top-0 lg:left-0 lg:h-auto lg:w-full  aspect-square xl:absolute xl:top-[calc(50%-17rem)] xl:left-80 xl:w-[48%]">
            <Image
              src={guruji}
              alt="Guruji"
              fill={true}
              className="object-cover rounded-full lg:border-[5px] lg:border-yellow-700"
            />
          </div>
        </div>

        <div className="absolute top-[19rem] lg:static md:top-[calc(50vw-40px)]  lg:flex lg:flex-col lg:justify-center w-full md:text-xl md:w-[calc(100%-160px)] md:left-[80px] xl:w-[50%] xl:h-[100vh] xl:pr-7">
          <h1 className=" text-4xl text-center font-bold font-molengo xl:text-5xl xl:text-[58px]">
         <span className="heading">Voyage into My Memories</span> 
          </h1>
          {/* <h3 className="heading text-3xl text-center font-kanit pt-2 xl:text-4xl">
            1943-2023
          </h3> */}
          <h4 className="text-white text-4xl  text-center font-tangerine pt-6 xl:text-5xl">
            Within the profound memory of hers
          </h4>
          <p className="text-white text-base px-5 text-center pb-5 pt-3 xl:text-xl font-molengo ">
          
I embody strength and determination as both a remarkable educator and a devoted matriarch. My profound kinship with loved ones and friends is deeply rooted, fostering robust bonds. Originating from the vibrant land of Punjab, I embrace my heritage and nourish unbreakable ties with my entire family. My legacy is one of love, togetherness, and inspiration, motivating others to carry it forward beyond my presence.
          </p>

          <div className="w-full h-32 sm:hidden bg-transparent"></div>
        </div>
      </div>

      {/* bottom image on phone  */}
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
}
