"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data/projects";
import { ProjectData } from "@/types";
import ProjectModal from "@/components/ui/ProjectModal";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="relative bg-[#1a1d27] min-h-screen flex items-center w-full overflow-hidden border-t border-gray-800/50 py-20">
      
      <div className="absolute top-28 right-0 flex items-center text-5xl md:text-7xl font-black text-[#252836] select-none hidden sm:flex z-0">
        04 <span className="w-12 md:w-20 h-[2px] bg-[#252836] ml-4 md:ml-6"></span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full px-4">
        
        <ScrollReveal direction="right">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-[#ff5959] tracking-widest uppercase mb-2">Portfolio</h2>
            <h3 className="text-4xl font-bold text-white tracking-wide">My Projects</h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project, index) => {
            const thumbnailUrl = project.images && project.images.length > 0 
              ? project.images[0].url 
              : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";

            return (
              <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                <div 
                  className="bg-[#1e2228]/50 rounded border border-gray-800 overflow-hidden hover:border-[#ff5959]/30 transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full"
                >
                  
                  <div 
                    className="relative w-full h-[220px] overflow-hidden bg-[#161821] cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img 
                      src={thumbnailUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    
                    <div className="absolute inset-0 bg-[#161821]/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
                        
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[#252833] border border-gray-600 text-white rounded text-sm font-medium hover:border-[#ff5959] hover:text-[#ff5959] transition-all duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            Code
                          </a>
                        )}

                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-[#ff5959] text-white rounded text-sm font-medium hover:bg-[#e04a4a] transition-all duration-300 shadow-[0_2px_8px_rgba(255,89,89,0.4)]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          Details
                        </button>

                      </div>
                    </div>
                  </div>

                  <div 
                    className="p-6 md:p-8 flex flex-col flex-grow cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex flex-col mb-4">
                      <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-[#ff5959] transition-colors">{project.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#ff5959] text-xs font-semibold">{project.role}</span>
                        <span className="text-gray-500 text-xs font-medium">| {project.duration}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                      {project.description.slice(0, 2).map((desc, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-[#ff5959] mt-1 text-xs">▹</span>
                          <span className="line-clamp-2">{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800 mt-auto">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-[#161821] text-gray-300 group-hover:text-[#ff5959] text-xs rounded border border-gray-800 group-hover:border-[#ff5959]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
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