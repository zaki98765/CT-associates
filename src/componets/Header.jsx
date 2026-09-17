import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gray-50 text-black shadow-sm sticky top-0 z-50">

      {/* Main Navbar */}
      <div className="h-20 flex items-center p-5">
        <Link to={"/"}>

          {/* Logo */}
          <img
            src={logo}
            alt="CT Associates Logo"
            className="w-[190px]"
          />
        </Link>


        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center gap-8">

          <Link to={"/"} className="transition-all duration-300 hover:text-yellow-600 hover:scale-110" >
            Home
          </Link>
          <Link to={"/About"} className="transition-all duration-300 hover:text-yellow-600 hover:scale-110" >
            About
          </Link>


          <Link
            to={"/Contact"}
            className="transition-all duration-300 hover:text-yellow-600 hover:scale-110"
          >
            Contact
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden text-3xl hover:text-yellow-600 transition"
        >
          {open ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="flex flex-col gap-5 px-6 pb-6">

          <Link to={"/"}
            
            className="hover:text-yellow-600 transition"
          >
            Home
          </Link>

          <Link to="/About" className="hover:text-yellow-600 transition">

            About

          </Link>


          <Link to={"/contact"}               className="hover:text-yellow-600 transition">

           

            
              Contact
            </Link>

        </nav>
      </div>

    </header>
  )
}

export default Header