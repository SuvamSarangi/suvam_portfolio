import React from "react";
import { educationData } from "./education";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  return (
   <section className="text-white py-12">
  <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

  <div className="relative max-w-6xl mx-auto px-4">
    {/* Vertical center line */}
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600 z-0" />

    <div className="flex flex-col gap-12 relative z-10">
      {educationData.map((edu, index) => {
        const isLeft = index % 2 === 0;
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false });
        const slideFrom = isLeft ? -100 : 100;

        return (
          <div
            key={index}
            className="relative flex flex-col md:flex-row w-full items-center md:min-h-[150px]"
          >
            {isLeft ? (
              <>
                {/* Left side */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-8">
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: slideFrom }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-gray-800 p-5 rounded-lg border border-purple-500 shadow-md text-center md:text-right max-w-md"
                  >
                  
                    <i className={`${edu.image}  text-white`}></i>
               
                    <h3 className="text-xl font-bold">{edu.title}</h3>
                    <p className="text-purple-300">{edu.institution}</p>
                    <p className="text-gray-400">{edu.field}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900 z-10" />

                {/* Right spacer */}
                <div className="hidden md:block w-1/2" />
              </>
            ) : (
              <>
                {/* Left spacer */}
                <div className="hidden md:block w-1/2" />

                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900 z-10" />

                {/* Right side (desktop) */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-0 md:pl-8">
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: slideFrom }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-gray-800 p-5 rounded-lg border border-purple-500 shadow-md text-center md:text-left max-w-md"
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
</section>


  );
};

export default Education;
