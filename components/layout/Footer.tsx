import Link from "next/link";
import { profileData } from "@/lib/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111319] pt-20 pb-10 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          // Brand Info & Bio
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              <span className="text-white">Hồ Gia </span>
              <span className="text-[#ff5959]">Khâm</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A Fullstack Web Developer passionate about building modern, scalable web applications and delivering seamless user experiences.
            </p>
          </div>

          // Column 2: Quick Links
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#about" className="hover:text-[#ff5959] transition-colors">About Me</Link></li>
              <li><Link href="#skills" className="hover:text-[#ff5959] transition-colors">Tech Stack</Link></li>
              <li><Link href="#experience" className="hover:text-[#ff5959] transition-colors">Experience</Link></li>
              <li><Link href="#projects" className="hover:text-[#ff5959] transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-[#ff5959] transition-colors">Contact</Link></li>
            </ul>
          </div>

          // Column 3: Contact Info
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-[#ff5959]">Email:</span> {profileData.email}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#ff5959]">Phone:</span> {profileData.phone}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#ff5959]">Address:</span> {profileData.address}
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} Hồ Gia Khâm. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a href="https://github.com/HoGiaKham" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/h%E1%BB%93-gia-kh%C3%A2m-h%E1%BB%93-5b1ab0371/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
              LinkedIn
            </a>
            <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-white transition-colors text-sm">
              Gmail
            </a>
            <div className="hidden md:block h-4 w-[1px] bg-gray-700"></div>
            <span className="text-gray-500 text-xs italic">Designed with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}