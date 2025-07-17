import { Button } from "@/components/ui/button";
import React from "react";

const navigationLinks = [
  "Home",
  "Who We Are",
  "What We Do",
  "Resources",
  "Green Credits",
];

const usefulLinks = ["Disclaimer", "Privacy Policy"];

export const DesktopWrapperSubsection = () => {
  return (
    <section className="min-h-screen bg-[#0b453b] flex flex-col items-center py-20 w-full">
      <h2 className="text-white text-6xl md:text-7xl font-serif font-semibold mb-12 text-center tracking-wide">GET IN TOUCH</h2>
      <form className="w-full max-w-2xl flex flex-col gap-8 items-center mb-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-white/80 text-lg mb-2">First Name</label>
            <input id="firstName" name="firstName" type="text" className="bg-transparent border-b border-white/60 text-white px-2 py-2 focus:outline-none focus:border-[#48ffd4] placeholder:text-white/50" placeholder="" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-white/80 text-lg mb-2">Last Name</label>
            <input id="lastName" name="lastName" type="text" className="bg-transparent border-b border-white/60 text-white px-2 py-2 focus:outline-none focus:border-[#48ffd4] placeholder:text-white/50" placeholder="" />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="email" className="text-white/80 text-lg mb-2">Email</label>
          <input id="email" name="email" type="email" className="bg-transparent border-b border-white/60 text-white px-2 py-2 focus:outline-none focus:border-[#48ffd4] placeholder:text-white/50" placeholder="" />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="message" className="text-white/80 text-lg mb-2">Message</label>
          <textarea id="message" name="message" rows={2} className="bg-transparent border-b border-white/60 text-white px-2 py-2 focus:outline-none focus:border-[#48ffd4] placeholder:text-white/50 resize-none" placeholder="" />
        </div>
        <Button type="submit" className="w-full h-14 bg-white/30 text-[#0b453b] text-3xl font-bold rounded-md tracking-wider hover:bg-white/50 transition-colors border-0" style={{letterSpacing: '0.05em'}}>SEND</Button>
      </form>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-start">
        {/* Logo/Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/AQUAE.Impact-LOGO-REC-removebg-preview (2).svg" 
              alt="AQUAE Impact Logo" 
              className="w-12 h-12"
            />
            <span className="text-[#47bdaa] text-4xl font-extrabold tracking-tight font-sans">AQUAE IMPACT</span>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col items-center">
          <span className="text-[#48ffd4] text-xl font-medium mb-2">Links</span>
          {navigationLinks.map((link, index) => (
            <div key={index} className="text-white text-lg mb-1 font-normal">{link}</div>
          ))}
        </div>
        {/* Useful Links */}
        <div className="flex flex-col items-center md:items-end">
          <span className="text-[#48ffd4] text-xl font-medium mb-2">Useful Links</span>
          {usefulLinks.map((link, index) => (
            <div key={index} className="text-[#48ffd4] text-lg mb-1 font-normal">{link}</div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mt-12 gap-8">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10 bg-white rounded-md p-1 hover:scale-110 transition-transform" />
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" className="w-10 h-10 bg-[#25D366] rounded-md p-1 hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" className="w-10 h-10 bg-white rounded-md p-1 hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-10 h-10 bg-white rounded-md p-1 hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default DesktopWrapperSubsection;