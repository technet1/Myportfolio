import React, { useEffect, useState } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";

const BentoGrid = () => {


const images = [img1, img2, img3, img4, img5, img6];
  const socialIcons = [
    {
      name: "Behance",
      icon: "https://img.icons8.com/?size=100&id=13655&format=png&color=000000",
      link: "https://www.behance.net/abhushekanand",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
      link: "https://github.com/technet1",
    },
    {
      name: "LinkedIn",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      link: "https://www.linkedin.com/in/abhishek-anand1502/",
    },
    {
      name: "Instagram",
      icon: "https://img.icons8.com/?size=100&id=nj0Uj45LGUYh&format=png&color=000000",
      link: "https://www.instagram.com/technet____1502/",
    },
    {
      name: "X",
      icon: "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000",
      link: "https://x.com/AbhiAn007?t=jBfIgeZa3ieGR9pqNhTDtQ&s=09",
    },
  ];

  const toolIcons = [
    {
      name: "Photoshop",
      icon: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    },
    {
      name: "Figma",
      icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
    {
      name: "Illustrator",
      icon: "https://img.icons8.com/?size=100&id=13631&format=png&color=000000",
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/?size=100&id=6eTRpgF0TFTj&format=png&color=000000",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
    },
  ];
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 1 second

    return () => clearInterval(slide);
  }, []);

  return (
   <div className="min-h-screen hidden lg:block bg-black flex items-center justify-center px-8">
  <div className="grid grid-cols-[350px_1fr] gap-10 w-full max-w-5xl mx-auto items-center">

    {/* LEFT PANEL */}
    <div className="p-4 rounded-xl bg-gray-800 flex items-center justify-center h-[400px]">
      <img
        key={index}
        src={images[index]}
        alt="slide"
        className="w-full h-full object-cover rounded-xl transition-opacity duration-500"
      />
    </div>

    {/* RIGHT PANEL */}
    <div className="space-y-6">
      <div className="flex gap-4 w-full">

        {/* Social + Location */}
        <div className="space-y-6 w-1/2">
          <div className="flex space-x-6">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href={icon.link}
                className="w-20 h-20 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700 transition"
              >
                <img src={icon.icon} alt={icon.name} className="w-10 h-10" />
              </a>
            ))}
          </div>

          <div className="bg-gray-800 rounded-md px-8 py-10">
            <p className="text-sm text-gray-400">Born In</p>
            <p className="text-3xl font-semibold text-white">
              Gaya Ji, Bihar
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="w-1/3 bg-gray-800 rounded-md p-8 flex flex-col justify-center text-white text-center">
          <h2 className="text-2xl font-bold leading-tight">
            Wanna Work <br /> Together?
          </h2>
          <p className="text-sm text-gray-400 mt-3 mb-6">
            My Resume Is One Click Away
          </p>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1yUhzDtk_UzUzvUd1uFak_yNp-3Z6N5re/view?usp=drive_link",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="bg-white rounded px-5 py-3 text-black text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            Download
          </button>
        </div>
      </div>

      {/* Tools */}
      <div>
        <p className="text-sm bg-gray-700 rounded-t-md text-gray-300 text-center w-[86%] py-2">
          Hands-On Tools
        </p>
        <div className="bg-gray-800 rounded-b-md w-[86%] flex space-x-12 py-4 px-6">
          {toolIcons.map((tool) => (
            <div
              key={tool.name}
              className="bg-gray-700 w-16 h-16 rounded-md flex items-center justify-center"
            >
              <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
</div>

  );
};

export default BentoGrid;
