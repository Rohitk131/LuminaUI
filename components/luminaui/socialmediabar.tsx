"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdHomeMax } from "react-icons/md";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";

const SocialMediaBar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Icon data array: contains icon components, names, and URLs
  const iconData = [
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/murtaza-khan-58a44a25a/",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
      url: "https://github.com/MurtazaKhannn",
    },
    {
      icon: <FaXTwitter />,
      name: "Twitter",
      url: "https://x.com/murtazakhan1910?t=RX_qTiCkEGTHTwNGziAgow&s=09",
    },
    {
      icon: <SiLeetcode />,
      name: "Leetcode",
      url: "https://leetcode.com/",
    },
    {
      icon: <MdHomeMax />,
      name: "Home",
      url: "/",
    },
    {
      icon: <WiMoonAltWaxingCrescent2 />,
      name: "Theme",
      url: "#",
      onClick: toggleTheme,
    },
  ];

  return (
    //add fixed bottom-[24px] when you use it 
    <div className=" left-1/2 transform -translate-x-1/2 flex justify-center z-50">
     
      <motion.div
        className="flex items-center justify-center gap-[16px] p-[8px] relative"
        whileHover={{ width: "200px" }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 40,
          duration: 0.5,
        }}
        style={{
          width: "200px",
          height: "70px",
          backgroundColor: "transparent",
          borderRadius: "50% 50% 40% 40%",
          position: "relative",
        }}
      >
        {/* Cloud Fluff (bumps) */}
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute top-0 -left-20 rounded-full w-16 h-16 bg-white opacity-80"
          style={{
            boxShadow: "10px -10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          S
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute top-0 -right-20 rounded-full w-16 h-16 bg-white opacity-80"
          style={{
            boxShadow: "-10px -10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          S
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute bottom-[8px] left-[26px] rounded-full w-20 h-20 bg-white opacity-80"
          style={{
            boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          C
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute bottom-[8px] right-[26px] rounded-full w-20 h-20 bg-white opacity-80"
          style={{
            boxShadow: "-10px 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          A
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute -bottom-[.8rem] right-1/6 rounded-full w-20 h-20 bg-white opacity-80"
          style={{
            boxShadow: "-10px 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          I
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute -top-[.55rem] -right-[24px] rounded-full w-16 h-16 bg-white opacity-80"
          style={{
            boxShadow: "-10px -10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          L
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute -top-[.55rem] -left-[24px] rounded-full w-16 h-16 bg-white opacity-80"
          style={{
            boxShadow: "10px -10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          O
        </div>


        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute top-0 -left-20 rounded-full w-16 h-16 bg-white opacity-80"
          style={{
            boxShadow: "10px -10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute top-0 -right-20 rounded-full w-16 h-16 bg-white opacity-80"
          style={{
            boxShadow: "-10px -10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute bottom-[8px] left-[26px] rounded-full w-20 h-20 bg-white opacity-80"
          style={{
            boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute bottom-[8px] right-[26px] rounded-full w-20 h-20 bg-white opacity-80"
          style={{
            boxShadow: "-10px 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute -bottom-[.8rem] right-1/6 rounded-full w-20 h-20 bg-white opacity-80"
          style={{
            boxShadow: "-10px 10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute -top-[.55rem] -right-[24px] rounded-full w-16 h-16 bg-white opacity-80"
          style={{
            boxShadow: "-10px -10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          
        </div>
        <div
          className="flex items-center justify-center text-black font-bold font-oswald dark:bg-black dark:text-white absolute -top-[.55rem] -left-[24px] rounded-full w-16 h-16 bg-white opacity-80"
          style={{
            boxShadow: "10px -10px 30px rgba(0, 0, 0, 0.15)",
          }}
        >
          
        </div>

        {/* Icons in Circles */}
        {iconData.map((item, index) => (
          <div key={index} className="relative group flex items-center justify-center">
            <motion.div
              className="absolute -top-[40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[200ms] p-[8px] bg-white dark:bg-black text-black dark:text-white text-[12px] rounded-md font-semibold"
              style={{ pointerEvents: "none" }}
            >
              {item.name}
            </motion.div>
            <motion.div
              className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-black dark:bg-white shadow-lg text-center"
              whileHover={{ width: "80px" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <p
                className="dark:text-black text-white"
                onClick={() => (item.onClick ? item.onClick() : window.open(item.url))}
              >
                {item.icon}
              </p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialMediaBar;
