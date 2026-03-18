import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Outclass.io",
      category: "Learning Management System",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      lan: "React JS ,Material UI",
    },
    {
      title: "Three-thirty",
      category: "Scheduling & Instructor Management System",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      lan: "React JS ,Material UI",
    },
    {
      title: "Phytano",
      category: "Greenhouse Management Project – New Zealand",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      lan: "React Typescript",
    },
    {
      title: "HolidaySri",
      category: "Tourism Management system",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      lan: "Vue Js",
    },
    {
      title: "Rajan.ai",
      category: "Portfolio",
      image: "./rajan.ai.png",
      lan: "Vix",
    },
    {
      title: "Handymanlanka",
      category: "Website for Construction company",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      lan: "Wordpress",
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 md:py-32 bg-slate-50/50 dark:bg-[#0B1120] transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-[#F8FAFC] tracking-tighter">
              Recent Works
            </h2>
            <p className="mt-4 text-slate-600 dark:text-[#F8FAFC]/60 max-w-md text-lg">
              A selection of digital experiences I've crafted for clients across
              various industries.
            </p>
          </div>
          <button className="mt-8 md:mt-0 text-xs font-bold border-2 border-slate-900 dark:border-[#F8FAFC] px-10 py-4 hover:bg-slate-900 dark:hover:bg-[#F8FAFC] hover:text-white dark:hover:text-black transition-all tracking-widest rounded-xl">
            VIEW ALL PROJECTS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-lg dark:shadow-none border border-slate-200 dark:border-transparent">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-end backdrop-blur-[2px]">
                  <span className="text-xs font-bold text-[#FF7F50] uppercase tracking-[0.2em] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-black text-white mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
                      {project.lan}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Projects;
