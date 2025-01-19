"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const DynamicGradients: React.FC = () => {
  const [gradientAngle, setGradientAngle] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    controls.start({
      background: [
        `linear-gradient(${gradientAngle}deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`,
        `linear-gradient(${gradientAngle}deg, rgba(252,70,107,1) 0%, rgba(63,94,251,1) 100%)`,
        `linear-gradient(${gradientAngle}deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`,
      ],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls, gradientAngle]);

  return (
    <motion.div
      animate={controls}
      className="h-96 w-screen p-8 flex flex-col items-center justify-center space-y-8"
    >
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-300">
        Dynamic Gradient
      </h1>
    </motion.div>
  );
};

export default DynamicGradients;
