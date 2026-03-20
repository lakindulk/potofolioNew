import React from "react";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Intro", href: "#intro" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      name: "Github",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/lakindulk",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/lakindu-kavishka-8a1356217/",
    },
  ];

  return (
    <footer className="bg-slate-50/50 dark:bg-[#0B1120] py-20 border-t border-slate-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="text-4xl font-black text-slate-900 dark:text-[#F8FAFC] mb-12 tracking-tighter">
          LAKINDU<span className="text-[#3E7B6C]">.</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-slate-400 dark:text-[#F8FAFC]/40 hover:text-slate-900 dark:hover:text-[#F8FAFC] transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex gap-8 mb-16">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 dark:text-[#F8FAFC]/20 hover:text-[#3E7B6C] dark:hover:text-[#3E7B6C] transition-all border border-slate-100 dark:border-white/5 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-gray-800 to-transparent mb-12"></div>

        <div className="text-[10px] font-black text-slate-400 dark:text-[#F8FAFC]/20 uppercase tracking-[0.5em] leading-relaxed">
          © 2026 LAKINDU KAVISHKA — BUILT WITH PASSION & REFINED DESIGN
        </div>
      </div>
    </footer>
  );
};

export default Footer;
