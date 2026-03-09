import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#3E7B6C]/10  dark:bg-[#0B1120] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-black dark:text-[#F8FAFC]">
                        Let's talk.
                    </h2>
                    <p className="mt-6 text-black/60 dark:text-[#F8FAFC]/60 text-lg">
                        Have a project in mind? Looking for a long-term design partner? Or just want to say hi?
                        I'm always open to discussing new opportunities and creative ideas.
                    </p>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-50 dark:bg-[#1E293B] rounded-full flex items-center justify-center shadow-sm text-[#FF7F50] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <span className="text-lg font-medium text-black dark:text-[#F8FAFC]">lakindu10@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-50 dark:bg-[#1E293B] rounded-full flex items-center justify-center shadow-sm text-[#3E7B6C] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <span className="text-lg font-medium text-black dark:text-[#F8FAFC]">+94 77 123 4567</span>
                        </div>
                    </div>
                </div>

                <form className="bg-white dark:bg-[#1E293B] p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-black/40 dark:text-[#F8FAFC]/40 uppercase tracking-widest mb-2">FullName</label>
                            <input type="text" className="w-full bg-gray-50 dark:bg-[#0F172A] border-none rounded-xl px-6 py-4 outline-none focus:ring-2 ring-[#3E7B6C]/20 transition-all font-medium text-black dark:text-[#F8FAFC]" placeholder="Lakindu Perera" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-black/40 dark:text-[#F8FAFC]/40 uppercase tracking-widest mb-2">Email Address</label>
                            <input type="email" className="w-full bg-gray-50 dark:bg-[#0F172A] border-none rounded-xl px-6 py-4 outline-none focus:ring-2 ring-[#3E7B6C]/20 transition-all font-medium text-black dark:text-[#F8FAFC]" placeholder="hello@domain.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-black/40 dark:text-[#F8FAFC]/40 uppercase tracking-widest mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-gray-50 dark:bg-[#0F172A] border-none rounded-xl px-6 py-4 outline-none focus:ring-2 ring-[#3E7B6C]/20 transition-all font-medium resize-none text-black dark:text-[#F8FAFC]" placeholder="I have a project Idea for you..."></textarea>
                        </div>
                        <button className="bg-black dark:bg-[#3E7B6C] text-white font-bold py-5 rounded-xl hover:bg-[#3E7B6C] dark:hover:bg-black transition-colors shadow-lg shadow-black/10">
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
