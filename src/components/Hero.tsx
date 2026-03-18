"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="intro"
      className="min-h-screen pt-20 flex items-center bg-white dark:bg-[#0F172A] overflow-hidden relative transition-colors duration-300"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full max-w-4xl opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-[#3E7B6C]"
        >
          <path
            d="M100 300C200 150 400 150 500 300C600 450 700 450 800 300"
            stroke="currentColor"
            strokeWidth="100"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 sm:gap-12 items-center relative z-10">
        <div className="order-1">
          <h1 className="text-5xl md:text-8xl font-black text-black dark:text-[#F8FAFC] leading-tight mb-6">
            <span className="text-3xl md:text-4xl">HEY THERE,</span>
            <br />
            <span>
              I'M{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-[#F8FAFC] to-[#3E7B6C]">
                LAKINDU
              </span>
            </span>
          </h1>

          <div className="flex flex-col sm:gap-6">
            <TypeAnimation
              className="text-sm sm:text-base md:text-lg font-semibold"
              sequence={[
                1000,
                "I craft beautiful UIs 💡",
                1000,
                "I build scalable frontends 🖥️",
                1000,
                "I design user experiences 🎨",
                1000,
                "I engineer digital products 🚀",
                1000,
                "I am a Software Engineer 🧑‍💻",
                1000,
                "I am a UI/UX Developer ✨",
                1000,
                "I am also a Photographer 📷",
              ]}
              wrapper="span"
              speed={30}
              deletionSpeed={40}
              repeat={Infinity}
            />
            <a
              href="mailto:lakindulk9@gmail.com"
              className="text-[#FF7F50] font-semibold text-lg hover:underline underline-offset-4"
            >
              lakindulk9@gmail.com
            </a>

            <div className="flex items-end sm:gap-4 mt-4 sm:mt-8">
              <span className="text-5xl sm:text-7xl font-bold text-black dark:text-[#F8FAFC] leading-none">
                3+
              </span>
              <div className="text-xs uppercase tracking-widest text-black/60 dark:text-[#F8FAFC]/60 pb-1">
                YEARS
                <br />
                EXPERIENCE
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 relative flex justify-center">
          <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px]">
            <Image
              src="/hero2.webp"
              alt="Lakindu"
              fill
              className="object-contain drop-shadow-2xl mt-10"
              priority
            />

            <div className="absolute bottom-10 right-0 md:-right-10 bg-white dark:bg-[#1E293B] p-4 rounded-full shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rotate-12 hover:rotate-0 transition-all">
              <div className="text-lg font-black text-black dark:text-[#F8FAFC] text-center leading-none">
                Frontend
                <br />
                Developer
              </div>
              <div className="text-[12px] mt-2 text-[#3E7B6C] font-bold">
                EST. 2022
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 vertical-text text-black/20 dark:text-[#F8FAFC]/20 font-medium tracking-widest text-sm uppercase"
        style={{ writingMode: "vertical-rl" }}
      >
        I give life to designs and turn ideas into interactive experiences.
      </div>
    </section>
  );
};

export default Hero;
