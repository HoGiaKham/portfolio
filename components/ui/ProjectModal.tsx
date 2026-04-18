"use client";

import { useState } from "react";
import { ProjectData } from "@/types";

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        
        <div 
          className="absolute inset-0 bg-[#0f1115]/80 backdrop-blur-sm cursor-pointer"
          onClick={onClose}
        ></div>

        <div className="relative bg-[#1e2228] w-full max-w-5xl rounded-xl border border-gray-700 shadow-2xl p-8 max-h-[90vh] overflow-y-auto animate-fade-in-up">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-[#ff5959] transition-colors bg-[#2a2e35] rounded-full p-2 z-10"
            title="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 pr-10">{project.title}</h3>
          <p className="text-[#ff5959] font-medium mb-8 pb-4 border-b border-gray-700">
            {project.role} • {project.duration}
          </p>

          <h4 className="text-lg font-semibold text-white mb-4">Key Features & Responsibilities:</h4>
          <ul className="space-y-4 text-gray-300 mb-8">
            {project.description.map((desc, idx) => (
              <li key={idx} className="flex gap-3 leading-relaxed">
                <span className="text-[#ff5959] mt-1 text-sm">▹</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-[#161821] text-[#ff5959] text-sm font-medium rounded-md border border-[#ff5959]/30">
                {tech}
              </span>
            ))}
          </div>

          {project.images && project.images.length > 0 && (
            <div className="mb-10">
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
                Giao diện Demo:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#161821] p-3 rounded-lg border border-gray-700 hover:border-[#ff5959]/80 transition-all group cursor-pointer"
                    onClick={() => setZoomedImage(img.url)} // Bấm vào là set link ảnh vào state
                  >
                    <span className="block text-sm font-medium text-gray-400 group-hover:text-white mb-2 transition-colors">
                      {img.label}
                    </span>
                    <div className="overflow-hidden rounded border border-gray-800">
                      <img 
                        src={img.url} 
                        alt={img.label} 
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 bg-gray-800 hover:bg-[#ff5959] text-white font-semibold rounded transition-colors border border-gray-600 hover:border-[#ff5959]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          onClick={() => setZoomedImage(null)} // Bấm vào bất cứ đâu cũng đóng ảnh
        >
          {/* Nút X đóng ảnh */}
          <button 
            className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white hover:text-[#ff5959] transition-colors p-2"
            title="Đóng ảnh"
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src={zoomedImage} 
            alt="Zoomed" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in-up"
          />
        </div>
      )}
    </>
  );
}