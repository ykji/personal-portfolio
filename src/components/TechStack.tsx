import { techs } from "../utility/constants";

const TechStack = () => {
  return (
    <div
      id="techstack"
      className="w-full bg-gradient-to-b py-20 from-black to-gray-800 text-white md:h-screen md:pt-32"
    >
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto h-full p-4">
        <div className="">
          <h2 className="text-4xl border-b-4 border-gray-500 inline">
            Techstack
          </h2>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 md:w-12  mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
