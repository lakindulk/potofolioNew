import React from 'react';

const Footer = () => {
    const navLinks = [
        { name: 'Intro', href: '#intro' },
        { name: 'About me', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact me', href: '#contact' },
    ];

    return (
        <footer className="bg-white dark:bg-[#0B1120] py-16 border-t border-gray-100 dark:border-gray-800 transition-colors">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="text-3xl font-bold text-black dark:text-[#F8FAFC] mb-12 tracking-tighter">
                    LAKINDU<span className="text-[#FF7F50]">.</span>
                </div>

                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-black/40 dark:text-[#F8FAFC]/40 hover:text-black dark:hover:text-[#F8FAFC] transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex gap-8 mb-12">
                    {/* Social Icons (Placeholders) */}
                    {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map(social => (
                        <a key={social} href="#" className="text-black/20 dark:text-[#F8FAFC]/20 hover:text-[#3E7B6C] transition-colors font-bold text-xs uppercase tracking-widest">
                            {social}
                        </a>
                    ))}
                </div>

                <div className="text-xs font-bold text-black/20 dark:text-[#F8FAFC]/20 uppercase tracking-[0.3em]">
                    © 2026 LAKINDU — ALL RIGHTS RESERVED
                </div>
            </div>
        </footer>
    );
};

export default Footer;
