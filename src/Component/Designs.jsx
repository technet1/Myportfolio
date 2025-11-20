// src/components/Designs.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";   // ← Navigation hata diya

import "swiper/css";
import "swiper/css/pagination";
// "swiper/css/navigation" bhi hata diya

import design1 from "../assets/1a.png";
import design2 from "../assets/2.png";
import design3 from "../assets/3.png";
import design4 from "../assets/4.png";
import design5 from "../assets/5a.png";
import design6 from "../assets/6.png";
import design7 from "../assets/7.png";
import design8 from "../assets/8.png";
import design9 from "../assets/9.jpg";
import design10 from "../assets/10.jpg";
import design11 from "../assets/11.png";
import design12 from "../assets/12.png";
import design13 from "../assets/13.png";
import design14 from "../assets/14.png";

const Designs = () => {
  const designs = [
    design1, design2, design3, design4,
    design5, design6, design7, design8,
    design9, design10, design11, design12,
    design13, design14,
  ];

  return (
    <section id="designs" className="bg-black py-20 lg:hidden">
      <div className="px-6 md:px-12">
        

        <Swiper
          modules={[Autoplay, Pagination]}   // ← Navigation removed
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,           // ← Yeh add kiya → dots chhote bade honge, premium lagega
          }}
          // navigation={true} ← YE LINE PURI DELETE KAR DI
          breakpoints={{
            640: { slidesPerView: 1.3, spaceBetween: 20 },
            768: { slidesPerView: 1.8, spaceBetween: 30 },
          }}
          className="mySwiper pb-12" // thoda neeche space dots ke liye
        >
          {designs.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <img
                  src={image}
                  alt={`Design ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <a
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="View full design"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Designs;