import React from 'react'
import Image from 'next/image'
export default function Journey () {
  return (
    <div className=''>
        <h2 className='heading text-5xl font-bold text-center py-10 pb-5 font-kanit'>My Journey</h2>
        <div className='w-full flex py-5 flex-col items-center'>
        <div className='relative w-[80%]  h-56'>
            <Image src={"/family.jpeg"} alt='journey1' fill={true} className=' object-cover' />
        </div>
        <h3 className='heading text-3xl py-4 text-left font-kanit w-[80%] tracking-widest font-bold'>1945-1947</h3>
        <p className='text-white w-[80%] font-kanit'>Born in Kharindam District of Pre Independence Pakistan, Raised by Shrimati Trikhta Rani & Shri Harikhand Singh. Young Rekha spent her childhood in the slums of Khera. Amidst struggle</p>

        </div>
        <div className='w-full flex py-5 flex-col items-center'>
        <div className='relative w-[80%]  h-56'>
            <Image src={"/marriage.jpeg"} alt='journey1' fill={true} className=' object-cover' />
        </div>
        <h3 className='heading text-3xl py-4 text-left font-kanit w-[80%] tracking-widest font-bold'>1963</h3>
        <p className='text-white w-[80%] font-kanit'>Her young life made her fall into love with Mr Ranjan Arora. At a young age of 20, she was married on the farms of Chattisgarh. Her life went a round about after marriage. Her responsibilties expinentially increased</p>

        </div>
        <div className='w-full flex py-5 flex-col items-center'>
        <div className='relative w-[80%]  h-56'>
            <Image src={"/family.jpeg"} alt='journey1' fill={true} className=' object-cover' />
        </div>
        <h3 className='heading text-3xl py-4 text-left font-kanit w-[80%] tracking-widest font-bold'>1973 - 1975</h3>
        <p className='text-white w-[80%] font-kanit'>Mrs. Rekha took on the duty of educating unpriveleged students in an NGO. Her pot of blessings were filled everyday by cute smiles of the future generation. That brought her immense pleasure and satisfaction in her life. She used to say &#34;I love smiles&#34;</p>

        </div>


    </div>
  )
}

