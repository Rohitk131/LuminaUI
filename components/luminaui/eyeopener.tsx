"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EyeOpener = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="upper h-full w-full flex items-center justify-center p-4">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <div className="eyes p-10 rounded-md z-10 flex flex-col items-center justify-center w-full max-w-screen-lg">
          <div className="flex items-center justify-center gap-6 w-full h-full">
            {/* Left Eye */}
            <motion.div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="flex items-center justify-center w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] aspect-[1/1] bg-zinc-200 rounded-full"
            >
              <div className="flex items-center w-[13vw] h-[13vw] bg-black rounded-full relative overflow-hidden">
                <div className="flex items-center bg-white w-[5vw] sm:w-[4vw] md:w-[3vw] lg:w-[2vw] h-[5vw] sm:h-[4vw] md:h-[3vw] lg:h-[2vw] rounded-full">
                  <motion.div className="bg-zinc-700 w-[4vw] sm:w-[3vw] md:w-[2vw] lg:w-[1.5vw] h-[4vw] sm:h-[3vw] md:h-[2vw] lg:h-[1.5vw] rounded-full"></motion.div>
                </div>
              </div>
            </motion.div>
            {/* Right Eye */}
            <motion.div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="flex items-center justify-center w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] aspect-[1/1] bg-zinc-200 rounded-full"
            >
              <div className="flex items-center w-[13vw] h-[13vw] bg-black rounded-full relative overflow-hidden">
                <div className="flex items-center bg-white w-[5vw] sm:w-[4vw] md:w-[3vw] lg:w-[2vw] h-[5vw] sm:h-[4vw] md:h-[3vw] lg:h-[2vw] rounded-full">
                  <motion.div className="bg-zinc-700 w-[4vw] sm:w-[3vw] md:w-[2vw] lg:w-[1.5vw] h-[4vw] sm:h-[3vw] md:h-[2vw] lg:h-[1.5vw] rounded-full"></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeOpener;
