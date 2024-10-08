import { useState, useRef } from 'react';

import { BiDownArrowCircle, BiUpArrowCircle } from 'react-icons/bi';

import { LifePhase } from '../interfaces/work-experience';

interface Props {
  lifePhase: LifePhase;
}

const LifePhaseDetails = (props: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showDetails, setShowDetails] = useState(false);
  const { title, start, end, details, role } = props.lifePhase;

  const lifePhaseTitle = title + (role ? `/ ${role}` : '');

  const toggleDetails = () => {
    setShowDetails(!showDetails);

    if (sectionRef.current) {
      const topOffset = sectionRef.current.getBoundingClientRect().top + window.pageYOffset - window.innerHeight * 0.2;

      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative border-l-2 border-gray-500'>
      <div className='flex items-center top-[-10px] left-[-7px] gap-2 absolute'>
        <div className='h-3 w-3 bg-gray-500 rounded-full'></div>
        <p className='text-sm'>{end}</p>
      </div>
      <div className='mx-10 my-6 shadow-md shadow-blue-500 rounded-md p-5 flex flex-col items-start overflow-hidden'>
        <div ref={sectionRef}>
          <h3 className={'text-xl font-bold'}>{lifePhaseTitle}</h3>
        </div>
        <ul className={`${showDetails ? 'right-0' : '-right-[1000px] opacity-0 h-0'} px-3 md:px-6 mt-2 text-sm duration-500 relative`}>
          {details.map(({ id, point }) => (
            <li key={id} className='list-decimal leading-6'>
              {point}
            </li>
          ))}
        </ul>
        {details.length > 0 && (
          <button className='mt-3 font-semibold' onClick={toggleDetails}>
            {showDetails ? (
              <div className='flex items-center gap-2'>
                Hide Details
                <BiUpArrowCircle size={25} />
              </div>
            ) : (
              <div className='flex items-center gap-2'>
                Show Details
                <BiDownArrowCircle size={25} />
              </div>
            )}
          </button>
        )}
      </div>
      <div className='flex items-center bottom-[-10px] left-[-7px] gap-2 absolute'>
        <div className='h-3 w-3 bg-gray-500 rounded-full'></div>
        <p className='text-sm'>{start}</p>
      </div>
    </div>
  );
};

export default LifePhaseDetails;
