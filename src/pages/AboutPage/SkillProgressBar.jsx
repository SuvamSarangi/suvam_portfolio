import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
const SkillProgressBar = ({ skills }) => {
  const [animetedProgress, setAnimetedtProgress] = useState([]);

  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimetedtProgress(skills.map((skill) => skill.progress));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, skills]);

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-12 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
        My Skills
      </h1>

      <div
        className="grid gap-7 w-full"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))" }}
        ref={scrollRef}
      >
        {skills.map((prog, index) => (
          <div
            key={index}
            className="h-48 bg-white p-4 flex flex-col justify-evenly rounded-xl shadow"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {prog.skill}
            </h2>
            <p className="text-sm text-gray-600">{prog.about}</p>
            <div className="w-full h-5 rounded-full bg-gray-300 mt-2">
              <motion.div
                className="h-5 bg-green-700 rounded-full text-white text-center text-xs"
                style={{ width: `${animetedProgress[index] || 0}%` }}
                role="progressbar"
                aria-valuenow={animetedProgress[index] || 0}
                aria-valuemax="100"
                aria-valuemin="0"
                initial={{ width: 0 }}
                animate={{
                  width: isInView ? `${animetedProgress[index] || 0}%` : 0,
                }}
                transition={{ duration: 1, easeInOut: "ease" }}
              >
                {animetedProgress[index] || 0}%
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProgressBar;
