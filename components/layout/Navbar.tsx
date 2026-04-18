import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-[#161821]/95 backdrop-blur-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold tracking-wider">
              <span className="text-white">Hồ Gia </span>
              <span className="text-[#ff5959]">Khâm</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 text-base font-medium">
            <Link href="#about" className="text-gray-300 hover:text-[#ff5959] transition-colors">About</Link>
            <Link href="#skills" className="text-gray-300 hover:text-[#ff5959] transition-colors">Skills</Link>
            <Link href="#experience" className="text-gray-300 hover:text-[#ff5959] transition-colors">Experience</Link>
            <Link href="#projects" className="text-gray-300 hover:text-[#ff5959] transition-colors">Projects</Link>
            <Link href="#contact" className="text-gray-300 hover:text-[#ff5959] transition-colors">Contact</Link>
          </nav>

        </div>
      </div>
    </header>
  );
}