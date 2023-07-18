import { SiCodeforces } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SocialLink } from "../interfaces/social-link";

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/yash-varshney/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ykji",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:yvarshney44@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Codeforces <SiCodeforces size={30} />
        </>
      ),
      href: "https://codeforces.com/profile/__ykji",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/drive/folders/1vjO0slQ8vqc1HbXGA1hDcdBIWf6WCfJm?usp=sharing",
      style: "rounded-br-md",
    },
  ];

  return (
    <ul className="hidden lg:flex flex-col top-[35%] fixed left-0 ">
      {socialLinks.map(({ id, child, href, style }) => (
        <li
          key={id}
          className={
            "flex bg-gray-500 w-40 h-14 px-4 ml-[-102px] hover:rounded-md hover:ml-[-10px] duration-300" +
            " " +
            style
          }
        >
          <a
            href={href}
            className="flex flex-row justify-between items-center text-white w-full"
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
