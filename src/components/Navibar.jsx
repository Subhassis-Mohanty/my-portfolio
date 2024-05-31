import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navibar = () => {
const [nav, setNav] = useState(false);

const menus = [
    {
            id: 1,
            link: "home",
    },
    {
            id: 2,
            link: "about",
    },
    {
            id: 3,
            link: "skills",
    },
    {
            id: 4,
            link: "projects",
    },
    {
            id: 5,
            link: "contact",
    },
];

return (
    <div className="flex justify-between items-center w-full h-20 px-6 bg-neutral-700 shadow-xl shadow-indigo-400">
    <div>
        <h1 className="text-4xl font-signature ml-3 text-lime-100">Subhasis</h1>
    </div>

    <ul className="hidden md:flex gap-8">
        {menus.map(({ id, link }) => (
        <li
            key={id}
            className=" text-neutral-100 hover:text-rose-800 font-bold cursor-pointer hover:scale-105 duration-300 tracking-wide capitalize"
        >
            <Link to={link} smooth duration={600}>
            {link}
            </Link>
        </li>
        ))}
    </ul>

    <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
    >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
    </div>

    {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-neutral-900 to-stone-700 text-orange-100">
        {menus.map(({ id, link }) => {
            return (
            <li
                key={id}
                className=" cursor-pointer text-xl hover:text-rose-800 my-12 capitalize"
            >
                <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={600}
                >
                {link}
                </Link>
            </li>
            );
        })}
        </ul>
    )}
    </div>
);
};

export default Navibar;
