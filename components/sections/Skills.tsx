import { skillsData } from "@/lib/data/skills";
import ScrollReveal from "@/components/ui/ScrollReveal";

const getCategoryIcon = (index: number) => {
  const icons = [
    <svg key="0" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
    <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ];
  return icons[index % icons.length];
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#1a1d27] min-h-screen flex items-center w-full overflow-hidden border-t border-b border-gray-800/50 py-20">
      <div className="absolute top-28 right-0 flex items-center text-5xl md:text-7xl font-black text-[#252836] select-none hidden sm:flex z-0">
        02 <span className="w-12 md:w-20 h-[2px] bg-[#252836] ml-4 md:ml-6"></span>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <ScrollReveal direction="left">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-[#ff5959] tracking-widest uppercase mb-2">What I Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-wide">My Tech Stack</h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillGroup, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <div className="group bg-gradient-to-br from-[#202330] to-[#161821] p-8 md:p-10 rounded-xl border border-gray-700/50 hover:border-[#ff5959]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(255,89,89,0.3)] flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-700/50 pb-6">
                  <div className="p-3 bg-[#161821] rounded-lg text-gray-400 group-hover:text-[#ff5959] group-hover:bg-[#ff5959]/10 transition-colors duration-500">
                    {getCategoryIcon(index)}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#ff5959] transition-colors duration-300">
                    {skillGroup.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-[#161821] text-gray-300 text-sm font-medium rounded-md border border-gray-700/50 hover:text-white hover:bg-[#ff5959]/20 hover:border-[#ff5959]/50 transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}