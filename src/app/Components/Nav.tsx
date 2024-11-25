"use client";
import React, { useState } from "react"
import Link from "next/link"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <nav className="bg-green-400 shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          
          <Link className="text-[24px] font-bold text-gray-700 hover:underline" href="/">
          Design. Develop. Deliver.
          </Link>

          
          <div className="space-x-4 hidden md:flex">
            <Link className="text-gray-700 hover:text-blue-600 text-[25px] font-bold font-serif" href="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-blue-600 text-[25px] font-bold" href="/About">
              About
            </Link>
            <Link className="text-gray-700 hover:text-blue-600 text-[25px] font-bold" href="/Services">
              Services
            </Link>
            <Link className="text-gray-700 hover:text-blue-600 text-[25px] font-bold" href="/Contact">
              Contact
            </Link>
          </div>

          
          <div className="md:hidden">
            <button className="text-gray-700 text-[30px]" onClick={toggleMenu}>
              &#9776; {/* Hamburger icon */}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4 px-6 bg-green-400">
            <Link className="text-gray-700 hover:text-blue-600 text-[25px] font-bold" href="/">
              Home
            </Link>
            <Link className="text-gray-700 hover:text-blue-600 text-[25px] font-bold" href="/About">
              About
            </Link>
            <Link className="text-gray-700 hover:text-blue-600 text-[25px] font-bold" href="/Services">
              Services
            </Link>
            <Link className="text-gray-700 hover:text-blue-600 text-[25px] font-bold" href="/Contact">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Nav
