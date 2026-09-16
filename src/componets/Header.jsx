import React, { useState } from 'react'
import logo from '../assets/logo.png'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gray-50 text-black shadow-sm sticky top-0 z-50">

      {/* Main Navbar */}
      <div className="h-20 flex items-center p-5">

        {/* Logo */}
        <img
          src={logo}
          alt="CT Associates Logo"
          className="w-[190px]"
        />

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex items-center gap-8">

          <a
            href="#"
            className="transition-all duration-300 hover:text-yellow-600 hover:scale-110"
          >
            Home
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-yellow-600 hover:scale-110"
          >
            About
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-yellow-600 hover:scale-110"
          >
            Contact
          </a>

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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 pb-6">

          <a
            href="#"
            className="hover:text-yellow-600 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-yellow-600 transition"
          >
            About
          </a>

          <a
            href="#"
            className="hover:text-yellow-600 transition"
          >
            Contact
          </a>

        </nav>
      </div>

    </header>
  )
}

export default Header