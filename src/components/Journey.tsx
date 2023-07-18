import LifePhaseDetails from "./LifePhaseDetails";
import { lifePhases } from "../utility/constants";

const Journey = () => {
  return (
    <div
      id="journey"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:min-h-screen pt-20"
    >
      <div className="max-w-screen-lg flex flex-col justify-center mx-auto h-full p-4">
        <div className="py-4 mb-12">
          <h2 className="text-4xl border-b-4 border-gray-500 inline">
            Journey
          </h2>
        </div>
        <div className="flex flex-col gap-10 text-gray-300">
          {lifePhases.map((lifePhase) => (
            <LifePhaseDetails lifePhase={lifePhase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
