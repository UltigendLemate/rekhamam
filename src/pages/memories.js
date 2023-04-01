import React from 'react'

const memories = () => {
  return (
    <div>

<h2 className=" text-6xl tracking-wider md:text-8xl font-bold text-center py-10 pb-5 font-tangerine">
        <span className='heading'>My</span>  <span className='heading'>Adorable</span> <span className='heading'>Memories...</span>
      </h2>


      <div className='grid grid-cols-2 memories-grid px-5 gap-3 mb-10 md:grid-cols-4'>
        <img src="/memories/1.jpg" className='col-span-2 ' alt="" />
        <img src="/memories/6.jpg" className='col-span-1 object-cover  md:row-span-2' alt="" />
        <img src="/memories/2.jpg" className='col-span-1 md:row-span-2' alt="" />
        <img src="/memories/5.jpg" className='col-span-1 row-span-2 md:object-cover ' alt="" />
        <img src="/memories/3.jpg" className='col-span-1' alt="" />
        <img src="/memories/4.jpg" className='col-span-1 md:object-cover md:col-span-2' alt="" />
        <video controls className='col-span-2 md:col-span-1 d'>
        <source src="/memories/7.mp4" />
      </video>
        


      </div>
    </div>
  )
}

export default memories