// components/sections/Hero.tsx
"use client";

import { profileData } from "@/lib/data/profile";
import ScrollReveal from "@/components/ui/ScrollReveal";
import useTypewriter from "@/hooks/useTypewriter";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const typedName = useTypewriter(profileData.name, 150);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-[#161821]/85 backdrop-brightness-75"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-4xl pb-[12rem]">
        
        {/* Lời chào: Màu đỏ nhạt/hồng cam để dịu mắt */}
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-[#ff8a8a] font-medium text-2xl md:text-3xl mb-4 tracking-wide">
            Hi, I'm
          </p>
        </ScrollReveal>

        {/* Tên: Gradient từ Đỏ chủ đạo (#ff5959) sang Cam Vàng, có glow đỏ */}
        <ScrollReveal direction="up" delay={0.3}>
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-6 tracking-tight h-[90px] lg:h-[110px]">
            <span className="bg-gradient-to-r from-[#ff5959] to-[#ffb86c] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,89,89,0.2)]">
              {typedName}
            </span>
          </h1>
        </ScrollReveal>

        {/* Chức danh */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-gray-300 text-xl md:text-2xl font-medium tracking-wide h-[40px] flex justify-center mb-12">
            <Typewriter
              options={{
                strings: [
                  "Fullstack Developer",
                  "Software Engineer",
                  "Web Developer"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursorClassName: "text-[#ff5959] animate-pulse" // Con trỏ màu đỏ chủ đạo
              }}
            />
          </div>
        </ScrollReveal>

        {/* Cụm Nút bấm */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
            {/* Nút Download CV: Đỏ chủ đạo, có hiệu ứng shadow */}
            <a 
              href="/docs/CV_HoGiaKham.pdf" 
              target="_blank" 
              className="px-8 py-3 rounded-lg bg-[#ff5959] text-white font-semibold text-lg hover:bg-[#ff4040] transition-all duration-300 shadow-[0_4px_15px_rgba(255,89,89,0.3)]"
            >
              Download CV
            </a>
            
            {/* Nút Get In Touch: Viền đỏ */}
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-transparent border border-[#ff5959] text-[#ff5959] font-semibold text-lg hover:bg-[#ff5959]/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}