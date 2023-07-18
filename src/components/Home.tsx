import { Link } from "react-scroll";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      id="home"
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 md:pt-0"
    >
      <div className="max-w-screen-lg text-center md:text-left mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start h-full">
          <h2 className="text-white mb-6 md:mb-4 px-6 py-3 font-medium shadow-md shadow-blue-400">
            Welcome to my portfolio!
          </h2>
          <p className="text-4xl sm:text-7xl text-white font-bold">
            You can call me a Frontend Developer!
          </p>
          <p className="text-gray-500 max-w-md py-6 px-6 md:px-0">
            2 years experienced Frontend Developer adept in React, Next.js,
            Tailwind CSS, and TypeScript. Expertise in crafting responsive and
            dynamic user interfaces. Passionate about delivering exceptional
            user experiences through intuitive web applications.
          </p>
          <Link
            to="projects"
            smooth
            duration={500}
            className="group text-white px-6 py-3 my-2 flex items-center rounded-md w-fit bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Projects
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <img
          src={HeroImage}
          alt="yash-face"
          className="rounded-2xl mx-auto w-2/3 md:w-full max-w-xs mt-3 md:mt-0 hover:scale-105 duration-300"
        />
        <p className="text-3xl md:text-5xl font-semibold block mt-2 text-gray-400 md:hidden">
          {"<YashVarshney />"}
        </p>
      </div>
    </div>
  );
};

export default Home;
