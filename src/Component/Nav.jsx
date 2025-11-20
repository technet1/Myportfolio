import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth scroll function
 const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100, // navbar height
      behavior: "smooth"
    });
  }
  setIsMenuOpen(false);
};



  
  return (
    <>
      <nav
        className="bg-black text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-800"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div
              onClick={() => scrollToSection("hero")}
              className="text-xl md:text-2xl font-bold tracking-tight cursor-pointer"
            >
              Abhishek
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 text-base">
              <button onClick={() => scrollToSection("about")} className="hover:text-gray-400 transition">
                About Me
              </button>
              <button onClick={() => scrollToSection("collab")} className="hover:text-gray-400 transition">
                Collab
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-gray-400 transition">
                Projects
              </button>
              <span className="text-gray-600">|</span>
              <button onClick={() => scrollToSection("designs")} className="hover:text-gray-400 transition">
                Designs
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="ml-10 px-6 py-2.5 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button onClick={toggleMenu} className="lg:hidden">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-800 transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}>
          <div className="px-6 md:px-12 lg:px-20 xl:px-32 py-8">
            <div className="flex flex-col space-y-6 text-lg">
              <button onClick={() => scrollToSection("about")} className="text-left hover:text-gray-400 py-2">
                About Me
              </button>
              <button onClick={() => scrollToSection("collab")} className="text-left hover:text-gray-400 py-2">
                Collab
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-left hover:text-gray-400 py-2">
                Projects
              </button>
              <div className="h-px bg-gray-800 my-4" />
              <button onClick={() => scrollToSection("designs")} className="text-left hover:text-gray-400 py-2">
                Designs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-6 w-full max-w-xs mx-auto px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all font-medium text-lg"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer so content isn't hidden under navbar */}
      <div className="pt-12 md:pt-12 lg:pt-12">
        {/* All your sections go here */}
      </div>
    </>
  );
};

export default Nav;