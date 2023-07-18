import { projects } from "../utility/constants";
import { FaAngleDoubleDown } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen pb-10 pt-24 md:pt-32"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8 flex flex-col items-start">
          <h2 className="text-4xl border-b-4 border-gray-500 inline">
            Projects
          </h2>
          <p className="py-6 flex items-center">
            Check out some of my work below
            <span className="ml-2">
              <FaAngleDoubleDown size={20} />
            </span>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0 mx-auto">
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
