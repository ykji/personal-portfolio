import { SiCodeforces } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialLink } from "../interfaces/social-link";
import { BsFillPersonLinesFill, BsInstagram } from "react-icons/bs";

type Props = {
  hideForMobile: boolean;
};

const SocialLinks = (props: Props) => {
  const { hideForMobile } = props;
  const style = hideForMobile
    ? "hidden lg:flex fixed z-10"
    : "flex lg:hidden absolute z-8";

  const socialLinks: SocialLink[] = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/yash-varshney/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/ykji",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:yvarshney44@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Codeforces <SiCodeforces size={25} />
        </>
      ),
      href: "https://codeforces.com/profile/__ykji",
    },
    {
      id: 5,
      child: (
        <>
          Instagram <BsInstagram size={25} />
        </>
      ),
      href: "https://instagram.com/___whykay?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "https://drive.google.com/drive/folders/1vjO0slQ8vqc1HbXGA1hDcdBIWf6WCfJm?usp=sharing",
    },
  ];

  return (
    <ul className={`${style} flex-col top-[35%] left-0`}>
      {socialLinks.map(({ id, child, href }) => (
        <li
          key={id}
          className={
            "flex font-semibold bg-transparent w-40 h-14 px-4 ml-[-106px] lg:hover:ml-[-10px] hover:rounded-md hover:bg-gray-400 duration-300"
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
