// components/sections/Projects.tsx
"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data/projects";
import { ProjectData } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";
import ScrollReveal from "@/components/ui/ScrollReveal"; // Gọi ScrollReveal

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="relative bg-[#1a1d27] min-h-screen flex items-center w-full overflow-hidden border-t border-gray-800/50 py-20">
      
      <div className="absolute top-28 right-0 flex items-center text-5xl md:text-7xl font-black text-[#252836] select-none hidden sm:flex z-0">
        04 <span className="w-12 md:w-20 h-[2px] bg-[#252836] ml-4 md:ml-6"></span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full px-4">
        
        {/* Tiêu đề bay từ phải sang */}
        <ScrollReveal direction="right">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-[#ff5959] tracking-widest uppercase mb-2">Portfolio</h2>
            <h3 className="text-4xl font-bold text-white tracking-wide">My Projects</h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            /* Hiệu ứng Domino: index * 0.2s */
            <ScrollReveal key={index} direction="up" delay={index * 0.2}>
              <div 
                onClick={() => setSelectedProject(project)}
                className="bg-[#202330] rounded-lg border border-gray-700 overflow-hidden hover:border-[#ff5959]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(255,89,89,0.2)] group cursor-pointer flex flex-col h-full"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff5959] transition-colors">{project.title}</h4>
                      <span className="text-[#ff5959] text-sm font-medium">{project.role} | {project.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-gray-400 text-sm mb-6 flex-grow">
                    {project.description.slice(0, 2).map((desc, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[#ff5959]">▹</span>
                        <span className="line-clamp-2">{desc}</span>
                      </li>
                    ))}
                    <li className="text-xs text-gray-500 italic mt-2">Click to read more...</li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#161821] text-[#ff5959]/90 text-xs rounded border border-[#ff5959]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}