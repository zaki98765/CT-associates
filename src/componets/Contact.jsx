import React from 'react'

import { IoCallSharp } from "react-icons/io5";
import { TbDeviceLandlinePhone } from "react-icons/tb";


import { Link } from 'react-router-dom';
function Contact() {
    const text_style = {
        fontFamily: "Merriweather",
        fontOpticalSizing: "auto",
    };

    return (

        <>
            {/* contact details */}
            <div className="w-full">

                <h3
                    className="text-3xl font-semibold text-gray-900 mb-8 text-center mt-10"
                    style={text_style}
                >
                    Visit Our Office
                </h3>

                <div className="flex flex-wrap justify-center gap-6 px-6">
                    <Link to={"/mkm"}>
                        <div
                            className="border-2 border-[#C9A227] rounded-2xl p-6 text-center w-52
                          hover:bg-yellow-50 transition-all duration-300 hover:scale-105"
                        >

                            <h5 className="text-xl text-gray-900" style={text_style}>
                                Mukkam
                            </h5>
                            <p className='text-sm text-gray-400'>Click for more details</p>
                        </div>
                    </Link>



                    <Link to={"/tham"}>
                        <div
                            className="border-2 border-[#C9A227] rounded-2xl p-6 text-center w-52
                          hover:bg-yellow-50 transition-all duration-300 hover:scale-105"
                        >
                            <h5 className="text-xl text-gray-900" style={text_style}>
                                Thamarassery
                            </h5>
                            <p className='text-sm text-gray-400'>Click for more details</p>

                        </div>

                    </Link>

                    <Link to={"/koz"}>
                        <div
                            className="border-2 border-[#C9A227] rounded-2xl p-6 text-center w-52
                          hover:bg-yellow-50 transition-all duration-300 hover:scale-105"
                        >
                            <h5 className="text-xl text-gray-900" style={text_style}>
                                Kozhikode
                            </h5>
                            <p className='text-sm text-gray-400'>Click for more details</p>

                        </div>
                    </Link>

                    <Link to={"/kal"}>
                        <div
                            className="border-2 border-[#C9A227] rounded-2xl p-6 text-center w-52
                          hover:bg-yellow-50 transition-all duration-300 hover:scale-105"
                        >
                            <h5 className="text-xl text-gray-900" style={text_style}>
                                Kalpetta
                            </h5>
                            <p className='text-sm text-gray-400'>Click for more details</p>

                        </div>
                    </Link>


                </div>

            </div>
            <h3 className='text-2xl text-center pt-10' style={text_style}>Contact Us</h3>
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center mt-5">

                {/* Mobile */}
                <a
                    href="tel:+919447089145"
                    className="bg-green-500 py-2 px-5 text-white rounded-lg shadow-lg
                           flex gap-3 items-center justify-center
                           hover:bg-green-600 transition-all duration-300
                           hover:scale-105"
                >
                    <IoCallSharp />
                    +91 9447089145
                </a>

                {/* Mobile */}
                <a
                    href="tel:+917558855007"
                    className="bg-green-500 py-2 px-5 text-white rounded-lg shadow-lg
                           flex gap-3 items-center justify-center
                           hover:bg-green-600 transition-all duration-300
                           hover:scale-105"
                >
                    <IoCallSharp />
                    +91 7558855007
                </a>

                {/* Landline */}
                <a
                    href="tel:+914952998145"
                    className="bg-green-500 py-2 px-7 text-white rounded-lg shadow-lg
                           flex gap-3 items-center justify-center
                           hover:bg-green-600 transition-all duration-300
                           hover:scale-105"
                >
                    <TbDeviceLandlinePhone />
                    0495 299 8145
                </a>

            </div>
        
                                


        </>
    )
}

export default Contact