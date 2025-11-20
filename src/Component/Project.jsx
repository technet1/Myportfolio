// components/Project.jsx
import React from "react";

// Replace these with your actual website design images
import project1 from "../assets/v1.png";
import project2 from "../assets/v2.png";
import project3 from "../assets/v3.png";
import project4 from "../assets/v4.png";

const Project = () => {
  const projects = [
    {
      img: project1,
      title: "ROLLING CLOTHING",
      desc: "Rolling Clothing is a modern streetwear brand focused on comfort and creativity. I designed a clean, responsive website that reflects its bold, youthful vibe — blending minimal design with smooth user experience to showcase the brand’s unique collection.",
    },
    {
      img: project2,
      title: "Monkey Tail Organics",
      desc: "Monkey Tail Organics is an eco-friendly brand dedicated to promoting sustainable living. I designed a clean, responsive website that mirrors its natural, earthy identity — blending modern aesthetics with smooth user experience to highlight the brand’s organic products.",
    },
    {
      img: project3,
      title: "My Portfolio",
      desc: "My portfolio is a curated showcase of my journey in design and development. I crafted a clean, responsive website that reflects my creative identity — blending minimal layouts with smooth interactions to present my projects, skills, and experiences in a bold, engaging way.",
    },
    {
      img: project4,
      title: "SS RECRUITMENT AGENCY",
      desc: "S.S. Recruitment Agency is a Canada-based firm connecting skilled professionals with global opportunities. I designed the logo, letterhead, visiting card, and prospectus — blending modern design with a professional identity to reflect the brand’s trust and credibility.",
    },
  ];

  const handleBehanceClick = () => {
    window.open("https://www.behance.net/abhushekanand", "_blank");
  };

  return (
    <section id="projects" className="bg-black text-white py-16 lg:hidden">
      {/* Only visible on mobile & tablet */}
      <div className="px-6 md:px-12">
        

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800"
            >
              {/* Full Width Image */}
              <div className="w-full h-64 md:h-80">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {project.title}
                </h3>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8">
                  {project.desc}
                  <br />
                  <span className="block mt-2 text-zinc-400">
                    Designed with Figma 
                  </span>
                </p>

                {/* Button */}
                <button
                  onClick={handleBehanceClick}
                  className="w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 text-lg"
                >
                  Check it Out
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;