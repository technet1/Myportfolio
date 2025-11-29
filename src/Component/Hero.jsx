import React from "react";
import { motion } from "framer-motion";
import dp from "../assets/dp.png";
import img5 from "../assets/5.png";

const Hero = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Top Section: Profile + Intro */}
      <div className="px-6 py-16 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Profile Image - Animated Entry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="shrink-0"
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl hover:ring-white/40 transition-all duration-500">
              <img
                src={dp}
                alt="Abhishek"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Intro Text - Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left flex-1"
          >
            <motion.p
              className="text-lg sm:text-xl md:text-2xl leading-relaxed font-light text-zinc-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
            >
              {["Hey, I’m ", <strong className="font-semibold text-white"> Abhishek</strong>, " — a ", 
               <strong className="font-semibold text-white">Frontend Developer, UI & Graphic Designer</strong>, 
               " creating brands,", <br className="hidden sm:block" key="br1" />, 
               "interfaces, and experiences that blend creativity with functionality.", 
               <br className="hidden sm:block" key="br2" />, 
               "I design with purpose, emotion, and clarity."
              ].map((text, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="inline-block"
                >
                  {text}{" "}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Vector Image - Parallax + Scale Effect */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-full px-6 md:px-12 lg:px-20 xl:px-32 my-12 md:my-20"
      >
        <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <motion.img
            src={img5}
            alt="Design artwork"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 8 }}
          />
        </div>
      </motion.div>

      {/* Big Title - Epic Text Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="px-6 md:px-12 lg:px-20 xl:px-32 pb-20 md:pb-32"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10vw] font-black leading-none tracking-tight">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="inline-block"
          >
            Website{" "}
          </motion.span>
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-[#747474] inline-block"
          >
            and
          </motion.span>
          <br />
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="inline-block"
          >
            UI Designer
          </motion.span>
        </h1>
      </motion.div>
    </div>
  );
};

export default Hero;