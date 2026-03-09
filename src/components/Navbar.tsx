'use client';

import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
    const navLinks = [
        { name: 'Intro', href: '#intro' },
        { name: 'About me', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact me', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md border-b border-black/10 dark:border-[#F8FAFC]/10 transition-colors">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-2xl font-bold text-black dark:text-[#F8FAFC] tracking-tighter">
                    LAKINDU<span className="text-[#FF7F50]">.</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-black/70 dark:text-[#F8FAFC]/70 hover:text-black dark:hover:text-[#F8FAFC] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3E7B6C] transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <div className="pl-4 border-l border-black/10 dark:border-[#F8FAFC]/10">
                        <ThemeToggle />
                    </div>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button className="p-2 text-black dark:text-[#F8FAFC]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
