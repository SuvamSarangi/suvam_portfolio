import React from "react";
import { educationData } from "./education";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Certification from "../CertificationPage/Certification";
const Education = () => {
  return (
    // <div className='min-h-screen border border-amber-400 '>
    //     <h1 className='text-center text-white text-4xl font-bold mb-12'>Education</h1>
    //     <div className='flex items-center justify-center relative'>
    //         <div className="min-h-screen w-1 bg-blue-800 border border-blue-800 "></div>
    //         <div className='absolute top-2 w-8 h-8 rounded-full bg-purple-600'></div>
    //     </div>

    // </div>
    <section className=" text-white py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

      <div className="relative max-w-4xl mx-auto ">
        {/* Vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600 z-0" />

        <div className="flex flex-col gap-20 relative z-10">
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            const ref = useRef(null);
            const isInView = useInView(ref, { once: false });
            const slideFrom = isLeft ? -100 : 100; // left or right
            return (
              <div
                key={index}
                className="relative flex flex-row w-full items-center min-h-[150px]"
              >
                {/* Left Side */}
                {isLeft ? (
                  <>
                    <div className="w-1/2 flex justify-end pr-8 ">
                      <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: slideFrom }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-gray-800 p-5 rounded-lg border border-purple-500 shadow-md text-right"
                      >
                        <h3 className="text-xl font-bold">{edu.title}</h3>
                        <p className="text-purple-300">{edu.institution}</p>
                        <p className="text-gray-400">{edu.field}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                      </motion.div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900 z-10" />
                    <div className="w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="w-1/2" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900 z-10" />
                    <div className="w-1/2 flex justify-start pl-8">
                      <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: slideFrom }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-gray-800 p-5 rounded-lg border border-purple-500 shadow-md text-left"
                      >
                        <h3 className="text-xl font-bold">{edu.title}</h3>
                        <p className="text-purple-300">{edu.institution}</p>
                        <p className="text-gray-400">{edu.field}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Certification/>
    </section>
  );
};

export default Education;
