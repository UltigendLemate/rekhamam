import '@/styles/globals.css'
import scroll from "../../public/scroll.png";
import Image from "next/image";
import { useState,useRef,useLayoutEffect ,useEffect} from "react";

import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function App({ Component, pageProps }) {
  const [hamburger, sethamburger] = useState(false);
  const [voice, setvoice] = useState(false);
  const aud = useRef(null);

  useEffect(() => {

   sethamburger(false);
  }, [Component, pageProps])


  useEffect(() => {
    if (voice) {
      aud.current.play();
    } 
    else if (!voice) {
      aud.current.pause();
    }
    console.log(voice)

  

  }, [voice])
  return (<>
  <audio controls  autoplay loop  className="fixed -top-20 -left-0" ref={aud}>

<source src="./test.mp3" type="audio/mp3"/>
Your browser does not support the audio element.
</audio>
  <Component {...pageProps} />
  {/* menu button on bl  */}
  <div
        className="bg-white h-10 lg:h-14 lg:w-14 w-10 z-50  rounded-full p-2 fixed bottom-4 left-4 text-2xl lg:text-4xl cursor-pointer"
        onClick={() =>
          sethamburger((prev) => {
            return !prev;
          })
        }
      >
        {hamburger ?  <AiOutlineClose /> :<AiOutlineMenu /> }
      </div>

      {/* menu button on br  */}
      <div
        className="bg-white h-10 lg:h-14 lg:w-14 w-10 z-50  rounded-full p-2 fixed bottom-4 right-4 cursor-pointer"
        onClick={() =>
          setvoice((prev) => {
            return !prev;
          })
        }
      >
        {voice ? (
          <img src="https://img.icons8.com/ios/50/null/medium-volume--v1.png" />
        ) : (
          <img src="https://img.icons8.com/ios/50/null/no-audio--v1.png" />
        )}
      </div>

      {hamburger&& <div className="Navm  z-50 backdrop-blur-md h-full w-full fixed top-0 left-0 py-10">
        <div className="max-w-[500px] h-[90%] grid relative sm:absolute sm:left-[calc(50%-250px)] items-center font-bold justify-center">
          <div className="text-black bg-white rounded-full p-1 font-extrabold text-2xl absolute top-[6rem] right-[5.5rem] lg:right-[6rem] cursor-pointer" onClick={() =>
          sethamburger((prev) => {
            return !prev;
          })
        }>
          <AiOutlineClose />
          </div>

          <div className=" max-w-[400px] h-[60%] absolute top-44 left-[calc(50%-90px)]  grid justify-around">
            <Link legacyBehavior  href="/"><a href=" " className="text-white underline text-xl capitalize text-center">About Me</a></Link>
            <Link legacyBehavior  href="/journey"><a href="" className="text-white underline text-xl capitalize text-center">My Journey</a></Link>
            <Link legacyBehavior  href="/"><a href="" className="text-white underline text-xl capitalize text-center">Adorable Memories</a></Link>
            <Link legacyBehavior  href="/"><a href="" className="text-white underline text-xl capitalize text-center">My Family</a></Link>

          </div>

          <Image src={scroll}  alt="scroll" className=" object-fill  w-[90vw] h-[90vh]" />
        </div>


      </div>}
  </>)
}
