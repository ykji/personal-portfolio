import { Project } from '../interfaces/project';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  const { src, demoUrl, codeUrl, name } = props.project;

  return (
    <div className='shadow-md shadow-gray-500 rounded-lg w-[90%]'>
      <img src={src} alt={name} className='rounded-md lg:hover:scale-105 duration-200 object-cover' />
      <p className='text-center py-1 border-b-2 border-gray-600'>{name}</p>
      <div className='flex justify-around items-center'>
        <a className='m-4 duration-200 hover:scale-105' href={demoUrl} target='_blank' rel='noreferrer'>
          Demo
        </a>
        <a className='m-4 duration-200 hover:scale-105' href={codeUrl} target='_blank' rel='noreferrer'>
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
