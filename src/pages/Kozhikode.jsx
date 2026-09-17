import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { Link } from 'react-router-dom';
const text_style = {
    fontFamily: "Merriweather",
    fontOpticalSizing: "auto",
};

function Kozhikode() {
    return (
        <>

            <div className="bg-gray-50 w-full  py-10">

                {/* Heading */}
                <h2
                    className="text-3xl md:text-4xl text-center mb-10"
                    style={text_style}
                >
                    Calicut Office
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
                                <p>
                                    1st Floor Court View
                                </p>
                                <p>Arcase- Court Road
                                </p>
                                <p>Opposite Distric Court</p>
                                <p>
                                    Kozhikode - 673 001</p>
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

                        <iframe
                            className="w-full h-[300px] md:h-[400px] rounded-2xl shadow-2xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1373880004703!2d75.77423147273866!3d11.251302230170682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6593a3fd1657f%3A0x76592c073b3691d7!2sCT%20ASSOCIATES%20%7C%20Adv%20CT%20Ahammed%20Kutty!5e0!3m2!1sen!2sin!4v1789627084107!5m2!1sen!2sin"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        />

                    </div>

                </div>

            </div>

        </>
    )
}

export default Kozhikode