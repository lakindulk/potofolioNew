import React from "react";

const Experience = () => {
  const experiences = [
    {
      date: "January 2024",
      title: "Lead Product Designer",
      location: "Colombo",
      description:
        "Leading the design system team and overseeing major product redesigns for international clients.",
    },
    {
      date: "March 2021",
      title: "Senior UX Designer",
      location: "Remote",
      description:
        "Focused on user research and prototyping for complex SaaS platforms in the fintech space.",
    },
    {
      date: "February 2018",
      title: "UI Designer",
      location: "London",
      description:
        "Collaborating with cross-functional teams to deliver high-fidelity interfaces and interactive prototypes.",
    },
    {
      date: "January 2016",
      title: "Journey Start",
      location: "Colombo",
      description:
        "Started my career as a junior designer, learning the fundamentals of visual communication and UX.",
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
              className={`relative mb-16 flex items-start ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
            >
              <div className="absolute left-1/2 top-2 -translate-x-1/2 w-5 h-5 bg-gradient-to-tr from-[#FF7F50] to-[#FFD700] rounded-full border-4 border-white dark:border-[#0F172A] z-20 shadow-lg"></div>
              <div
                className={`w-1/2 px-8 ${idx % 2 === 0 ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold text-white mb-4 shadow-sm bg-gradient-to-r ${idx % 2 === 0
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
