import React from 'react'

const memories = () => {
  return (
    <div>

<h2 className=" text-6xl tracking-wider md:text-8xl font-bold text-center py-10 pb-5 font-tangerine">
        <span className='heading'>My</span>  <span className='heading'>Adorable</span> <span className='heading'>Memories...</span>
      </h2>


      <div className='grid grid-cols-2 memories-grid px-5 gap-3 mb-10 md:grid-cols-4' >
        <img src="/memories/1.jpg" className='col-span-2 ' alt="" />
        <img src="/memories/6.jpg" className='col-span-1 object-cover  md:row-span-2' alt="" />
        <img src="/memories/2.jpg" className='col-span-1 md:row-span-2' alt="" />
        <img src="/memories/5.jpg" className='col-span-1 row-span-2 md:object-cover ' alt="" />
        <img src="/memories/3.jpg" className='col-span-1' alt="" />
        <img src="/memories/4.jpg" className='col-span-1 md:object-cover md:col-span-2' alt="" />
        <video controls className='col-span-2 md:col-span-1 d'>
        <source src="/memories/7.mp4" />

        </video>
        <img src="/memories/8.jpg" className='col-span-1 object-cover row-span-2' alt="" />
        <img src="/memories/10.jpg" className='col-span-1' alt="" />
        <img src="/memories/11.jpg" className='col-span-1' alt="" />

        <img src="/memories/13.jpg" className='col-span-1' alt="" />
        <img src="/memories/9.jpg" className='col-span-1 row-span-2 ' alt="" />
        <img src="/memories/16.jpg" className='col-span-1' alt="" />
        <img src="/memories/23.jpg" className='col-span-1 ' alt="" />

        <img src="/memories/12.jpg" className='col-span-1' alt="" />
        <img src="/memories/15.jpg" className='col-span-1 row-span-2' alt="" />

        <img src="/memories/17.jpg" className='col-span-1' alt="" />
        <img src="/memories/18.jpg" className='col-span-1' alt="" />
        <img src="/memories/20.jpg" className='col-span-1 row-span-2' alt="" />
        <img src="/memories/22.jpg" className='col-span-1' alt="" />
        <img src="/memories/21.jpg" className='col-span-1' alt="" />
        <img src="/memories/24.jpg" className='col-span-1' alt="" />
        <img src="/memories/19.jpg" className='col-span-1 row-span-2' alt="" />
        <img src="/memories/25.jpg" className='col-span-1' alt="" />

        <video controls className='col-span-1 md:col-span-1 w-full row-span-2 rounded-lg '>
        <source src="/memories/bday celeb.mp4" />

        </video>
        <img src="/memories/26.jpg" className='col-span-1' alt="" />
        <img src="/memories/28.jpg" className='col-span-1' alt="" />
        <img src="/memories/27.jpg" className='col-span-1 row-span-2' alt="" />
        <img src="/memories/30.jpg" className='col-span-1' alt="" />
        <img src="/memories/31.jpg" className='col-span-1' alt="" />
        <img src="/memories/29.jpg" className='col-span-1' alt="" />
        <img src="/memories/34.jpg" className='col-span-1' alt="" />
        <img src="/memories/35.jpg" className='col-span-1' alt="" />
        <img src="/memories/32.jpg" className='col-span-1' alt="" />
        <img src="/memories/33.jpg" className='col-span-2' alt="" />


        


      </div>
    </div>
  )
}

export default memories