import React from "react";

const SkillProgressBar = () => {
  return (
    <div className="w-full min-h-screen  px-4 sm:px-6 md:px-12  py-12   border border-amber-50 ">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
        My Skills
      </h1>

      {/* <div className="min-w-screen-lg mx-auto w-full"> */}
      <div
        className="grid  gap-7 w-full "
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))" }}
      >
        <div className="h-48  bg-white p-4 flex flex-col justify-evenly">
          React js
          <p>
            I'm Suvam Sarangi, a recent Software Engineering graduate based in
            Hyderabad
          </p>
          <div className="w-full h-5 p-3 bg-green-900 rounded-full"
          role="progressbar"
          aria-label="label"
          
          >
            <span className="text-white">75%</span>
          </div>
        </div>
        <div className="h-48  bg-white p-4">JavaScript</div>
        <div className=" h-48 bg-white p-4">Java</div>
        <div className=" h-48 bg-white p-4">
          HTML,CSS this is for html and css use for designing web page
        </div>
         <div className=" h-48 bg-white p-4">Java</div>
          <div className=" h-48 bg-white p-4">Java</div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SkillProgressBar;
