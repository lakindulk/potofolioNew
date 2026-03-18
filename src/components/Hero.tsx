"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { ArrowDownRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="intro"
      className="pt-32 pb-16 md:pt-40 md:pb-20 lg:py-28 bg-white dark:bg-[#0F172A] transition-colors duration-300 relative overflow-hidden flex items-center min-h-[90vh] lg:min-h-screen"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full -mr-64 -mt-64 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px] rounded-full -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 w-fit mb-6 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF7F50] animate-ping"></span>
              <span className="text-md font-bold tracking-widest text-slate-500 dark:text-[#F8FAFC]/60 uppercase">HELLO, I'M LAKINDU</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-[#F8FAFC] leading-[1.1] mb-8 tracking-tighter">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E7B6C] via-[#3B82F6] to-purple-600">
                Digital Soul.
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="md:hidden relative w-full h-[380px] mb-5 flex "
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3E7B6C]/20 dark:bg-[#3E7B6C]/10 blur-3xl rounded-full"></div>
              <div className="relative w-[95%] h-full bg-slate-50 dark:bg-white/5 rounded-[1.5rem] border border-slate-200/60 dark:border-white/10 shadow-xl overflow-hidden group">
                <div className="absolute bottom-4 right-4 z-30 bg-white/90 dark:bg-[#1E293B]/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-slate-100 dark:border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3E7B6C] animate-pulse"></span>
                  <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">SOLUTIONS ARCHITECT</span>
                </div>
                <Image
                  src="/hero2.webp"
                  alt="Lakindu Mobile"
                  width={600}
                  height={600}
                  className="object-cover object-top drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#3B82F6] rounded-full -z-10 opacity-10 blur-xl"></div>
            </motion.div>

            <div className="flex flex-col gap-2">
              <div className="h-10 md:h-16">
                <TypeAnimation
                  className="text-lg md:text-2xl font-bold text-slate-700 dark:text-[#F8FAFC]/80"
                  sequence={[
                    1000,
                    "I build high-performance web apps 🖥️",
                    1000,
                    "I craft seamless mobile experiences 📱",
                    1000,
                    "I engineer scalable architectures 🏗️",
                    1000,
                    "I am a Software Engineer 🧑‍💻",
                    1000,
                    "I love photography 📷",
                    1000,
                    "I am a traveller 🚶‍♂️",
                    1000,
                    "In free days I explore new places 🌍",
                  ]}
                  wrapper="span"
                  speed={30}
                  deletionSpeed={40}
                  repeat={Infinity}
                />
              </div>

              <p className="text-md text-slate-600 dark:text-[#F8FAFC]/60 max-w-lg leading-relaxed mb-4">
                Full-stack developer focused on creating smooth, high-impact digital experiences that bridge the gap between design and functionality.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-3 bg-slate-900 dark:bg-[#3E7B6C] text-white px-6 py-3 rounded-2xl font-black transition-all hover:scale-105 shadow-xl shadow-slate-900/10 dark:shadow-none"
                >
                  VIEW MY WORK
                  <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </a>

                <a
                  href="mailto:lakindulk9@gmail.com"
                  className="group flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-[#F8FAFC] hover:text-[#3E7B6C] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#3E7B6C]/10 transition-colors border border-slate-200 dark:border-transparent">
                    <Mail className="w-5 h-5" />
                  </div>
                  HIRE ME
                </a>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-end gap-2">
                <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-[#F8FAFC] leading-none">3+</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-[#F8FAFC]/40 mb-1">
                  YEARS OF<br />EXPERIENCE
                </span>
              </div>
              <div className="w-px h-10 bg-slate-200 dark:bg-white/10"></div>
              <div className="flex items-end gap-2">
                <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-[#F8FAFC] leading-none">15+</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-[#F8FAFC]/40 mb-1">
                  PROJECTS<br />COMPLETED
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:flex relative justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[450px] lg:h-[600px] xl:w-[500px] xl:h-[650px]">
              {/* Floating decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-2xl animate-bounce duration-[3000ms]"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

              <Image
                src="/hero2.webp"
                alt="Lakindu"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] relative z-20"
                priority
              />

              <div className="absolute bottom-10 right-0 md:-right-12 z-30 bg-white dark:bg-[#1E293B] p-6 rounded-[2rem] shadow-xl dark:shadow-2xl border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center w-36 h-36 md:w-44 md:h-44 rotate-12 hover:rotate-0 transition-all cursor-default">
                <div className="text-center">
                  <span className="text-2xl md:text-3xl block">🚀</span>
                  <div className="text-base md:text-lg font-black text-slate-900 dark:text-[#F8FAFC] leading-tight mt-2 italic px-2">
                    Solutions Architect
                  </div>
                  <div className="text-[10px] mt-2 text-[#3E7B6C] font-black tracking-widest uppercase">
                    EST. 2022
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="hidden lg:block absolute right-5 top-1/2 -translate-y-1/2 vertical-text text-slate-300 text-black/50  dark:text-white/20 font-black tracking-[0.5em] text-sm uppercase pointer-events-none"
        style={{ writingMode: "vertical-rl" }}
      >
        LAKINDU KAVISHKA • SOFTWARE ENGINEER • PHOTOGRAPHER • EXPLORER • TRAVELLER
      </div>
    </section>

  );
};

export default Hero;

