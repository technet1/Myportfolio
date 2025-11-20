import React from "react";
import sun from "../assets/downsun.png";
import exo from "../assets/exo.png";
import obys from "../assets/obys.png";
import movie from "../assets/movie.png";
import golf from "../assets/golf.png";
import game from "../assets/game.png";
import v3 from "../assets/v3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Projects() {
  const slides = [
   {
  title: "Downsun",
  description:
    "A clone of the Sundown Studio website, focusing on replicating the original design and functionality. The project involved creating a pixel-perfect, responsive layout that mirrored the aesthetic and user experience of the original site.",
  image: sun,
  tags: ["HTML", "JavaScript", "CSS"],
  link: "downsun.netlify.app",
},
{
  title: "SIDCUP Family Golf",
  description:
    "A replica of the SIDCUP Family Golf website, designed to match the original layout, animations, and interactions. The project emphasizes pixel-perfect execution, responsive structure, and smooth user flow to recreate the same visual appeal and browsing experience across all screen sizes.",
  image: golf,
  tags: ["HTML", "JavaScript", "CSS"],
  link: "cupfamilygolf.netlify.app",
},
{
  title: "Obys Agency",
  description:
    "A frontend clone of the Obys Agency website, built with close attention to its distinct visual style and transitions. The project focuses on achieving design accuracy, responsive behavior, and smooth interactions that replicate the original website’s creative layout and overall user experience.",
  image: obys,
  tags: ["HTML", "JavaScript", "CSS"],
  link: "https://obysaagency.netlify.app/",
},
{
  title: "Exo Ape",
  description:
    "A high-fidelity clone of the Exo Ape website, closely recreate its immersive design and fluid interface. The project highlights pixel-perfect structure, responsive performance, and interactive elements that preserve the original site’s visual storytelling and motion effects.",
  image: exo,
  tags: ["React", "Tailwind", "Framer Motion"],
  link: "exooape.netlify.app",
},
{
  title: "My Portfolio",
  description:
    "A modern personal portfolio, designed to present my skills, projects, and journey with clarity and style. The layout is fully responsive, visually polished, and structured to deliver a smooth browsing experience across devices while maintaining a professional presentation.",
  image: v3,
  tags: ["React", "Tailwind", "Framer Motion"],
  link: "https://abhushekanand.netlify.app",
},
{
  title: "CineBase.",
  description:
    "A movie-exploration web app, designed for a clean and interactive user experience. The project features dynamic content loading, responsive UI, and smooth interactions, offering users a streamlined way to explore movies, details, and media easily.",
  image: movie,
  tags: ["React", "Tailwind", "Framer Motion", "Redux"],
  link: "https://cinebase2.netlify.app/",
},
{
  title: "Bubble Game",
  description:
    "A simple yet interactive browser-based game. The project focuses on dynamic gameplay, responsive UI, and smooth animations, offering a fun experience while demonstrating DOM manipulation, event handling, and core logic implementation using fundamental web technologies.",
  image: game,
  tags: ["HTML", "JavaScript", "CSS"],
  link: "bubbblegames.netlify.app",
},
  ];

  return (
    <div className="w-full min-h-screen bg-black py-24">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper max-w-6xl mx-auto"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            {/* Full Slide Clickable bana diya */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="bg-zinc-900/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 h-full cursor-pointer hover:border-white/30 transition-all duration-300">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
                  {/* Left – Image */}
                  <div className="flex-shrink-0 w-full md:w-96 lg:w-96">
                    <div className="bg-zinc-700/50 border-2 border-dashed border-zinc-600 rounded-2xl w-full aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Right – Text Content */}
                  <div className="flex-1 text-white flex flex-col justify-between min-h-full py-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 group">
                      {item.title}
                      <span className="ml-3 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                    </h2>

                    <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#006F9C] to-[#0437C2] border border-zinc-500/40 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;