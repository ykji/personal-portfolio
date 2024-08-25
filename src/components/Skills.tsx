import { FaAngleDoubleDown } from "react-icons/fa";

import { techs } from "../utility/constants";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full bg-gradient-to-b py-20 from-black to-gray-800 text-white md:min-h-screen md:pt-20"
    >
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto h-full p-4">
        <div className="">
          <h2 className="text-4xl border-b-4 border-gray-500 inline">Skills</h2>
          <p className="py-6 flex items-center">
            These are the technologies I've worked with
            <span className="ml-2">
              <FaAngleDoubleDown size={20} />
            </span>
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, docs }) => {
            return (
              <a
                href={docs}
                key={id}
                target="_blank"
                rel="noreferrer"
                className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style} cursor-pointer`}
              >
                <img src={src} alt="" className="w-20 md:w-12  mx-auto" />
                <p className="mt-4">{title}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
