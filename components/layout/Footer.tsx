// components/layout/Footer.tsx
import Link from "next/link";
import { profileData } from "@/lib/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111319] pt-20 pb-10 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Cột 1: Thông tin thương hiệu */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              <span className="text-white">Hồ Gia </span>
              <span className="text-[#ff5959]">Khâm</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Một Fullstack Web Developer đam mê tạo ra các ứng dụng web hiện đại, mượt mà và tối ưu trải nghiệm người dùng.
            </p>
          </div>

          {/* Cột 2: Liên kết nhanh */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#about" className="hover:text-[#ff5959] transition-colors">About Me</Link></li>
              <li><Link href="#skills" className="hover:text-[#ff5959] transition-colors">Tech Stack</Link></li>
              <li><Link href="#experience" className="hover:text-[#ff5959] transition-colors">Experience</Link></li>
              <li><Link href="#projects" className="hover:text-[#ff5959] transition-colors">Projects</Link></li>
              {/* Đã thêm link Contact ở đây */}
              <li><Link href="#contact" className="hover:text-[#ff5959] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Cột 3: Liên hệ trực tiếp */}
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

        {/* Phần bản quyền và Social Media */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} Hồ Gia Khâm. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {/* Đã dọn dẹp các thẻ bị thừa ở đây */}
            <a href="https://github.com/HoGiaKham" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href={`mailto:${profileData.email}`} className="text-gray-400 hover:text-white transition-colors">
              Gmail
            </a>
            <div className="h-4 w-[1px] bg-gray-700"></div>
            <span className="text-gray-500 text-xs italic">Designed with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}