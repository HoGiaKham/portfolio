// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Import Footer ở đây

export const metadata: Metadata = {
  title: "Hồ Gia Khâm | Fullstack Developer",
  description: "Portfolio cá nhân của Hồ Gia Khâm - Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#161821] text-white antialiased flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-20"> 
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}