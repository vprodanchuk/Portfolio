import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
    return (
      <section className="py-12 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-center">
                  Projects
              </h2>
              <div className="border-t border-gray-200 mt-6 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {projects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
              <p className="text-gray-700 text-center mb-4">
                  More backend projects available on <strong>GitHub</strong>
              </p>
              <div className="flex justify-center">
                  <a href="https://github.com/vprodanchuk" target="_blank" className="bg-[#3f6a97] text-white px-15 py-2 rounded-md hover:bg-[#365b83]">
                      View Full GitHub Profile
                  </a>
              </div>
          </div>
      </section>
    );
}