import React from "react";
import dp from "../assets/dp.jpeg";
import vector from "../assets/v.png";
import img5 from "../assets/5.png";

const Hero = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Top Section: Profile + Intro */}
      <div className="px-6 py-16 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Profile Image */}
          <div className="shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl">
              <img
                src={dp}
                alt="Abhishek"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="text-center md:text-left flex-1">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-zinc-200">
              Hey, I’m <strong className="font-semibold text-white">Abhishek</strong> — a{" "}
              <strong className="font-semibold text-white">
                Frontend Developer, UI & Graphic Designer
              </strong>{" "}
              creating brands,
              <br className="hidden sm:block" />
              interfaces, and experiences that blend creativity with functionality.
              <br className="hidden sm:block" />
              I design with purpose, emotion, and clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Vector Image */}
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20 xl:px-32 my-12 md:my-20">
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={img5}
            alt="Design artwork"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Big Title */}
      <div
        className="px-6 md:px-12 lg:px-20 xl:px-32 pb-20 md:pb-32"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10vw] font-black leading-none tracking-tight">
          Website{" "}
          <span className="text-[#747474] inline-block">and</span>
          <br />
          UI Designer
        </h1>
      </div>
    </div>
  );
};

export default Hero;