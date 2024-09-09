import { useEffect } from 'react';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import HeroImage from '../assets/heroImage.jpg';

const frontendText = 'You can call me a Frontend Developer!';

const Home = () => {
  useEffect(() => {
    const frontend = document.querySelector('#frontend-text');

    if (frontend) {
      for (let i = 0; i < frontendText.length; ++i) {
        setTimeout(() => {
          frontend!.innerHTML += frontendText[i];
        }, 100 * i);
      }
    }
  }, []);

  return (
    <div id='home' className='md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 md:pt-0'>
      <div className='max-w-screen-lg text-center md:text-left mx-auto flex flex-col items-center justify-center h-full px-4 md:px-16 lg:px-4 md:flex-row md:gap-4'>
        <div className='flex flex-1 flex-col justify-center items-center md:items-start h-full'>
          <h2 className='text-white mb-6 md:mb-4 px-6 py-3 font-medium shadow-md shadow-blue-400'>Welcome to my portfolio!</h2>
          <p id='frontend-text' className='text-4xl lg:text-7xl text-white font-bold h-[80px] lg:h-[216px] mb-6' />
          <p className='text-gray-500 max-w-md py-6 px-6 md:px-0'>
            2 years experienced Frontend Developer adept in React, Next.js, Tailwind CSS, and TypeScript. Expertise in crafting responsive and dynamic user interfaces. Passionate about delivering
            exceptional user experiences through intuitive web applications.
          </p>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://drive.google.com/drive/folders/1vjO0slQ8vqc1HbXGA1hDcdBIWf6WCfJm?usp=sharing'
            className='group text-white px-6 py-3 my-2 flex items-center rounded-md w-fit bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
          >
            Resume
            <span className='group-hover:rotate-90 duration-300'>
              <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
            </span>
          </a>
        </div>
        <div className='group rounded-2xl mx-auto w-2/3 md:w-full max-w-xs mt-3 md:mt-0 lg:hover:scale-105 duration-300 relative'>
          <img src={HeroImage} alt='yash-face' className='rounded-2xl' />
          <div className='h-1/2 bottom-[-2px] left-[-2px] w-[101%] rounded-b-2xl bg-gradient-to-b from-transparent to-black absolute z-8 text-white'></div>
          <p className='group-hover:lg:opacity-100 opacity-0 duration-700 absolute z-6 bottom-14 left-24 font-bold text-3xl text-gray-200 '>Namaskar!</p>
        </div>
        <p className='text-3xl md:text-5xl font-semibold block mt-4 text-gray-400 md:hidden'>{'<YashVarshney />'}</p>
      </div>
    </div>
  );
};

export default Home;
