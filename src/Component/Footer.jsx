import React from "react";
import img5 from "../assets/5.png";

const Footer = () => {
  // Apne real links yahan daal dena
  const socialLinks = {
    Instagram: "https://www.instagram.com/technet____1502/",
    "Twitter (X)": "https://x.com/AbhiAn007?t=jBfIgeZa3ieGR9pqNhTDtQ&s=09",
    LinkedIn: "https://www.linkedin.com/in/abhishek-anand1502/",
    Behance: "https://www.behance.net/abhushekanand",        // Yeh sahi hai
    GitHub: "https://github.com/technet1",
  };

  return (
    <footer className="w-full bg-black text-white overflow-hidden">
      {/* Top Section: Let's Work Together + Image */}
      <div className="px-6 pt-16 pb-20 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          <h1 className="text-[12vw] xs:text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[19vh] font-semibold leading-none">
            Let's Work
            <span className="block mt-[-2vw] sm:mt-[-1.5vw] lg:mt-[-2vh]">Together.</span>
          </h1>

          <div className="w-full lg:w-1/2 max-w-2xl">
            <img
              src={img5}
              alt="Design preview"
              className="w-full h-auto rounded-2xl object-cover shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center px-6">
        <hr className="w-full max-w-md border-t border-gray-200" />
      </div>

      {/* Middle Section: Links + Contact */}
      <div className="px-6 py-16 md:px-12 lg:px-20 xl:px-32 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 text-left">
        {/* Social Links */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Social</h3>
          <ul className="space-y-3 text-lg md:text-xl text-zinc-400 font-medium">
            {Object.entries(socialLinks).map(([platform, url]) => (
              <li key={platform}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition inline-block"
                >
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Email */}
        <div className="flex flex-col justify-between">
          <div>
            <a
              href="mailto:abhi.an1502@gmail.com"
              className="text-xl md:text-2xl font-medium text-zinc-400 hover:text-white transition"
            >
              abhi.an1502@gmail.com
            </a>
          </div>
        </div>

        {/* Phone + Back to Top */}
        <div className="flex flex-col justify-between items-start">
          <a
            href="tel:+918274947739"
            className="text-xl md:text-2xl font-medium text-zinc-400 hover:text-white transition"
          >
            +91 8274947739
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition text-sm md:text-base"
          >
            Back to Top
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-6 py-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base text-zinc-500">
          <p>© 2025 Abhishek. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <p className="hover:text-white cursor-pointer transition">Terms of Service</p>
            <p className="hover:text-white cursor-pointer transition">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;