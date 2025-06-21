import { useEffect, useState } from "react";
import { getLatestProjects } from "../api/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectCardSkeleton from "../components/ProjectCardSkeleton";

const ProjectsSection = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        getLatestProjects(4).then((data) => {
          setProjects(data);
          setLoading(false);
        });
    }, []);
    return (
        <div className="bg-[#0f1624] min-h-fit p-5 md:p-8">
           <h4 className="text-xl font-semibold mb-6 md:mb-8 ml-2 md:ml-4">Recent Projects .</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
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
    )
}

export default ProjectsSection