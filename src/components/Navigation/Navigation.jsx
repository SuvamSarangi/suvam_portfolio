import React, { useState } from "react";
import { Link } from "react-scroll";
import { navItems } from "./navItems.js";
import MobileMenu from "./MobileMenu.jsx";
const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false);   // LIFTED STATE
       const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white flex justify-around items-center py-5 z-30
    bg-[#0E0E10]/50 backdrop-blur-md  shadow-lg rounded-md">
      <div>
      {/* <img src="suvam.png" className="w-14 h-14 rounded-full "/> */}
        <h2 className=" font-bold text-white ">Suvam</h2>
        
      </div>
      <ul
        className="md:flex space-x-10 text-base font-medium hidden" >
        {navItems.map((item, index) => (
          <li key={index} className="relative group cursor-pointer font-serif">
            <Link
              to={item.key}
              smooth={true}
              duration={800}
              offset={-70}
              spy={true}
              activeClass="active"
              onClick={() => setIsOpen(true)}
            >
              {item.link}
            </Link>
            <span className="absolute left-0 -bottom-1 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>

      <div className="hidden md:block ">
       <div className="flex gap-5">
       <img className="w-12 h-12 invert-100" src="/public/linkedin.png"/>
       <img className="w-12 h-12" src="/public/git.png"/>
       </div>
      </div>

     <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} toggleMenu={toggleMenu}/>
    
    </nav>
  );
};

export default Navigation;
