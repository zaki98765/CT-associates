import React from 'react'
import banner from '../assets/banner.png'
import about_banner from "../assets/about_banner.png"
import Kozhikode from './Kozhikode';
import Kalppeta from './Kalppeta';
import Mkm from './Mkm';
import Tham from './Tham';
import About from '../componets/About';
import { Link } from 'react-router-dom';
import Contact from '../componets/Contact';
function Home() {

  const text_style = {
    fontFamily: "Merriweather",
    fontOpticalSizing: "auto",
  };
  return (
    <>
      <div className='bg-gray-50 scroll-mt-20' id='Home'>

        {/* Hero Banner */}
        <div className="w-full">
          <img
            src={banner}
            alt="CT Associates Banner"
            className="w-full h-auto md:h-[70vh] md:object-cover"
          />
        </div>

        <About />
        
<Contact/>

          
      </div>


    </>
  )
}

export default Home