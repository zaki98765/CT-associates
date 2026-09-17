import React from 'react'
import { Link } from "react-router-dom";

import {
  IoCallSharp,
  IoLocationSharp,
  IoMailSharp,
} from "react-icons/io5";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import logo from "../assets/logo.png";
function Footer() {
  const text_style = {
    fontFamily: "'Playfair Display', serif",
    fontOpticalSizing: "auto",
  };
  return (

    <>

      <footer className="bg-gray-100 text-black shadow-2xl pt-5">

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Logo & About */}
            <div>

              <img
                src={logo}
                alt="CT Associates"
                className="w-[180px] mb-6"
              />

              <p className="text-gray-600 leading-7 text-sm ">
                C.T. Associates is a professional legal practice providing
                dedicated legal representation, consultation and advisory
                services with extensive experience across various areas of law.
              </p>

              {/* Social Media */}
              <div className="flex gap-4 mt-7">

                <a
                  href="https://www.facebook.com/ahammed.kutty.712"
                  className="w-10 h-10 rounded-full border border-gray-700
                           flex items-center justify-center
                           hover:bg-[#C9A227] hover:border-[#C9A227]
                           transition-all duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/adv_ct/"
                  className="w-10 h-10 rounded-full border border-gray-700
                           flex items-center justify-center
                           hover:bg-[#C9A227] hover:border-[#C9A227]
                           transition-all duration-300"
                >
                  <FaInstagram />
                </a>

                

              </div>

            </div>


            {/* Quick Links */}
            <div>

              <h3
                className="text-xl mb-6"
                style={text_style}
              >
                Quick Links
              </h3>

              <div className="w-12 h-[2px] bg-[#C9A227] mb-6"></div>

              <ul className="space-y-4 text-gray-600">

                <li>
                  <Link
                    to="/"
                    className="hover:text-[#C9A227] transition"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link to={"/About"}
                    
                    className="hover:text-[#C9A227] transition"
                  >
                    About Us
                  </Link>
                </li>

                

                <li>
                  <Link
                    to={"/Contact"}
                    className="hover:text-[#C9A227] transition"
                  >
                    Our Offices
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/Contact"}
                    className="hover:text-[#C9A227] transition"
                  >
                    Contact
                  </Link>
                </li>

              </ul>

            </div>


            {/* Office Locations */}
            <div>

              <h3
                className="text-xl mb-6"
                style={text_style}
              >
                Our Offices
              </h3>

              <div className="w-12 h-[2px] bg-[#C9A227] mb-6"></div>

              <ul className="space-y-4 text-gray-600">

                <li>
                  <Link
                    to="/mkm"
                    className="hover:text-[#C9A227] transition"
                  >
                    Mukkam
                  </Link>
                </li>

                <li>
                  <Link
                    to="/tham"
                    className="hover:text-[#C9A227] transition"
                  >
                    Thamarassery
                  </Link>
                </li>

                <li>
                  <Link
                    to="/koz"
                    className="hover:text-[#C9A227] transition"
                  >
                    Kozhikode
                  </Link>
                </li>

                <li>
                  <Link
                    to="/kal"
                    className="hover:text-[#C9A227] transition"
                  >
                    Kalpetta
                  </Link>
                </li>

              </ul>

            </div>


            {/* Contact */}
            <div>

              <h3
                className="text-xl mb-6"
                style={text_style}
              >
                Get In Touch
              </h3>

              <div className="w-12 h-[2px] bg-[#C9A227] mb-6"></div>


              {/* Phone */}
              <a
                href="tel:+919447089145"
                className="flex gap-4 items-start mb-5 group"
              >

                <IoCallSharp
                  className="text-[#C9A227] text-xl mt-1"
                />

                <div>
                  <p className="text-sm text-gray-900">
                    Call Us
                  </p>

                  <p className="text-gray-600 group-hover:text-[#C9A227] transition">
                    +91 944 708 9145
                  </p>
                </div>

              </a>

              {/* Location */}
              <div className="flex gap-4 items-start">

                <IoLocationSharp
                  className="text-[#C9A227] text-xl mt-1"
                />

                <div>
                  <p className="text-sm text-gray-900">
                    Head Office
                  </p>

                  <p className="text-gray-600 leading-6">
                    Mukkam, Kozhikode,<br />
                    Kerala, India
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Gold Divider */}
        <div className="border-t border-gray-800"></div>


        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">

          <div className="flex flex-col md:flex-row
                        justify-between items-center gap-4">

            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} CT Associates. All Rights Reserved.
            </p>

            <p className="text-sm text-gray-500 text-center">
              Professional Legal Services
            </p>

          </div>

        </div>

      </footer>


    </>
  )
}

export default Footer


