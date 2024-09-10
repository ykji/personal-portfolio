import Summary from './Summary';
import HeroImage from './HeroImage';
import FrontendText from './FrontendText';
import ResumeButton from './ResumeButton';

const Home = () => {
  return (
    <div id='home' className='md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 md:pt-0'>
      <div className='max-w-screen-lg text-center md:text-left mx-auto md:flex flex-col items-center justify-center h-full px-4 md:px-16 lg:px-4 md:flex-row md:gap-4'>
        <div className='flex flex-1 flex-col justify-center items-center md:items-start h-full'>
          <h2 className='text-white mb-6 md:mb-4 px-6 py-3 font-medium shadow-md shadow-blue-400'>Welcome to my portfolio!</h2>
          <FrontendText />
          <div className='hidden md:block'>
            <Summary />
            <ResumeButton />
          </div>
        </div>
        <HeroImage />
        <div className='md:hidden flex flex-col items-center'>
          <ResumeButton />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Home;
