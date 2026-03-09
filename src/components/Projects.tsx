import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Fintech Dashboard',
            category: 'UI/UX Design',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        },
        {
            title: 'AI Portfolio',
            category: 'Development',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
        },
        {
            title: 'Creative Agency',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        },
        {
            title: 'Ecommerce App',
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop',
        }
    ];

    return (
        <section id="projects" className="py-24 bg-[#3E7B6C]/10  dark:bg-[#0B1120] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-black dark:text-[#F8FAFC]">
                            Recent Works
                        </h2>
                        <p className="mt-4 text-black/60 dark:text-[#F8FAFC]/60 max-w-md">
                            A selection of digital experiences I've crafted for clients across various industries.
                        </p>
                    </div>
                    <button className="mt-8 md:mt-0 text-sm font-bold border-2 border-black dark:border-[#F8FAFC] px-8 py-3 hover:bg-black dark:hover:bg-[#F8FAFC] hover:text-white dark:hover:text-black transition-all">
                        VIEW ALL PROJECTS
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 dark:from-[#0F172A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                                    <span className="text-xs font-bold text-[#FF7F50] uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        {project.title}
                                    </h3>
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
