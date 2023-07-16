import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl text-white font-bold">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 max-w-md py-6">
            2 years experienced Frontend Developer adept in React, Next.js,
            Tailwind CSS, and TypeScript. Expertise in crafting responsive and
            dynamic user interfaces. Passionate about delivering exceptional
            user experiences through intuitive web applications.
          </p>
          <button className="group text-white px-6 py-3 my-2 flex items-center rounded-md w-fit bg-gradient-to-r from-cyan-500 to-blue-500">
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
            </span>
          </button>
        </div>
        <img
          src={HeroImage}
          alt="yash-face"
          className="rounded-2xl mx-auto w-2/3 md:w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default Home;
