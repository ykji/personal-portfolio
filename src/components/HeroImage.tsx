import heroImage from '../assets/heroImage.jpg';

const HeroImage = () => {
  return (
    <>
      <div className='group rounded-2xl mx-auto w-2/3 md:w-full max-w-xs mt-7 md:mt-0 lg:hover:scale-105 duration-300 relative'>
        <img src={heroImage} alt='yash-face' className='rounded-2xl' />
        <div className='h-1/2 bottom-[-2px] left-[-2px] w-[101%] rounded-b-2xl bg-gradient-to-b from-transparent to-black absolute z-8 text-white'></div>
        <p className='group-hover:lg:opacity-100 opacity-0 duration-700 absolute z-6 bottom-14 left-24 font-bold text-3xl text-gray-200 '>Namaskar!</p>
      </div>
      <p className='text-3xl md:text-5xl font-semibold block mt-4 text-gray-400 md:hidden'>{'<YashVarshney />'}</p>
    </>
  );
};

export default HeroImage;
