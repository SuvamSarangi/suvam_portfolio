import React, { useEffect, useState } from "react";
import { projects } from "./projects.js";
import { DeckRounded } from "@mui/icons-material";
const Project = ({ details }) => {
  const categories = ["All", "Front End", "Full stack"];

  const [category, setCategory] = useState("All");
  const [animateProjects, setAnimateProjects] = useState(false);

  //  filter the project according to onClick
  const filterProject =
    category === "All"
      ? projects
      : projects.filter((proj) => proj.category === category);

  // Trigger animation on category change
  useEffect(() => {
    setAnimateProjects(false); // reset animation
    const time = setTimeout(() => setAnimateProjects(true), 300);
  }, [category]);


  return (
    <div className="min-h-screen  py-10 flex items-center flex-col gap-20">
      <h1 className="text-center text-white text-4xl font-bold mb-12">
        Projects
      </h1>
      {/* <div className='text-center px-5 border border-b-blue-200 min-w-fit'> */}
      <div className="text-white max-w-6xl text-center  text-base sm:text-lg md:text-xl px-4">
        <div className="flex flex-row">
          <div className="py-1 px-4 flex flex-row cursor-pointer">
            {categories.map((cate, index) => (
              <div
                key={index}
                onClick={
                  () => setCategory(cate) // Updates selectedCategory
                }
                className={`py-1 px-4 rounded-md cursor-pointer ${
                  category === cate
                    ? "text-green-700 border-b border-b-amber-500"
                    : "text-white"
                }`}
              >
                {cate}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* inner div */}
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-12  items-center p-7
       ${animateProjects ? "opacity-100" : "opacity-0"}`}
      >
        {filterProject.map((details,index) => (
          <div
          key={index}
            className="flex flex-col w-80 p-4  
          rounded-xl shadow-[0_0_5px_1px] 
          border-none  
          hover:shadow-[0_0_15px_4px]
          transform
          hover:scale-105
          transition duration-100
          hover:-translate-y-2
          
          bg-[#0E0E10]
          "
          >
            {/* image */}
            <div className="w-full h-[180px]">
              <img
                src={details.image}
                alt={details.title}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4 text-sm text-white">
              {details.techStack.map((tech, index) => (
                <span key={index} className="text-white px-2 py-1 text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-semibold mt-4 text-white">
              {details.projectName}
            </h2>
            <h4 className="text-sm  mb-2 text-white">{details.duration}</h4>
            <p className="text-sm  text-white pb-5">{details.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
