"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface DynamicGradientsProps {
  gradientColors: string[];
}

const DynamicGradients: React.FC<DynamicGradientsProps> = ({
  gradientColors,
}) => {
  const [gradientAngle, setGradientAngle] = useState(0); // Dynamic angle for gradient
  const controls = useAnimation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientAngle((prevAngle) => (prevAngle + 1) % 360);
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    controls.start({
      background: `linear-gradient(${gradientAngle}deg, ${gradientColors.join(
        ", "
      )})`,
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls, gradientColors, gradientAngle]);

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
