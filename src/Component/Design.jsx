import React, { useState } from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";

const imagesArray = [img1, img2, img3,img4,img5];

const Design = () => {
  const [trailImages, setTrailImages] = useState([]);

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const randomImg = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    const id = Date.now() + Math.random();

    const offsetX = Math.random() * 40 - 20; // random left-right
    const offsetY = Math.random() * 40 - 20; // random up-down

    const newImage = {
      id,
      src: randomImg,
      x: x + offsetX,
      y: y + offsetY,
    };

    setTrailImages((prev) => [...prev, newImage]);

   // image remove
    setTimeout(() => {
      setTrailImages((prev) => prev.filter((img) => img.id !== id));
    }, 3000);
  };

  return (
    <div
      className="w-full h-full hidden lg:block bg-black p-24 flex items-end justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <h1 className="text-[50vh] font-bold text-zinc-800 text-white/4 pointer-events-none">
        Designs
      </h1>

      {/* Floating Images */}
      {trailImages.map((img) => (
        <img
  key={img.id}
  src={img.src}
  className="w-64 h-64 object-cover rounded-2xl absolute pointer-events-none shadow-2xl border border-white/10 fadeImage"
  style={{
    top: img.y,
    left: img.x,
    transform: `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`,
  }}
/>
      ))}

      {/* Fade-out animation */}
      <style>{`
        .fadeImage {
          animation: fadeOut 2s forwards;
        }
        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
    </div>
  );
};

export default Design;
