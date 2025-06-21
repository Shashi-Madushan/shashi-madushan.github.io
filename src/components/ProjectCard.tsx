import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  liveDemoLink: string;
  sourceCodeLink: string;
  image: string;
  isActive?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, liveDemoLink, sourceCodeLink, image, isActive, onHover, onLeave }) => {
  return (
    <div
      className={`relative aspect-[3/2] w-full max-w-sm bg-[#181f2a] rounded-xl overflow-hidden shadow-lg border border-[#232b3b] cursor-pointer group perspective-[1000px] transition-all duration-500 ${isActive === false ? 'blur-sm scale-95 opacity-60' : 'hover:scale-105'} mx-auto`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Front (Image + Title) */}
      <div className="absolute inset-0 flex flex-col [backface-visibility:hidden] transition-all duration-500 group-hover:rotate-x-90" style={{transitionProperty: 'transform, box-shadow, filter'}}>
        <img
          src={image}
          alt={title}
          className="w-full flex-1 object-cover object-center min-h-0"
          loading="lazy"
        />
        <div className="bg-[#181f2a] w-full py-2 px-3 text-center">
          <span className="block text-base font-semibold text-blue-200 truncate">{title}</span>
        </div>
      </div>
      {/* Back (Details) */}
      <div className="absolute inset-0 flex flex-col p-5 bg-[#f2f2f2] rounded-xl [transform:rotateX(-90deg)] [backface-visibility:hidden] group-hover:[transform:rotateX(0deg)] transition-all duration-500" style={{transitionProperty: 'transform, box-shadow, filter'}}>
        <p className="text-lg font-bold text-gray-900 mb-1">{title}</p>
        <p className="text-gray-700 text-xs mb-3 line-clamp-4">{description}</p>
        <div className="mt-auto flex gap-2">
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
          <a
            href={sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-md border border-blue-400 text-blue-700 text-xs font-semibold hover:bg-blue-100 transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
