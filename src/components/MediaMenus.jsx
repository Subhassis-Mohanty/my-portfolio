import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

    const MediaMenus = [
        {
            id: 1,
            child: (
            <>
                LinkedIn <FaLinkedin size={30} />
            </>
            ),
            href: "https://www.linkedin.com/in/subhasis-mohanty-362484257/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
            <>
                GitHub <FaGithub size={30} />
            </>
            ),
            href: "https://github.com/Subhassis-Mohanty",
        },
        {
            id: 3,
            child: (
            <>
                Mail <HiOutlineMail size={30} />
            </>
            ),
            href: "mailto:iamsubhasis2003@gmail.com",
        },
        {
            id: 4,
            child: (
            <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
            ),
            href: "/Subhasis Mohanty__Resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
];

export default MediaMenus;