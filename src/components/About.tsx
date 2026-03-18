import React from "react";
import Image from "next/image";
import { GraduationCap, BookOpen } from "lucide-react";

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
      title:
        "Location Intelligence Based Smart E-Commerce Platform for Residential Real Estate Industry",
      conference: "ICOSEC 2022",
      icon: BookOpen,
      description:
        "This research explored the use of location intelligence and machine learning in developing an e-commerce platform to help users make optimal residential real estate location decisions.",
      technologies: ["React", "CSS", "Bootstrap", "Python", "Machine Learning"],
      link: "https://ieeexplore.ieee.org/",
    },
  ];
  const stats = [
    { label: "Years", value: "3+", width: 60, height: 40, align: "center" },
    {
      label: "Designation",
      value: "Frontend Dev",
      width: 220,
      height: 40,
      align: "right",
      fontSize: "2px",
    },
    {
      label: "Delivered Projects",
      value: "5+",
      width: 60,
      height: 40,
      align: "left",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#3E7B6C]/10 dark:bg-[#0B1120] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-18">
          <h2 className="relative text-4xl md:text-5xl font-black text-black dark:text-[#F8FAFC] inline-block z-10">
            About <span className="relative z-20">Me</span>
            <div className="absolute top-1 left-41 z-0">
              <svg
                width="81"
                height="47"
                viewBox="0 0 81 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="81"
                  height="47"
                  rx="25"
                  fill="#3e7b6c86"
                  fillOpacity="0.5"
                />
              </svg>
            </div>
            <div className="absolute -top-6 left-63 w-[10px] h-[20px] md:w-[40px] md:h-[40px] z-30">
              <Image
                src="/pen.png"
                alt="Lakindu"
                fill
                className="object-contain drop-shadow-2xl mt-10"
                priority
              />
            </div>
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-black/70 dark:text-[#F8FAFC]/70 text-lg leading-relaxed">
            I’m a Frontend Developer and Software Engineer with 3+ years of
            experience building modern, responsive web and mobile applications.
            I specialize in React.js, Next.js, React Native, and modern UI
            frameworks, focusing on creating fast, scalable, and user-friendly
            digital products.{" "}
          </p>

          <p className="mt-8 max-w-2xl mx-auto text-black/70 dark:text-[#F8FAFC]/70 text-lg leading-relaxed">
            Passionate about clean UI design, performance optimization, and
            scalable architecture, I enjoy solving complex problems and
            continuously learning new technologies to build impactful digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div
                className={`relative mb-4 flex items-center
        ${stat.align === "center" ? "justify-center" : ""}
        ${stat.align === "right" ? "justify-end" : ""}
        ${stat.align === "left" ? "justify-start" : ""}
      `}
              >
                {/* SVG Background */}
                <svg
                  width={stat.width}
                  height={stat.height}
                  viewBox={`0 0 ${stat.width} ${stat.height}`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute mt-[12px] ml-[-4px]"
                >
                  <rect
                    width={stat.width}
                    height={stat.height}
                    rx="30"
                    fill="#3e7b6c86"
                    fillOpacity="0.52549"
                  />
                </svg>

                {/* Text */}
                <span className="text-5xl md:text-4xl font-black text-black dark:text-[#F8FAFC] relative z-10 group-hover:scale-150 transition-transform inline-block">
                  {stat.value}
                </span>
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-[#F8FAFC]/40 font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <section className="py-24 px-6 bg-[#0B1120]">
          <div className="max-w-5xl mx-auto">
            {/* ===== SECTION TITLE ===== */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white relative inline-block">
                Education
                <span className="block w-20 h-1 bg-[#3E7B6C] mx-auto mt-4 rounded-full"></span>
              </h2>
              <p className="text-gray-400 mt-4 text-lg">
                My academic journey and research contributions
              </p>
            </div>

            {/* ===== EDUCATION TIMELINE ===== */}
            <div className="relative border-l border-white/20 pl-8 space-y-12">
              {educationData.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="relative">
                    {/* ICON */}
                    <div className="absolute -left-12 top-1 bg-[#3E7B6C] p-2 rounded-full shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* CONTENT */}
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition">
                      <p className="text-sm text-gray-400 mb-1">{item.date}</p>

                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                        {item.title}
                      </h3>

                      <p className="text-gray-300">{item.subtitle}</p>

                      <p className="text-gray-400 text-sm mb-3">
                        {item.institution}
                      </p>

                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ===== PUBLICATIONS SUBSECTION ===== */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white">Publications</h3>
                <p className="text-gray-400 mt-3">
                  Research papers and academic contributions
                </p>
              </div>

              <div className="space-y-10 border-l border-white/20 pl-8 relative">
                {publicationData.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="relative">
                      {/* ICON */}
                      <div className="absolute -left-12 top-1 bg-[#3E7B6C] p-2 rounded-full shadow-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* CARD */}
                      <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition">
                        <p className="text-sm text-gray-400 mb-1">
                          {item.date}
                        </p>

                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-300 mb-2">{item.conference}</p>

                        <p className="text-gray-300 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* TECHNOLOGIES */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-white/10 text-white rounded-full border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* LINK */}
                        <a
                          href={item.link}
                          target="_blank"
                          className="inline-block text-sm text-[#3E7B6C] hover:text-white transition"
                        >
                          View Publication →
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
