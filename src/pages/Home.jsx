import React from 'react'
import banner from '../assets/banner.png'
import about_banner from "../assets/about_banner.png"
function Home() {
  return (
    <>
    <div className='bg-gray-50'>
      
 {/* Hero Banner */}
      <div className="w-full">
        <img
          src={banner}
          alt="CT Associates Banner"
          className="w-full h-auto md:h-[70vh] md:object-cover"
        />
      </div>

      {/* About Section */}
      <div className="w-full flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 py-12">

        {/* Image */}
        <div className="w-full md:w-1/2">
          {/* <img
            src={}
            alt="CT Associates"
            className="w-full rounded-lg"
          /> */}
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-black">
          <p className="text-justify leading-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dolore dicta necessitatibus voluptatibus earum, quas molestias
            consequuntur ipsam rem numquam, modi itaque quis.

            Qui voluptatum numquam delectus, repudiandae provident aliquam
            ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Optio quidem excepturi, at porro molestiae soluta nobis a
            repellendus molestias eum error magnam id tempora officiis.

            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius laboriosam placeat quia exercitationem nobis laborum natus
            doloremque, labore eveniet optio officia libero.
          </p>
        </div>

      </div>


    </div>
     
    </>
  )
}

export default Home