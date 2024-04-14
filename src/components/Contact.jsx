import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-full bg-gradient-to-b from-neutral-900 to-zinc-700 p-4 text-white"
    >
      <div className="flex flex-col p-12 justify-center max-w-screen-lg mx-auto h-full">
        <div className="mt-12">
          <p className="text-4xl font-bold inline border-b-4 border-white font-signature">
            Contact
          </p>
          <p className="py-8 text-2xl">
            Submit The Form Below To Get In Touch with Me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/Pe9qk3eL" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="12"
              placeholder="Enter Your Message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-lg font-semibold">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
