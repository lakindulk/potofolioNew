import React from "react";
import { Mail, MessageCircle, Phone, ArrowRight, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 md:py-32 bg-slate-50/50 dark:bg-[#0B1120] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-gray-800 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E7B6C]/10 dark:bg-[#3E7B6C]/20 text-[#3E7B6C] text-sm font-bold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3E7B6C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3E7B6C]"></span>
              </span>
              AVAILABLE FOR NEW PROJECTS
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-[#F8FAFC] leading-[1.1] tracking-tighter">
              Let's build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E7B6C] to-[#3B82F6]">
                something great.
              </span>
            </h2>

            <p className="mt-8 text-xl text-slate-600 dark:text-[#F8FAFC]/60 max-w-lg leading-relaxed">
              Have a project in mind? Looking for a long-term partner?
              I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="mt-12 space-y-6">
              <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white dark:hover:bg-white/5 transition-all shadow-sm hover:shadow-md border border-transparent hover:border-slate-100 dark:hover:border-white/5">
                <div className="w-14 h-14 bg-white dark:bg-[#1E293B] rounded-2xl flex items-center justify-center shadow-md dark:shadow-xl text-[#3E7B6C] group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 dark:text-[#F8FAFC]/40 uppercase tracking-widest">Email Me</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC]">lakindulk9@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white dark:hover:bg-white/5 transition-all shadow-sm hover:shadow-md border border-transparent hover:border-slate-100 dark:hover:border-white/5">
                <div className="w-14 h-14 bg-white dark:bg-[#1E293B] rounded-2xl flex items-center justify-center shadow-md dark:shadow-xl text-[#3B82F6] group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 dark:text-[#F8FAFC]/40 uppercase tracking-widest">Call Me</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC]">+94 71 581 6400</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-[#1E293B] p-10 md:p-14 rounded-[3rem] shadow-xl dark:shadow-2xl border border-slate-200/60 dark:border-white/5 relative z-10 transition-colors">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-500 mb-8">
                <MessageCircle className="w-10 h-10" />
              </div>

              <h3 className="text-3xl font-black text-slate-900 dark:text-[#F8FAFC] mb-6 tracking-tight">
                Fast Response
              </h3>

              <p className="text-lg text-slate-600 dark:text-[#F8FAFC]/60 mb-10 leading-relaxed">
                The quickest way to get in touch with me is through WhatsApp.
                I usually respond within a few hours.
              </p>

              <a
                href="https://wa.me/94715816400"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-6 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 group hover:-translate-y-1"
              >
                CONTACT ON WHATSAPP
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <p className="mt-8 text-center text-sm font-medium text-slate-400 dark:text-[#F8FAFC]/40">
                Clicking will direct you to WhatsApp Web or App
              </p>
            </div>

            {/* Background design elements for the card */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-[#3E7B6C] rounded-[3rem] -z-0 opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;

