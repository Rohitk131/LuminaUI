import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const FloatingIcon = ({ src, x, y, rotate, delay }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ x, y }}
      animate={{
        y: y - 10,
        rotate: rotate,
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        },
        rotate: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-lg -z-10" />
        {/* Icon */}
        <div className="relative z-10 p-2 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl border border-blue-500/30 backdrop-blur-sm">
          <Image 
            src={src}
            alt="Floating icon"
            width={24}
            height={24}
            className="w-10 h-10 object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const FloatingIcons = () => {
  const icons = [
    { src: "/react.png", x: "-80px", y: "100px", rotate: -15, delay: 0 },
    { src: "/tailwind.png", x: "900px", y: "100px", rotate: 15, delay: 0.3 },
    { src: "/gsap.png", x: "-0px", y: "300px", rotate: -20, delay: 0.6 },
    { src: "/framer.png", x: "820px", y: "300px", rotate: 20, delay: 0.9 },
  ];

  return (
    <div className="relative w-full">
      {icons.map((props, index) => (
        <FloatingIcon key={index} {...props} />
      ))}
    </div>
  );
};

export default FloatingIcons;