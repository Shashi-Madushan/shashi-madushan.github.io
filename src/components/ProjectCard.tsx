import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  liveDemoLink: string;
  sourceCodeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveDemoLink, sourceCodeLink }) => {
  return (
    <div className="relative w-[350px] aspect-video bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden perspective-[1000px] shadow-[0_0_0_5px_rgba(255,255,255,0.5)] transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.05] hover:shadow-lg group">
      <svg
        className="w-12 fill-gray-800 transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
      </svg>

      <div className="absolute top-0 left-0 w-full h-full p-5 box-border bg-gray-100 transform rotate-x-[-90deg] origin-bottom transition-transform duration-[600ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-x-0">
        <p className="text-xl font-bold text-gray-800 m-0">{title}</p>
        <p className="my-2 text-sm text-gray-600 leading-relaxed">{description}</p>
        <div className="flex gap-3 mt-4">
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-gray-600 text-white text-sm hover:bg-gray-700 transition"
          >
            Live Demo
          </a>
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border border-gray-600 text-gray-600 text-sm hover:bg-gray-100 transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
