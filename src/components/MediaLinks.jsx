import React from "react";
import  MediaMenus  from "./MediaMenus";
import { Link } from "react-router-dom";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const MediaLinks = () => {



    return (

    <div className=" flex flex-col top-[35%] left-0 fixed	">
        <ul>
        {MediaMenus.map(({id, child, href, style, download}) => (
            <li
            key={id}
            className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500"
                +
                " " +
                style
            }
            >
            <Link
                to={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                // rel="noreferrer"
            >
                {child}
            </Link> 
            </li>
        ))} 

        </ul>
    
    </div>
    );

};

export default MediaLinks;
