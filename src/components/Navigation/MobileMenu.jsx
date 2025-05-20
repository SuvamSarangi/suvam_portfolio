import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { navItems } from "./navItems.js";
const MobileMenu = ({isOpen,setIsOpen,toggleMenu}) => {
   

  
  return (
     <>
     {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4 text-base font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.key}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-medium px-6 py-2 rounded-full">
              Contact
            </button>
          </div>
        </div>
      )}
      <div className="md:hidden z-50 " onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
     </>
  )
}

export default MobileMenu
