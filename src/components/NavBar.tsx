import { Link } from "react-scroll";
import ykLogo from "../assets/ykLogo.png";
import { useEffect, useState } from "react";
import { navLinks } from "../utility/constants";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [nav]);

  return (
    <div className="flex justify-between items-center px-4 text-white bg-black fixed w-screen h-20 z-10">
      <div className="flex items-center gap-2 md:gap-5">
        <Link to="home" smooth duration={500} className="cursor-pointer">
          <img src={ykLogo} alt="logo" className="h-12 md:h-16" />
        </Link>
        <h1 className="text-3xl md:text-5xl font-semibold hidden md:block">
          {"<YashVarshney />"}
        </h1>
      </div>

      <ul className="hidden lg:flex">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer font-medium hover:font-bold capitalize hover:scale-110 duration-200 text-gray-500 px-4"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="mr-4 text-gray-500 cursor-pointer lg:hidden z-10"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute flex flex-col items-center justify-center top-0 left-0 text-gray-500 w-full h-screen bg-gradient-to-b from-black to-gray-800 lg:hidden capitalize z-11">
          {navLinks.map(({ id, link }) => (
            <li key={id} className="cursor-pointer text-4xl py-6">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
