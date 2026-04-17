// components/sections/Contact.tsx
"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Bắt đầu trạng thái gửi (nút mờ đi, hiện chữ Sending...)

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("🎉 Tin nhắn đã được gửi thành công! Khâm sẽ phản hồi bạn sớm nhất.");
        form.reset(); // Xóa trắng form sau khi gửi
      } else {
        alert("❌ Đã có lỗi xảy ra từ máy chủ. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Lỗi kết nối:", error);
      alert("❌ Không thể kết nối đến máy chủ.");
    } finally {
      setIsSubmitting(false); // Kết thúc quá trình gửi
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-[#161821] text-white min-h-screen flex items-center overflow-hidden">
      
      {/* SỐ 05 ĐỒNG BỘ VỚI CÁC SECTION KHÁC */}
      <div className="absolute top-28 right-0 flex items-center text-5xl md:text-7xl font-black text-[#252836] select-none hidden sm:flex z-0">
        05 <span className="w-12 md:w-20 h-[2px] bg-[#252836] ml-4 md:ml-6"></span>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* TIÊU ĐỀ */}
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
            Get In <span className="text-[#ff5959]">Touch</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* ================= CỘT TRÁI: FORM LIÊN HỆ ================= */}
          <ScrollReveal direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-[#252833] p-8 rounded-2xl shadow-lg border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input type="text" id="name" name="name" disabled={isSubmitting} className="w-full px-4 py-3 bg-[#161821] text-white border border-gray-700 rounded-lg focus:outline-none focus:border-[#ff5959] transition-colors disabled:opacity-50" placeholder="John Doe" required />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input type="email" id="email" name="email" disabled={isSubmitting} className="w-full px-4 py-3 bg-[#161821] text-white border border-gray-700 rounded-lg focus:outline-none focus:border-[#ff5959] transition-colors disabled:opacity-50" placeholder="john@example.com" required />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} disabled={isSubmitting} className="w-full px-4 py-3 bg-[#161821] text-white border border-gray-700 rounded-lg focus:outline-none focus:border-[#ff5959] transition-colors resize-none disabled:opacity-50" placeholder="How can I help you?" required></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#ff5959] hover:bg-[#e04a4a] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* ================= CỘT PHẢI: MẠNG XÃ HỘI ================= */}
          <ScrollReveal direction="left" delay={0.4}>
            <div className="space-y-8 pl-0 md:pl-8 lg:pl-16 flex flex-col justify-center h-full">
              <div>
                <h3 className="text-3xl font-bold mb-4">Let's Connect!</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  I'm always open to discussing web development work, partnership opportunities, or just having a chat about the latest in tech. Find me on these platforms:
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                {/* GitHub */}
                <a 
                  href="https://github.com/HoGiaKham" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#252833] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff5959] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(255,89,89,0.5)]"
                  title="GitHub Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/h%E1%BB%93-gia-kh%C3%A2m-h%E1%BB%93-5b1ab0371/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#252833] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff5959] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(255,89,89,0.5)]"
                  title="LinkedIn Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/giakham.1705/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#252833] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff5959] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(255,89,89,0.5)]"
                  title="Facebook Profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}