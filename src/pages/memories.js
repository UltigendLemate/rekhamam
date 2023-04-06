import React from 'react'

const memories = () => {
  return (
    <div>

<h2 className=" text-6xl tracking-wider md:text-8xl font-bold text-center py-10 pb-5 font-tangerine">
        <span className='heading'>My</span>  <span className='heading'>Adorable</span> <span className='heading'>Memories...</span>
      </h2>


      <div className='grid grid-cols-2 memories-grid px-5 gap-3 mb-10 md:grid-cols-4' >
        
        <img src="/memories/6.jpg" className='col-span-1 object-cover  md:row-span-2' alt="" />
        <img src="/memories/2.jpg" className='col-span-1 md:row-span-2' alt="" />
        {/* <img src="/memories/5.jpg" className='col-span-1 row-span-2  ' alt="" /> */}
        
        <div className='col-span-1 row-span-2  relative'><img src="/memories/5.jpg"  alt="" /> <p className='para'>My son convinced us to come to the Golden Temple. It was wonderful.</p></div>
        <div className='col-span-1 relative'><img src="/memories/1.jpg"  alt="" /> <p className='para'>This is me with my husband, son and grandson.</p></div>
        {/* <img src="/memories/1.jpg" className='col-span-1' alt="" /> */}

 
        <img src="/memories/4.jpg" className='col-span-1 md:object-cover md:col-span-1' alt="" />
        <video controls className='col-span-2 md:col-span-1 d'>
        <source src="/memories/7.mp4" />

        </video>
        {/* <img src="/memories/8.jpg" className='col-span-1 object-cover row-span-2' alt="" /> */}
        <div className='col-span-1 object-cover row-span-2 relative'><img src="/memories/8.jpg"  alt="" /> <p className='para'>My husband loves to celebrate his birthdays with our family.</p></div>
        <img src="/memories/10.jpg" className='col-span-1' alt="" />
        <img src="/memories/11.jpg" className='col-span-1' alt="" />

        <img src="/memories/13.jpg" className='col-span-1' alt="" />
        {/* <img src="/memories/9.jpg" className='col-span-1 row-span-2 ' alt="" /> */}
        <div className='col-span-1 row-span-2  relative'><img src="/memories/9.jpg"  alt="" /> <p className='para'>My dear husband</p></div>
        {/* <img src="/memories/16.jpg" className='col-span-1' alt="" /> */}
        <div className='col-span-1 relative'><img src="/memories/16.jpg"  alt="" /> <p className='para'>So many cherished memories of mine reside in this house.</p></div>
        <img src="/memories/23.jpg" className='col-span-1 ' alt="" />

        {/* <img src="/memories/12.jpg" className='col-span-1' alt="" /> */}
        <div className='col-span-1 relative'><img src="/memories/12.jpg"  alt="" /> <p className='para'>Me and my daughter-in-law playing around with cute hats.</p></div>
        <img src="/memories/15.jpg" className='col-span-1 row-span-2' alt="" />

        <img src="/memories/17.jpg" className='col-span-1' alt="" />
        <img src="/memories/18.jpg" className='col-span-1' alt="" />
        <img src="/memories/20.jpg" className='col-span-1 row-span-2' alt="" />
        <img src="/memories/22.jpg" className='col-span-1' alt="" />
        {/* <img src="/memories/21.jpg" className='col-span-1' alt="" /> */}
        <div className='col-span-1 relative'><img src="/memories/21.jpg"  alt="" /> <p className='para'>Nothing makes us as happy as a delicious feast does. #foodie</p></div>
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
        {/* <img src="/memories/31.jpg" className='col-span-1' alt="" /> */}
        <div className='col-span-1 relative'><img src="/memories/31.jpg"  alt="" /> <p className='para'>Old pictures give us an opportunity to relive those moments.</p></div>
        <img src="/memories/29.jpg" className='col-span-1' alt="" />
        <img src="/memories/34.jpg" className='col-span-1 md:col-span-2 ' alt="" />
        <img src="/memories/35.jpg" className='col-span-1 ' alt="" />
        <img src="/memories/32.jpg" className='col-span-1 md:col-span ' alt="" />
        <img src="/memories/33.jpg" className='col-span-2 md:row-span-2' alt="" />

        {/* <img src="/memories/3.jpg" className='col-span-2' alt="" /> */}
        <div className='col-span-2 relative'><img src="/memories/3.jpg"  alt="" /> <p className='para'>I lived my last moments in absolute peace. I ate as much as I could and we really enjoyed the night. I have no regrets in my life. I was blessed with a very loving family and very supportive friends.</p></div>



        


      </div>
    </div>
  )
}

export default memories