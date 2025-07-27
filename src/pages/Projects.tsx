import { useEffect, useState } from "react";
import { getAllProjects } from "../utils/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectCardSkeleton from "../components/ProjectCardSkeleton";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-[#0f1624] min-h-screen p-5 md:p-8">
      <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-8 text-center flex items-center justify-center gap-3">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => <ProjectCardSkeleton key={idx} />)
          : projects.map((project, idx) => (
              <ProjectCard
                key={project._id || idx}
                title={project.title}
                description={project.description}
                liveDemoLink={project.liveDemoLink}
                sourceCodeLink={project.sourceCodeLink}
                image={project.image}
              />
            ))}
      </div>
    </div>
  );
};

export default Projects;