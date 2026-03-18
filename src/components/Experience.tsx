import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "July 2025 - Present",
      title: "Software Engineer : Creatit Solutions ",
      location: "Colombo",
      description:
        "Experienced in developing cross-platform mobile applications using React Native and building responsive web applications with Next.js and Tailwind CSS. Skilled in collaborating with UI/UX designers to create modern, user-friendly interfaces, integrating APIs, and managing real-time data synchronization. Focused on delivering high-performance, scalable applications while maintaining strong code quality.",
    },
    {
      date: "Mar 2023 - June 2025",
      title: "Lead Front End Developer : Outclass London",
      location: "Remote",
      description:
        "Led front-end development for the Outclass.io Learning Management System using React JS and Material UI, improving mobile engagement by 60%. Reduced page load time by 35% through lazy loading and optimized Firebase queries. Developed a cross-platform mobile application with React Native and Expo, increasing user retention by 40%. Collaborated with a global team to deliver 15+ new features based on analytics and user feedback. Also built and launched the Three-thirty scheduling and instructor portal used by 100+ students, achieving 95% user satisfaction and reducing UI-related bugs by 45% through strong code quality practices.",
    },
    {
      date: "Apr 2021 - Oct 2021",
      title: "Intern - Software Engineer : Sri Lanka Telecom Mobitel",
      location: "Sri Lanka",
      description:
        "Developed a GPS-enabled Android application for network fault reporting, reducing report submission time by 50%. Built a web-based dashboard for incident tracking that improved supervisor response time by 35%. Implemented secure user authentication, role-based access controls, and analytics features using Node.js and Firebase.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-[#0F172A] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-black dark:text-[#F8FAFC] mb-20 text-center">
          My Journey
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black/10 dark:bg-[#F8FAFC]/10 -translate-x-1/2"></div>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative mb-16 flex items-start ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="absolute left-1/2 top-2 -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#FF7F50] to-[#FFD700] rounded-full border-4 border-white dark:border-[#0F172A] z-20 shadow-lg"></div>
              <div
                className={`w-1/2 px-8 ${idx % 2 === 0 ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white mb-4 shadow-sm bg-gradient-to-r ${
                    idx % 2 === 0
                      ? "from-[#A855F7] to-[#DA62C4]"
                      : "from-[#3E7B6C] to-black"
                  }`}
                >
                  {exp.date}
                </div>
                <h3 className="text-xl font-black text-black dark:text-[#F8FAFC]">
                  {exp.title}{" "}
                  <span className="text-[#FF7F50] text-sm font-medium">
                    ({exp.location})
                  </span>
                </h3>
                <p className="mt-3 text-black/60 dark:text-[#F8FAFC]/60 max-w-md inline-block">
                  {exp.description}
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
