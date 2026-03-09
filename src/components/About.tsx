import React from "react";
import Image from "next/image";

const About = () => {
  const stats = [
    { label: "Years", value: "10+", width: 115, height: 67, align: "center" },
    {
      label: "Designation",
      value: "Sr. UX",
      width: 120,
      height: 67,
      align: "right",
    },
    {
      label: "Delivered Projects",
      value: "50+",
      width: 90,
      height: 67,
      align: "left",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#3E7B6C]/10 dark:bg-[#0B1120] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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
            I'm a Senior UX Designer with 10+ years of experience delivering
            user-centric solutions across 50+ projects, including multiple
            AI-driven initiatives. Recognised with Tech Excellence and
            Outstanding Performer for last two consecutive years, I craft
            meaningful experiences that balance user needs, business goals, and
            intelligent design.
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
                <span className="text-5xl md:text-6xl font-black text-black dark:text-[#F8FAFC] relative z-10 group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </span>
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-[#F8FAFC]/40 font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
