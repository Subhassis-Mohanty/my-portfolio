import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Profile from "../assets/Subha_pic.jpg";

const Home = () => {
  const [text] = useTypewriter({
    words: ["UI Developer", "Front-End-Developer", "React Developer"],
    Loop: true,
    typeSpeed: 25,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <>
      {/* main container */}
      <div
        name="home"
        className="bg-gradient-to-b from-neutral-900 to-zinc-700 h-screen w-full"
      >
        <div className=" max-w-screen-lg mx-auto flex md:flex-row items-center justify-center  px-5 h-full flex-col gap-12">
          {/* text container */}
          <div className="flex flex-col justify-center gap-4 h-full w-1/2">
            <h4 className="text-lg font-semibold text-white">
              WELCOME TO MY PROFILE{" "}
            </h4>
            <h1 className="text-3xl sm:text-5xl font-bold text-white ">
              Hello, I'm{" "}
              <span className="text-rose-700 capitalize">
                Subhasis Mohanty{" "}
              </span>
            </h1>
            <h2 className="text-2xl font-bold text-white">
              a <span>  {text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
              />
            </h2>
            <p className="text-amber-200 text-base leading-6 tracking-wide py-5 max-w-screen-lg ">
              Hello, I am an IT grad from Ravenshaw University, Cuttack. I am
              passionate about IT, and I'm on a journey to master web
              development. My portfolio showcases my dedication to the
              ever-evolving world of technology.
            </p>
          </div>

          {/* image container */}
          <div className=" pt-0 pb-12">
            <img
              src={Profile}
              alt="my profile"
              className="rounded-full shadow-2xl shadow-emerald-500 sm:w-56 sm:h-56 lg:w-80 lg:h-80"
            />
          </div>

          
        </div>
      </div>
    </>
);
};

export default Home;
