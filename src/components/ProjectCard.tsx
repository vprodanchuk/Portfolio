type Project = {
    id: number
    title: string
    description: string
    tech: string[]
    github: string
    swagger: string
}

export default function ProjectCard({project}: { project: Project }) {
    return (
        <div className="border border-gray-200 rounded-md p-6">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                {project.title}
            </h3>
            <div className="border-t border-gray-200 my-3"></div>
            <p className="text-gray-700">
                {project.description}
            </p>
            <p className="text-gray-600 mt-4">
                Tech: {project.tech.join(", ")}
            </p>
            <div className="mt-6 space-y-2">
                <a href={project.github} target="_blank" className="block w-full bg-[#3f6a97] text-white text-center px-4 py-2 rounded-md border border-slate-800 shadow-sm hover:from-slate-700 hover:bg-[#365b83]">
                    View on Github
                </a>
                <a href={project.swagger} target="_blank" className="block w-full border border-[#3f6a97] text-[#3f6a97] text-center px-4 py-2 rounded-md hover:bg-blue-50">
                    View on Swagger
                </a>
            </div>
        </div>
    );
}