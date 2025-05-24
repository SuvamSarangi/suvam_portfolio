import React from "react";
import { motion } from "framer-motion";
import About from "../AboutPage/About";

const Home = () => {
  return (
    <>
    
    <div className="min-h-screen text-white font-sans flex flex-col justify-center items-center pt-20 px-5">
    {/* Profile Image with gradient ring */}
    <div className="w-60 h-60 rounded-full p-1 mb-6 ">
      <motion.img
        src="/Suvam.jpeg"
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
          initial={{
                opacity:0,
                scale:0.5
        
              }}
              animate={{
               opacity:1,
               scale:1
              }}
              transition={{
                duration:1,
                delay:0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
      />
    </div>

    {/* Heading */}
    <h1 className="text-center text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl">
     
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
      I'm Suvam Sarangi,
      </span>
       FullStack developer based in India.
    </h1>
    <p className="text-center text-base md:text-lg text-gray-300 mt-5 max-w-3xl">
      I am a FullStack developer from Hyderabad, India with 1 years of experience in multiple companies like Microsoft, Tesla and Apple.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex gap-5 flex-wrap justify-center">
      <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-medium text-sm shadow-lg hover:border border-amber-200">
        Connect with me
      </button>
      <button className="border border-white px-6 py-3 rounded-full text-white font-medium text-sm hover:bg-white hover:text-black transition">
        My resume
      </button>
    </div>
  </div>
<div>

</div>
  </>
  );
};

export default Home;
