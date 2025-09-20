import React from "react";
import { motion } from "framer-motion";
import About from "../AboutPage/About";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  //  for type writer

  const [typeEffect] = useTypewriter({
    words: [
      "FullStack Java ",
      "JavaScript",
      "React",
      "Spring Boot",
      "Tailwind",
      "GitHub",
    ],
    loop: {},
    typeSpeed: 190,
    delaySpeed: 45,
  });

  return (
    <>
      <div className="min-h-screen text-white font-sans flex flex-col justify-center items-center pt-20 px-5">
        {/* Profile Image with gradient ring */}
        <div className="w-60 h-60 rounded-full p-1 mb-6 ">
          <motion.img
            src="public/suvam.jpg"
            alt="Profile"
            loading="lazy" 
            className="w-full h-full object-cover rounded-full"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
            I'm Suvam Sarangi,
          </span>
        </h1>

        <h2 className="flex flex-col md:flex-row justify-center items-center mt-4 text-xl md:text-4xl font-bold text-white gap-1 md:space-x-1 text-center md:text-left">
          <span className="px-2 py-1 rounded">I work with</span>

          <span className="inline-flex justify-center items-center self-center min-w-[220px] md:min-w-[280px] h-[50px] text-[#FACC15] text-center px-1 py-1 rounded">
            {typeEffect}
            <Cursor cursorColor="white" cursorBlinking={false} />
          </span>
        </h2>

        <p className="text-center text-base md:text-lg text-gray-300 mt-5 max-w-3xl">
         I am a passionate FullStack developer from Odisha, India, and a recent MCA graduate, eager to begin my professional journey and contribute to impactful projects.
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
      <div></div>
    </>
  );
};

export default Home;
