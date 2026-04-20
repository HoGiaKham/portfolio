"use client";

import Link from "next/link";

export default function Navbar() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    window.history.pushState(null, "", "/");
  };

  return (
    <header className="fixed top-0 w-full bg-[#161821]/95 backdrop-blur-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              onClick={handleScrollToTop} 
              className="text-3xl font-bold tracking-wider"
            >
              <span className="text-white">Hồ Gia </span>
              <span className="text-[#ff5959]">Khâm</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 text-base font-medium">
            <a href="#about" className="text-gray-300 hover:text-[#ff5959] transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-[#ff5959] transition-colors">Skills</a>
            <a href="#experience" className="text-gray-300 hover:text-[#ff5959] transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-[#ff5959] transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-[#ff5959] transition-colors">Contact</a>
          </nav>

        </div>
      </div>
    </header>
  );
}