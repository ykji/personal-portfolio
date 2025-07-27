const About = () => {
  return (
    <div id='about' className='w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen pt-20 md:pt-0'>
      <div id='about-content' className='max-w-screen-lg flex flex-col justify-center mx-auto h-full p-4'>
        <div className='py-4'>
          <h2 className='text-4xl border-b-4 border-gray-500 inline'>About</h2>
        </div>
        <p className='text-xl mt-10 text-gray-300'>
          With over {new Date().getFullYear() - 2022} years of experience in frontend development, I bring a strong foundation in React, Next.js, Tailwind CSS, and TypeScript. I have worked on various
          projects, collaborating closely with cross-functional teams to deliver exceptional user experiences. Alongside my technical skills, I have a keen eye for design and a deep understanding of
          user-centric development. My goal is to create seamless digital experiences that leave a lasting impression.
        </p>
        <p className='text-xl mt-8 text-gray-300'>
          Beyond my professional pursuits, I have a zest for exploration and adventure. Whether it's hiking through scenic landscapes or immersing myself in local traditions, I find inspiration in
          every journey. In my downtime, you'll often find me on the badminton court, honing my skills and engaging in friendly competition. The discipline and focus required in the sport reflect my
          approach to problem-solving in the technical realm.
        </p>
      </div>
    </div>
  );
};

export default About;
