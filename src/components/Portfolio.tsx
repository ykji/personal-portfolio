import { FaAngleDoubleDown } from "react-icons/fa";
import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-10 pt-24 md:pt-32"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl border-b-4 border-gray-500 inline">
            Portfolio
          </h2>
          <p className="py-6 flex items-center">
            Check out some of my work below
            <span className="ml-2">
              <FaAngleDoubleDown size={20} />
            </span>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0 mx-auto">
          {portfolios.map(({ id, src }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-gray-500 rounded-lg w-[90%]"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md hover:scale-105 duration-200 object-cover"
                />
                <div className="flex justify-center items-center">
                  <button className="w-1/2 px-4  m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-4 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
