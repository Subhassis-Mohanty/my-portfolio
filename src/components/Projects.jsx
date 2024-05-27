import React, {useState} from "react";
import proimage_1 from "../assets/projectimage/calculator.webp";
import proimage_2 from "../assets/projectimage/password generator.png";
import proimage_3 from "../assets/projectimage/form-validation.jpg";
import proimage_4 from "../assets/projectimage/QR-Code-Generator-in-HTML-CSS-JavaScript.jpg";
import ProjectsData from "./ProjectsData";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

const projectImages = [
  { image: proimage_1, title: "CALCULATOR", descrip: "Built a user-friendly calculator using HTML, CSS, and JavaScript. Responsive design, intuitive interface, and efficient functionality provide a seamless and enjoyable experience for basic arithmetic operations." },
  { image: proimage_2, title: "PASSWORD GENERATOR", descrip: "Create secure passwords effortlessly with this HTML, CSS, and JS-powered password generator project. Generate strong, unique passwords to enhance your online security effortlessly and conveniently." },
  { image: proimage_3, title: "FORM VALIDATION", descrip: "Developed a form validation project using HTML, CSS, and JS, ensuring user input accuracy. Implemented responsive design for a seamless experience across devices. Clean, efficient, and user-friendly solution." },
  { image: proimage_4, title: "QR GENERATOR", descrip: "Built a QR Code Generator project using HTML, CSS, and JavaScript. This web application enables users to easily generate QR codes for various purposes with a simple and intuitive interface." }
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length);
    };


  return (
    <>
      {/* // main container! */}
      <div
        name="projects"
        className="bg-gradient-to-b from-neutral-900 to-zinc-700 w-full text-white h-full mx-auto"
      >
            {/* card container */}
          <div className="max-w-screen-lg p-12 flex flex-col justify-center w-full h-full text-slate-100 mx-auto">
              {/* heading and para container */}
              <div className="justify-center items-center mt-10">
                    <p className="text-4xl font-bold inline border-b-4 border-white font-signature ">
                      Projects
                    </p>
                    <p className="py-8  text-2xl">
                      Check out some of my work right here.
                    </p>
              </div>

              {/* image container */}
              <div className="relative w-full overflow-hidden">
                <div className="flex transition-transform duration-700"  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  {projectImages.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                        <ProjectsData
                            image={project.image}
                            title={project.title}
                            descrip={project.descrip}
                           // Add githubUrl and reviewUrl if needed
                        />
                    </div>
                  ))}
                </div>

                <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2">
                  <MdOutlineKeyboardArrowLeft size={30} />
                </button>

                <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2">
                  <MdOutlineKeyboardArrowRight size={30} />
                </button>
              </div>

              <div className="mt-5 flex justify-center">
                <button className="group text-stone-200 text-xl font-semibold w-fit px-6 py-2 my-2 text-center flex items-center rounded-lg bg-gradient-to-r from-fuchsia-700 to-rose-400 cursor-pointer">
                      See more
                    <span className="group-hover:rotate-90 duration-500">
                      <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
                    </span>
                </button>
              </div>
          </div>
      </div>
    
    </>
  );
};

export default Projects;





// <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%] sm:px-0 ">
// <ProjectsData
//   image={proimage_1}
//   title="CALCULATOR "
//   descrip="Built a user-friendly calculator using HTML, CSS, and JavaScript. Responsive design, intuitive interface, and efficient functionality provide a seamless and enjoyable experience for basic arithmetic operations."
//   // githubUrl=""
//   // reviewUrl=""
// />
// <ProjectsData
//   image={proimage_2}
//   title="PASSWORD GENERATOR "
//   descrip="Create secure passwords effortlessly with this HTML, CSS, and JS-powered password generator project. Generate strong, unique passwords to enhance your online security effortlessly and conveniently."
// />
// <ProjectsData
//   image={proimage_3}
//   title="FORM VALIDATION "
//   descrip="Developed a form validation project using HTML, CSS, and JS, ensuring user input accuracy. Implemented responsive design for a seamless experience across devices. Clean, efficient, and user-friendly solution."
// />
// <ProjectsData
//   image={proimage_4}
//   title="QR GENERATOR "
//   descrip="Built a QR Code Generator project using HTML, CSS, and JavaScript. This web application enables users to easily generate QR codes for various purposes with a simple and intuitive interface."
// />
// </div>