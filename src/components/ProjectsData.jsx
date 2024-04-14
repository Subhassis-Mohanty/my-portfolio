import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsData = (props) => {

    const handleGithubClick = () => {
      window.open(props.githubUrl, '_blank');
    };
  
    const handleGlobeClick = () => {
      window.open(props.reviewUrl, '_blank');
    };
  return (

    <>
    <div className=" w-auto px-8 h-auto py-10 rounded-lg shadow-xl flex flex-col bg-gradient-to-r from-slate-700 to-zinc-800 ">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
              <img
                src={props.image}
                alt=""
                className="w-full h-60 object-cover rounded-lg duration-200 hover:scale-105"
              />
        </div>
        <div className="w-full gap-10">
          <div className="flex items-center justify-between mt-4">
              <h3 className="text-lg text-rose-700">{props.title}</h3>
                <div className="flex gap-2">
                      <span
                      onClick={handleGithubClick} 
                      className="text-lg w-10 h-10 rounder-full bg-slate-950 inline-flex justify-center items-center text-gray-400 hover:text-teal-500 duration-200 cursor-pointer"
                      >
                        <BsGithub size={25} />
                      </span>
                      <span 
                      onClick={handleGlobeClick} 
                      className="text-lg w-10 h-10 rounder-full bg-slate-950 inline-flex justify-center items-center text-gray-400 hover:text-teal-500 duration-200 cursor-pointer"
                      >
                        <FaGlobe size={25}/>
                      </span>
                </div>
          </div>
            <p>{props.descrip}</p>
    </div>
    </div>
</>
  );
};

export default ProjectsData;
