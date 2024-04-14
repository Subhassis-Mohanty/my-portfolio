import React from "react";
import SkillsData from "./SkillsData";
const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-neutral-900 to-zinc-700 w-full h-full text-white "
    >
      <div className=" max-w-screen-lg mx-auto p-12 flex flex-col justify-center w-full h-full text-white">
        <div className="justify-center items-center mt-12">
          <p className="text-4xl font-bold inline border-b-4 border-white font-signature p-2">
            Skills
          </p>
          <p className="py-8 text-2xl">
            These Are The Technologies I've Workes With
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {SkillsData.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-lg hover:scale-200 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="mx-auto w-20 h-30" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
