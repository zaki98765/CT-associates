import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { Link } from 'react-router-dom';
const text_style = {
    fontFamily: "Merriweather",
    fontOpticalSizing: "auto",
};
function Tham() {
    return (
        <>

            <div className="bg-gray-50 w-full  py-10">

                {/* Heading */}
                <h2
                    className="text-3xl md:text-4xl text-center mb-10"
                    style={text_style}
                >
                    Thamarassery Office
                </h2>

                {/* Content */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-16">

                    {/* Address */}
                    <div className="p-6 md:p-10">


                        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-10">

                            <h3
                                className="text-2xl"
                                style={text_style}
                            >
                                Office Address
                            </h3>

                            <div className="text-lg text-gray-700 leading-relaxed text-center md:text-left mb-5">
                                <p> Opp. court Complex</p>
                                <p>Thamarassery</p>

                                <p>Kozhikode (Dis)</p>
                                <p>pin- 673573 </p>
                            </div>

                        </div>
                        <div className="flex flex-col md:flex-row gap-3 justify-center items-center">

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
                    </div>

                    {/* Google Map */}
                    <div className="w-full p-4">



                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.438988461417!2d75.92998269699686!3d11.423092063693268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba669bd6f40f30b%3A0x954c0b69b670fe81!2sCT%20ASSOCIATES%7C%20Adv%20CT%20Ahammed%20Kutty!5e0!3m2!1sen!2sin!4v1789627846432!5m2!1sen!2sin" width="600" height="450" className="w-full h-[300px] md:h-[400px] rounded-2xl shadow-2xl" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Tham