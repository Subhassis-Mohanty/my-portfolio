import React from "react";

const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full h-full bg-gradient-to-b from-neutral-900 to-zinc-700	"
      >
        <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full text-slate-100">
          <div className="mt-12">
            <h3 className="text-4xl font-bold inline border-b-4 border-white font-signature">
              About
            </h3>
          </div>
          <p className="text-xl mt-20">
            Hello, I'm Subhasis, a recent graduate with batchlor degree in
            Information Technology and Management from Ravenshaw University,
            Cuttack.a passionate Front-End Developer with a keen eye for design
            and a love for creating seamless user experiences.
          </p>
          <br />
          <p className="text-xl">
            🚀 Armed with a strong foundation in HTML, CSS, and JavaScript, I
            bring websites to life by transforming static designs into dynamic,
            interactive platforms. My journey in web development has been marked
            by a relentless pursuit of clean, efficient, and responsive code.
          </p>
          <br />

          <p className="text-xl">
            🎨 Design isn't just a phase for me; it's a mindset. I stay
            up-to-date with the latest trends and technologies in the
            ever-evolving landscape of front-end development. Whether it's
            mastering new frameworks like React or fine-tuning my CSS
            animations, I'm always ready to embrace the next challenge.
          </p>
          <br />

          <p className="text-xl">
            Let's build something amazing together. Feel free to explore my
            portfolio, and don't hesitate to reach out for collaborations,
            projects, or just a chat about the ever-evolving world of front-end
            development!
          </p>

          <br />

          <p className="text-xl pb-8">Happy coding! 🚀✨</p>
        </div>
      </div>
    </>
  );
};

export default About;
