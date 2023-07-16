import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../utility/constants";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 text-white bg-black fixed w-full h-20">
      <h1 className="text-5xl">Yash</h1>

      <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer font-medium capitalize hover:scale-105 duration-200 text-gray-500 px-4"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        className="mr-4 text-gray-500 cursor-pointer md:hidden z-10"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute flex flex-col items-center justify-center top-0 left-0 text-gray-500 w-full h-screen bg-gradient-to-b from-black to-gray-800 md:hidden">
          {navLinks.map(({ id, link }) => (
            <li key={id} className="cursor-pointer text-4xl py-6">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
