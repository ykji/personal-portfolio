import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const ResumeButton = () => {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      href='https://drive.google.com/drive/folders/1vjO0slQ8vqc1HbXGA1hDcdBIWf6WCfJm?usp=sharing'
      className='group text-white px-6 py-3 mt-4 md:my-2 flex items-center rounded-md w-fit bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
    >
      Resume
      <span className='group-hover:rotate-90 duration-300'>
        <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
      </span>
    </a>
  );
};

export default ResumeButton;
