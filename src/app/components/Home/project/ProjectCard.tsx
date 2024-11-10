// components/ProjectCard.js
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { projectData } from "@/app/Data/data"
import Link from 'next/link';


const ProjectCard = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-auto px-6 mt-20 ">
    {projectData.map((project) => (
      <div key={project.id} className="relative overflow-hidden rounded-lg group w-72 h-80 border-[5px] border-gray-400 ">
        <Image
          src={project.image}
          alt="project"
          layout="fill"
          objectFit="cover"
          className="transform transition duration-300 group-hover:scale-110"
        />

        {/* Overlay Content (Hidden initially, visible on hover) */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer ">

          <h1 className="text-white text-xl font-semibold mb-2">{project.title}</h1>

          <Link href={project.url} target="_blank" rel="noopener noreferrer" className="text-gray-200 flex items-center gap-2 hover:text-white">
            <FaGithub size={20} />
            <span>View on GitHub</span>
          </Link>

        </div>
      </div>
    ))}
  </div>
);

export default ProjectCard;
