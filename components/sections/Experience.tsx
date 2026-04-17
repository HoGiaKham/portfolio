// components/sections/Experience.tsx
import { experienceData } from "@/lib/data/experience";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#161821] min-h-screen flex items-center w-full overflow-hidden py-20">
      
      <div className="absolute top-28 right-0 flex items-center text-5xl md:text-7xl font-black text-[#252836] select-none hidden sm:flex z-0">
        03 <span className="w-12 md:w-20 h-[2px] bg-[#252836] ml-4 md:ml-6"></span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 w-full px-4">
        
        {/* Tiêu đề Section (Bay từ Trái sang) */}
        <ScrollReveal direction="left">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-[#ff5959] tracking-widest uppercase mb-2">Resume</h2>
            <h3 className="text-4xl font-bold text-white tracking-wide">My Experience</h3>
          </div>
        </ScrollReveal>

        <div className="border-l-2 border-gray-800 ml-4 md:ml-6 space-y-12">
          
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#ff5959] shadow-[0_0_10px_rgba(255,89,89,0.5)] z-20"></span>
              
              {/* Thẻ chứa thông tin (Card) - Domino trượt từ dưới lên */}
              <ScrollReveal direction="up" delay={index * 0.2}>
                <div className="bg-[#1e2228]/50 p-6 md:p-8 rounded border border-gray-800 hover:border-[#ff5959]/30 transition-all duration-300 group relative z-10">
                  
                  <span className="inline-block px-3 py-1 bg-[#ff5959]/10 text-[#ff5959] border border-[#ff5959]/20 rounded text-xs font-semibold mb-4">
                    {item.duration}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#ff5959] transition-colors">{item.position}</h3>
                  <h4 className="text-lg text-gray-400 mb-6 font-medium italic">{item.company}</h4>
                  
                  <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-[#ff5959] mt-1 text-xs">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </ScrollReveal>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}