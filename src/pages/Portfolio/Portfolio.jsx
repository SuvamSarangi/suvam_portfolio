import React from "react";
import { portfolio } from "./portfolio";
import { DeckRounded } from "@mui/icons-material";
const Portfolio = ({ details }) => {
  return (
    <div className="min-h-screen  py-12 flex items-center flex-col gap-20">
      <h1 className="text-center text-white text-4xl font-bold mb-12">
        MY PORTFOLIO
      </h1>
      {/* <div className='text-center px-5 border border-b-blue-200 min-w-fit'> */}
      <p className="text-white max-w-6xl text-center  text-2xl">
        Hello and welcome to my portfolio! I'm a fullstack java developer, and
        I'm thrilled to share some handpicked collection of my impressive
        projects with you. These projects highlight my skills in crafting
        creative solutions using web technologies. Feel free to explore.
      </p>
      {/* </div> */}

      {/* inner div */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-12  items-center p-7">
        {portfolio.map((details) => (
          <div
            className="flex flex-col w-80 p-4  
          rounded-xl shadow-[0_0_5px_1px] 
          border-none  
          hover:shadow-[0_0_15px_4px]
          transform
          hover:scale-105
          transition duration-100
          hover:-translate-y-2
          
          bg-[#191D2B]
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
              {
                details.techStack.map((tech,index)=>(
                  <span key={index} className="text-white px-2 py-1 text-sm">
                {tech}
              </span>
                ))
              }
            </div>
            <h2 className="text-lg font-semibold mt-4 text-white">{details.projectName}</h2>
            <h4 className="text-sm  mb-2 text-white">{details.duration}</h4>
            <p className="text-sm  text-white pb-5">{details.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
