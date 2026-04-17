// components/sections/About.tsx
import { profileData } from "@/lib/data/profile";
import ScrollReveal from "@/components/ui/ScrollReveal"; // <-- 1. Import ScrollReveal vào đây

export default function About() {
  return (
    <section id="about" className="relative bg-[#161821] min-h-screen flex items-center w-full overflow-hidden py-20">
      
      {/* KHỐI CHỨA SỐ 01 BÊN PHẢI GIỐNG ẢNH MẪU */}
      <div className="absolute top-28 right-0 flex items-center text-5xl md:text-7xl font-black text-[#252836] select-none hidden sm:flex z-0">
        01 <span className="w-12 md:w-20 h-[2px] bg-[#252836] ml-4 md:ml-6"></span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10 px-4">
        
        {/* ================= CỘT TRÁI: ẢNH CHÂN DUNG ================= */}
        <div className="w-full md:w-5/12">
          {/* 2. Bọc ảnh bằng ScrollReveal, hướng bay từ TRÁI sang PHẢI */}
          <ScrollReveal direction="right">
            <div className="aspect-[4/5] bg-[#252833] rounded border border-gray-700 relative overflow-hidden shadow-lg">
              <img 
                src="/images/avatar.jpg" 
                alt={profileData.name} 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              />
            </div>
          </ScrollReveal>
        </div>

        {/* ================= CỘT PHẢI: NỘI DUNG CHI TIẾT ================= */}
        <div className="w-full md:w-7/12">
          {/* 3. Bọc nội dung bằng ScrollReveal, hướng bay từ PHẢI sang TRÁI, trễ 0.2s */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="flex items-center gap-4 mb-2">
                <span className="text-[#ff5959] font-medium tracking-wider text-sm uppercase">Discover</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 tracking-wide">About Me</h2>

            <p className="text-gray-400 mb-8 leading-relaxed text-base">
              {profileData.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 p-6 border border-[#ff5959]/20 rounded mb-8 bg-[#1e2228]/40">
              <div className="text-sm"><span className="text-white font-medium mr-2">Name:</span> <span className="text-gray-400">{profileData.name}</span></div>
              
              {/* Email Clickable + Tooltip (Thuộc tính title) */}
              <div className="text-sm">
                <span className="text-white font-medium mr-2">Email:</span> 
                <a 
                  href={`mailto:${profileData.email}`} 
                  title="Nhấn vào đây để mở ứng dụng gửi Mail cho Khâm"
                  className="text-gray-400 hover:text-[#ff5959] transition-colors border-b border-transparent hover:border-[#ff5959]"
                >
                  {profileData.email}
                </a>
              </div>

              <div className="text-sm"><span className="text-white font-medium mr-2">Phone:</span> <span className="text-gray-400">{profileData.phone}</span></div>
              <div className="text-sm"><span className="text-white font-medium mr-2">Address:</span> <span className="text-gray-400">{profileData.address}</span></div>
              <div className="text-sm"><span className="text-white font-medium mr-2">Experience:</span> <span className="text-gray-400">Junior</span></div>
              <div className="text-sm"><span className="text-white font-medium mr-2">Freelance:</span> <span className="text-[#ff5959] font-medium">Available</span></div>
              
              {/* GitHub Clickable + Tooltip */}
              <div className="text-sm">
                <span className="text-white font-medium mr-2">GitHub:</span> 
                <a 
                  href="https://github.com/HoGiaKham" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Mở trang GitHub của Khâm trong tab mới"
                  className="text-gray-400 hover:text-[#ff5959] transition-colors border-b border-transparent hover:border-[#ff5959]"
                >
                  HoGiaKham
                </a>
              </div>

              {/* LinkedIn Clickable + Tooltip */}
              <div className="text-sm">
                <span className="text-white font-medium mr-2">LinkedIn:</span> 
                <a 
                  href="https://www.linkedin.com/in/h%E1%BB%93-gia-kh%C3%A2m-h%E1%BB%93-5b1ab0371/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Kết nối với Khâm trên LinkedIn"
                  className="text-gray-400 hover:text-[#ff5959] transition-colors border-b border-transparent hover:border-[#ff5959]"
                >
                  Hồ Gia Khâm
                </a>
              </div>

              <div className="text-sm"><span className="text-white font-medium mr-2">Languages:</span> <span className="text-gray-400">Vietnamese, English</span></div>
            </div>

            {/* Nút Download có thêm Tooltip */}
            <a 
              href="/docs/CV_HoGiaKham.pdf" 
              download="CV_HoGiaKham.pdf"
              title="Tải xuống bản PDF CV của Khâm"
              className="inline-block px-8 py-3 bg-[#ff5959] text-white font-semibold rounded hover:bg-[#ff5959]/80 transition-colors shadow-[0_4px_14px_0_rgba(255,89,89,0.3)]"
            >
              DOWNLOAD CV
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}