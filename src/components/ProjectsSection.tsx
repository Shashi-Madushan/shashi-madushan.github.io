import ProjectCard from "../components/ProjectCard";

const ProjectsSection = () => {
    return (
        <div className="bg-[#0f1624] min-h-fit p-5 md:p-8">
           <h4 className="text-xl font-semibold mb-6 md:mb-8 ml-2 md:ml-4">Recent Projects .</h4>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                <ProjectCard
                    title="My Awesome Project"
                    description="A short description of the project, its purpose, and technologies used."
                    liveDemoLink="https://example.com/demo"
                    sourceCodeLink="https://github.com/example/repo"
                />
                <ProjectCard
                    title="Another Project"
                    description="A short description of the project, its purpose, and technologies used."
                    liveDemoLink="https://example.com/demo"
                    sourceCodeLink="https://github.com/example/another-repo"
                />
                <ProjectCard
                    title="Another Project"
                    description="A short description of the project, its purpose, and technologies used."
                    liveDemoLink="https://example.com/demo"
                    sourceCodeLink="https://github.com/example/another-repo"
                />
                <ProjectCard
                    title="Another Project"
                    description="A short description of the project, its purpose, and technologies used."
                    liveDemoLink="https://example.com/demo"
                    sourceCodeLink="https://github.com/example/another-repo"
                />
                <ProjectCard
                    title="Another Project"
                    description="A short description of the project, its purpose, and technologies used."
                    liveDemoLink="https://example.com/demo"
                    sourceCodeLink="https://github.com/example/another-repo"
                />
            </div>
        </div>
    )
}

export default ProjectsSection