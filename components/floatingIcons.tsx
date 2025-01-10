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
      style={{ left: x, top: y }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-blue-400 blur-xl -z-10" />
        {/* Icon */}
        <div className="relative z-10 rounded-xl backdrop-blur-sm">
          <Image 
            src={src}
            alt="Floating icon"
            width={36} 
            height={36}
            className="w-9 h-9 object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const FloatingIcons = () => {
    const icons = [
        { src: "/react.png", x: 30, y: 50, rotate: -15, delay: 0 },
        { src: "/tailwind.png", x: 400, y: 50, rotate: 15, delay: 0.3 },
        { src: "/gsap.png", x: 0, y: 170, rotate: -20, delay: 0.6 },
        { src: "/framer.png", x: 430, y: 170, rotate: 20, delay: 0.9 },
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