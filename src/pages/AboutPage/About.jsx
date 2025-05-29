import React from "react";
import {skillsProgress} from './progressBar.js'
import SkillProgressBar from "./SkillProgressBar";

const About = () => {
  
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-16 py-12 ">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
        ABOUT ME
      </h1>

      <div className="w-full flex flex-col lg:flex-row justify-between items-start  gap-12 pt-7  pl-5 relative ">
        {/* Left Column   sm:text-lg lg:text-[19px]*/}
        <div className="w-full lg:max-w-2xl space-y-6 text-white font-semibold text-base sm:text-lg md:text-2xl p-5 ">
          <p className="leading-relaxed ">
            I'm Suvam Sarangi, a recent Software Engineering graduate based in
            Hyderabad, India. I thrive on tackling challenges across various
            domains. I'm interested in engaging in activities where I am unsure
            of the next steps.
          </p>

          <p className="leading-relaxed ">
            Focused on web dev, adept at dynamic sites and decentralized
            systems. Portfolio highlights innovation, while continuous learning
            fuels impactful tech contributions. Reach out anytime for assistance
            or inquiries! <span className="text-2xl">😊</span>
          </p>

          <div className=" border-2 border-[#4A62D6] hover:bg-[#4A62D6] w-48 lg:w-48 sm:w-48 rounded-full relative overflow-visible right-0  duration-300">
            <a
              href="./suvam-FullStackDeveloper.pdf"
              className="inline-flex items-center text-white font-medium text-sm sm:text-base p-2"
              
            >
              <span className="font-bold font-mono">Download Resume</span>
              <div className="absolute top-1/2 right-0  transform  -translate-y-1/2 bg-[#4A62D6] rounded-full">
                <span className="bg-[#4A62D6] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    strokeWidth="currentColor"
                    fill="currentColor"
                    // strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column (Stats Section)    */}
        {/* <div className="flex flex-row justify-center items-center"> */}
        <div className=" grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 p-7 lg:p-5 w-full lg:gap-6 ">
          <div
            className="lg:w-full sm:w-64 h-60 bg-[#0E0E10] border border-indigo-500 hover:border-indigo-500 rounded-lg flex 
        flex-col justify-start items-start pl-5 pt-5  hover:shadow-[0_0_10px_4px] 
        hover:shadow-indigo-500/50
         transition duration-300 hover:scale-110 lg:mr-10
          mb-6
         "
          >
            <p className="text-indigo-600 text-2xl font-bold">Always</p>
            <p className="text-xs tracking-widest mt-2 uppercase text-center px-2 text-white">
              Willing to Learn
            </p>
          </div>

          <div className="lg:w-full sm:w-64 h-60 bg-[#0E0E10] border border-indigo-500 hover:border-indigo-500 rounded-lg flex flex-col justify-start items-start pl-5 pt-5 hover:shadow-[0_0_10px_4px] hover:shadow-indigo-500/50 transition duration-300 hover:scale-110  mb-6">
            <p className="text-indigo-600 text-2xl font-bold">∞</p>
            <p className="text-xs tracking-widest mt-2 uppercase text-center px-2 text-white">
              	Curiosity for Tech
            </p>
          </div>

          <div className="lg:w-full sm:w-64 h-60 bg-[#0E0E10]  border border-indigo-500 hover:border-indigo-500 rounded-lg flex flex-col justify-start items-start pl-5 pt-5  hover:shadow-[0_0_10px_4px] hover:shadow-indigo-500/50 transition duration-300 hover:scale-110  mb-6">
            <p className="text-indigo-600 text-2xl font-bold">100%</p>
            <p className="text-xs tracking-widest mt-2 uppercase text-center px-2 text-white">
             Job Ready
            </p>
          </div>

          <div className="lg:w-full sm:w-64 h-60  bg-[#0E0E10] border border-indigo-500 hover:border-indigo-500 rounded-lg flex flex-col justify-start items-start pl-5 pt-5  hover:shadow-[0_0_10px_4px] hover:shadow-indigo-500/50 transition duration-300 hover:scale-110  mb-6">
            <p className="text-indigo-600 text-2xl font-bold">Self</p>
            <p className="text-xs tracking-widest mt-2 uppercase text-center px-2 text-white">
              Taught & Motivated
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>

      <SkillProgressBar skills={skillsProgress}/>
    </div>
  );
};

export default About;
