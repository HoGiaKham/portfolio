// components/sections/About.tsx
import { profileData } from "@/lib/data/profile";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative bg-[#161821] min-h-screen flex items-center w-full overflow-hidden py-20">
      
      {/* KHỐI CHỨA SỐ 01 BÊN PHẢI */}
      <div className="absolute top-28 right-0 flex items-center text-5xl md:text-7xl font-black text-[#252836] select-none hidden sm:flex z-0">
        01 <span className="w-12 md:w-20 h-[2px] bg-[#252836] ml-4 md:ml-6"></span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center relative z-10 px-4 w-full">
        
        {/* ================= CỘT TRÁI: GIỚI THIỆU & HỌC VẤN ================= */}
        <div className="w-full md:w-1/2">
          <ScrollReveal direction="left">
            <div className="flex items-center gap-4 mb-2">
                <span className="text-[#ff5959] font-medium tracking-wider text-sm uppercase">Discover</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">About Me</h2>

            <p className="text-gray-400 mb-10 leading-relaxed text-base md:text-lg">
              {profileData.summary}
            </p>

            {/* Khối Học Vấn: Thiết kế dạng Card xịn xò thay vì gạch dọc */}
            <div className="bg-[#1e2228]/40 border border-gray-800 rounded-xl p-6 hover:border-[#ff5959]/40 transition-all duration-300 shadow-sm group">
              <div className="flex items-center gap-3 mb-4">
                {/* Icon mũ tốt nghiệp */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5959] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="ml-10">
                <h4 className="text-lg text-white font-semibold">Software Engineering</h4>
                <p className="text-gray-400 mt-1">Industrial University of HCM City (IUH)</p>
                <div className="inline-block px-3 py-1 bg-[#161821] text-gray-300 text-sm font-mono rounded-md mt-4 border border-gray-700">
                  2021 - 2026
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ================= CỘT PHẢI: LƯỚI THÔNG TIN CHI TIẾT ================= */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 p-8 border border-gray-800 rounded-xl bg-[#1e2228]/30 shadow-lg backdrop-blur-sm hover:border-[#ff5959]/30 transition-all duration-300">
              
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Name</span> 
                <span className="text-white font-medium text-base">{profileData.name}</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Email</span> 
                <a href={`mailto:${profileData.email}`} className="text-gray-300 hover:text-[#ff5959] transition-colors truncate">
                  {profileData.email}
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Phone</span> 
                <span className="text-gray-300">{profileData.phone}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Address</span> 
                <span className="text-gray-300">{profileData.address}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Experience</span> 
                <span className="text-gray-300">Junior Fullstack</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Freelance</span> 
                <span className="text-[#ff5959] font-medium">Available</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">GitHub</span> 
                <a href="https://github.com/HoGiaKham" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ff5959] transition-colors">
                  HoGiaKham
                </a>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">LinkedIn</span> 
                <a href="https://www.linkedin.com/in/h%E1%BB%93-gia-kh%C3%A2m-h%E1%BB%93-5b1ab0371/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ff5959] transition-colors truncate">
                  Hồ Gia Khâm
                </a>
              </div>

            </div>
          </ScrollReveal>
        </div>
        
      </div>
    </section>
  );
}