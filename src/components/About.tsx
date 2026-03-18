import React from "react";
import Image from "next/image";
import { GraduationCap, BookOpen, Award, Code2, Globe, Heart } from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  const educationData = [
    {
      date: "2019 - 2023",
      title: "BSc (Hons) in Information Technology",
      subtitle: "Specializing in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology",
      icon: GraduationCap,
      description:
        "Focused on the design, development, and maintenance of software systems using principles from computer science, software engineering, and project management.",
    },
  ];

  const publicationData = [
    {
      date: "2022",
      title: "Location Intelligence Based Smart E-Commerce Platform for Residential Real Estate Industry",
      conference: "ICOSEC 2022",
      icon: BookOpen,
      description:
        "This research explored the use of location intelligence and machine learning in developing an e-commerce platform to help users make optimal residential real estate location decisions.",
      technologies: ["React", "CSS", "Bootstrap", "Python", "ML"],
      link: "https://ieeexplore.ieee.org/",
    },
  ];

  const services = [
    { icon: <Code2 className="w-6 h-6" />, title: "Web Dev", desc: "React, Next.js, Vue" },
    { icon: <Globe className="w-6 h-6" />, title: "Mobile", desc: "React Native, Expo" },
    { icon: <Award className="w-6 h-6" />, title: "UI/UX", desc: "Figma, Adobe XD" },
    { icon: <Heart className="w-6 h-6" />, title: "Passion", desc: "Photography, Art" },
  ];

  return (
    <section
      id="about"
      className="py-10 md:py-32 bg-slate-50/50 dark:bg-[#0F172A] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3E7B6C]/10 text-[#3E7B6C] text-xs font-bold mb-8 uppercase tracking-widest">
              Who I Am
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-[#F8FAFC] leading-tight mb-8 tracking-tighter">
              Engineer by day, <br />
              <span className="text-[#3E7B6C]">Photographer</span> by choice.
            </h2>

            <div className="space-y-6 text-lg text-slate-600 dark:text-[#F8FAFC]/60 leading-relaxed">
              <p>
                I’m a Software Engineer with 3+ years of experience building modern, responsive web and mobile applications.
                I specialize in React.js, Next.js, and React Native.
              </p>
              <p>
                Passionate about clean UI design and scalable architecture, I enjoy solving complex problems and
                continuously learning new technologies to build impactful digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {services.map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#3E7B6C] mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#0B1120] p-8 md:p-12 rounded-[3rem] text-slate-900 dark:text-white shadow-xl dark:shadow-2xl border border-slate-200/60 dark:border-white/5 relative overflow-hidden transition-colors">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3E7B6C]/5 dark:bg-[#3E7B6C]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-12 flex items-center gap-4 text-slate-900 dark:text-white">
                <span className="w-10 h-1 bg-[#3E7B6C] rounded-full"></span>
                Education
              </h3>

              <div className="space-y-12">
                {educationData.map((item, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-[#3E7B6C]/20 dark:border-[#3E7B6C]/30 flex flex-col gap-4">
                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#3E7B6C] rounded-full border-4 border-white dark:border-[#0B1120]"></div>
                    <span className="text-xs font-bold text-[#3E7B6C] tracking-widest">{item.date}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-white/60">{item.institution}</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-white/40 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-3xl font-black mt-20 mb-12 flex items-center gap-4 text-slate-900 dark:text-white">
                <span className="w-10 h-1 bg-emerald-500 rounded-full"></span>
                Research
              </h3>

              <div className="space-y-12">
                {publicationData.map((item, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-emerald-500/20 dark:border-emerald-500/30 flex flex-col gap-4">
                    <div className="absolute -left-[11px] top-0 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white dark:border-[#0B1120]"></div>
                    <span className="text-xs font-bold text-emerald-500 tracking-widest">{item.date}</span>
                    <h4 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-white/60">{item.conference}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white/80 rounded-md border border-slate-200 dark:border-white/10 uppercase tracking-widest font-bold">{tech}</span>
                      ))}
                    </div>
                    <a href={item.link} target="_blank" className="text-xs font-bold text-emerald-500 flex items-center gap-2 hover:underline">
                      READ PUBLICATION <Globe className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;

