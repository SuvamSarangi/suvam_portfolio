import React from "react";
import { frontend, backend, database, tools } from "./skills.js";
import { data } from "framer-motion/client";

const Skill = () => {
  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-12 py-12 overflow-x-hidden">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
        My Skills
      </h1>
      <p className="text-gray-500 ml-7 mb-4">
        Technologies and tools I've worked with throughout my projects
      </p>
      <div className="ml-7">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white text-center sm:text-left">
            Front End
          </h2>

          <div className="flex flex-wrap gap-5 sm:gap-7 justify-center sm:justify-start">
            {frontend.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2 w-20 sm:w-24"
              >
                <div className="bg-[#1C1C21] p-3 sm:p-5 rounded-full shadow">
                  <img
                    src={skill.image[0].src}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    alt={skill.skill}
                  />
                </div>
                <span className="text-sm sm:text-base text-white">
                  {skill.skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-white text-center sm:text-left">
            Backend
          </h2>

          <div className="flex flex-wrap gap-5 sm:gap-7 justify-center sm:justify-start">
            {backend.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 w-20 sm:w-24 text-center"
              >
                <div className="bg-[#1C1C21] p-3 sm:p-5 rounded-full shadow">
                  <img
                    src={skill.image[0].src}
                    className=" w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                </div>
                <span className="text-sm  sm:text-base text-white ">
                  {skill.skill}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold  mb-8 sm:mb-12 text-white text-center sm:text-left">
            Databases
          </h2>
          <div>
            <div className="flex gap-5 sm:gap-7 justify-center sm:justify-start">
              {database.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 w-20 sm:w-24 text-center"
                >
                  <div className="bg-[#1C1C21] p-3 sm:p-5 rounded-full shadow">
                    <img
                      src={skill.image[0].src}
                      className=" w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>
                  <span className="text-white text-sm sm:text-base">
                    {skill.skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold  mb-8 sm:mb-12 text-white text-center sm:text-left">
            Tools & Platforms
          </h2>
          <div>
            <div className="flex gap-5 sm:gap-7 justify-center sm:justify-start">
              {tools.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 w-20 sm:w-24 text-center"
                >
                  <div className="bg-[#1C1C21] p-3 sm:p-5 rounded-full shadow">
                    <img
                      src={skill.image[0].src}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                  </div>
                  <span className="text-white text-sm sm:text-base">
                    {skill.skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
