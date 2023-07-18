import { LifePhase } from "../interfaces/work-experience";

interface Props {
  lifePhase: LifePhase;
}

const LifePhaseDetails = (props: Props) => {
  const { title, start, end, details, role } = props.lifePhase;

  const lifePhaseTitle = title + (role ? `/ ${role}` : "");

  return (
    <div className="relative border-l-2 border-gray-500">
      <div className="flex items-center top-[-10px] left-[-7px] gap-2 absolute">
        <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
        <p className="text-sm">{end}</p>
      </div>
      <div className="mx-10 my-6 shadow-md shadow-blue-500 rounded-md p-5 flex flex-col md:hover:scale-105 duration-300">
        <h3 className="text-xl font-bold">{lifePhaseTitle}</h3>
        <ul className="px-6 mt-2 text-sm">
          {details.map(({ id, point }) => (
            <li key={id} className="list-decimal leading-6 trac">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center bottom-[-10px] left-[-7px] gap-2 absolute">
        <div className="h-3 w-3 bg-gray-500 rounded-full"></div>
        <p className="text-sm">{start}</p>
      </div>
    </div>
  );
};

export default LifePhaseDetails;