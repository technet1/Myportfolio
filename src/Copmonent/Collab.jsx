import React, { useState } from "react";
import { motion } from "framer-motion";
import Product from "./Product";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import v4 from "../assets/v4.png";
import { link } from "motion/react-client";

const Collab = () => {
  var products = [
    {
      title: "ROLLING CLOTHING",
      description:
        "Rolling Clothing is a modern streetwear brand focused on comfort and creativity. I designed a clean, responsive website that reflects its bold, youthful vibe — blending minimal design with smooth user experience to showcase the brand’s unique collection.",
      link:"https://www.behance.net/gallery/230659713/Rolling-Unisex-Made-with-Love",
      
    },
    {
      title: "Monkey Tail Organics",
      description:
        "Monkey Tail Organics is an eco-friendly brand dedicated to promoting sustainable living. I designed a clean, responsive website that mirrors its natural, earthy identity — blending modern aesthetics with smooth user experience to highlight the brand’s organic products.",
      link:"https://www.behance.net/abhushekanand",
      
    },
    {
      title: "My Portfolio",
      description:
        "My portfolio is a curated showcase of my journey in design and development. I crafted a clean, responsive website that reflects my creative identity — blending minimal layouts with smooth interactions to present my projects, skills, and experiences in a bold, engaging way.",
      link: "https://www.behance.net/abhushekanand",
      
    },
    {
      title: "SS RECRUITMENT AGENCY",
      description:
        "S.S. Recruitment Agency is a Canada-based firm connecting skilled professionals with global opportunities. I designed the logo, letterhead, visiting card, and prospectus — blending modern design with a professional identity to reflect the brand’s trust and credibility.",
      link: "https://www.behance.net/abhushekanand",
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className=" hidden lg:block bg-black relative ">
      {products.map((val, index) => (
        <Product val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" window absolute w-[32rem] left-[44%]  h-[23rem] rounded-lg bg-white overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full "
          >
            <img className="w-full h-full object-cover" src={v1} alt="" />
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <img className="w-full h-full object-cover" src={v2} alt="" />
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <img className="w-full h-full object-cover" src={v3} alt="" />
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <img className="w-full h-full object-cover" src={v4} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Collab;
