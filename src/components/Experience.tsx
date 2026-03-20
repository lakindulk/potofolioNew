import React from "react";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      date: "July 2025 - Present",
      title: "Software Engineer",
      company: "Creatit Solutions",
      location: "Colombo",
      image: "/seniorse.png",
      bg: "/vec1.png",
      description:
        "Experienced in developing cross-platform mobile applications using React Native and building responsive web applications with Next.js and Tailwind CSS. Skilled in collaborating with UI/UX designers to create modern, user-friendly interfaces, integrating APIs, and managing real-time data synchronization.",
    },
    {
      date: "Mar 2023 - June 2025",
      title: "Lead Front End Developer",
      company: "Outclass London",
      location: "Remote",
      image: "/headset.png",
      bg: "/vec2.png",
      description:
        "Led front-end development for the Outclass.io Learning Management System using React JS and Material UI, improving mobile engagement by 60%. Reduced page load time by 35% through lazy loading and optimized Firebase queries. Developed a cross-platform mobile application with React Native and Expo.",
    },
    {
      date: "Apr 2021 - Oct 2021",
      title: "Intern - Software Engineer",
      company: "Sri Lanka Telecom Mobitel",
      location: "Sri Lanka",
      image: "/juniorse.png",
      bg: "/vec3.png",
      description:
        "Developed a GPS-enabled Android application for network fault reporting, reducing report submission time by 50%. Built a web-based dashboard for incident tracking that improved supervisor response time by 35%. Implemented secure user authentication and role-based access controls.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-10 md:py-32 bg-slate-50/50 dark:bg-[#0F172A] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-[#F8FAFC] tracking-tighter">
            My Journey
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-[#FF7F50] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line - Hidden on small mobile, moved to left on tablets, centered on desktop */}
          <div className="absolute md:left-1/2 left-8 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/10 via-[#FF7F50]/20 to-emerald-500/10 dark:from-purple-500/20 dark:via-[#FF7F50]/20 dark:to-emerald-500/20 md:-translate-x-1/2"></div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative mb-20 flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute md:left-1/2 left-8 md:-translate-x-1/2 -translate-x-1/2 w-5 h-5 bg-white dark:bg-[#0F172A] border-4 border-[#FF7F50] rounded-full z-20 shadow-[0_0_15px_rgba(255,127,80,0.3)] dark:shadow-[0_0_15px_rgba(255,127,80,0.5)]"></div>

              {/* Content Card */}
              <div
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white mb-6 shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.date}
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-[#F8FAFC] leading-tight">
                  {exp.title}
                </h3>
                <div
                  className={`flex items-center gap-2 mt-2 text-[#FF7F50] font-bold ${idx % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                >
                  <span>{exp.company}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-gray-700"></span>
                  <div className="flex items-center gap-1 text-sm font-medium text-slate-400 dark:text-[#F8FAFC]/40">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>
                </div>

                <div
                  className={`mt-6 p-6 rounded-2xl bg-white dark:bg-[#1E293B]/50 border border-slate-200 dark:border-white/5 backdrop-blur-sm transition-all hover:shadow-xl hover:-translate-y-1 group ${idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} max-w-xl shadow-sm`}
                >
                  <p className="text-slate-600 dark:text-[#F8FAFC]/70 leading-relaxed text-base">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="hidden md:flex w-1/2 justify-center items-center">
                <div
                  className={`relative w-100 h-100 rounded-3xl  flex items-center justify-center transform transition-transform hover:scale-110 ${
                    idx % 2 === 0 ? "-rotate-3" : "rotate-3"
                  }`}
                >
                  {/* Background Image */}
                  <Image
                    src={exp.bg || "/fallback.png"}
                    alt="background"
                    fill
                    className="cover rounded-3xl opacity-70"
                  />

                  {/* Foreground Image */}
                  <Image
                    src={exp.image || "/fallback.png"}
                    alt={exp.title}
                    width={400}
                    height={400}
                    className="object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
