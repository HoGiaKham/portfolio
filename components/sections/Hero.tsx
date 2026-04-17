// components/sections/Hero.tsx
"use client";

import { profileData } from "@/lib/data/profile";
import ScrollReveal from "@/components/ui/ScrollReveal";
import useTypewriter from "@/hooks/useTypewriter";
import Typewriter from "typewriter-effect"; // Import thư viện mới cài

export default function Hero() {
  // Tên gõ 1 lần, tốc độ 150ms
  const typedName = useTypewriter(profileData.name, 150);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#161821]/85 backdrop-brightness-75"></div>
      </div>

      {/* Đã thêm padding bottom lớn (pb-[12rem] md:pb-[16rem]) ở đây để đẩy nội dung lên cao hơn khi căn giữa dọc */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full pb-[12rem] md:pb-[16rem]">
        
        <ScrollReveal direction="down" delay={0.1}>
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border border-gray-600 mb-6 bg-[#252833] shadow-[0_0_30px_rgba(255,89,89,0.15)]">
            <img 
              src="/images/avatar.jpg" 
              alt={profileData.name} 
              className="w-full h-full object-cover" 
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <h1 className="text-5xl md:text-7xl font-bold mb-3 tracking-tight h-[80px]">
            {/* Áp dụng text đã được gõ cho Tên */}
            <span className="text-[#ff5959]">{typedName}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-gray-300 text-xl md:text-2xl font-medium tracking-wide h-[40px] flex justify-center">
            {/* Hiệu ứng gõ xóa luân phiên cho Chức danh */}
            <Typewriter
              options={{
                strings: [
                  "Fullstack Developer",
                  "Software Engineer",
                  "Frontend Developer"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursorClassName: "text-[#ff5959] animate-pulse" // Chỉnh màu con trỏ
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}