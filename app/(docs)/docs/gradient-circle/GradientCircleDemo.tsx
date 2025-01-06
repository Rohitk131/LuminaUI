"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GradientCircleProps {
  size?: string;
  gradientColors?: string[];
  logoSrc: string;
}

const GradientCircle = ({
  size = "200px",
  gradientColors = ["#FF0080", "#7928CA", "#00FFFF"],
  logoSrc,
}: GradientCircleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Constants for orbit sizing
  const INNER_ORBIT = 80;  // Smallest orbit
  const ORBIT_GAP = 45;    // Gap between orbits

  // Create three orbits with equal spacing
  const orbits = Array.from({ length: 3 }).map((_, index) => {
    const orbitSize = INNER_ORBIT + (index * ORBIT_GAP);

    return (
      <motion.div
        key={`orbit-${index}`}
        className="absolute rounded-full border border-white/20"
        style={{
          width: `${orbitSize}%`,
          height: `${orbitSize}%`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
        }}
      />
    );
  });

  // Configure each child circle's orbit
  const childOrbitConfigs = [
    {
      radius: (INNER_ORBIT + ORBIT_GAP),         // First orbit radius
      startAngle: -Math.PI,        // Start at bottom
      orbitIndex: 0                    // Inner orbit
    },
    {
      radius: (INNER_ORBIT + ORBIT_GAP*2.5),    // Second orbit radius
      startAngle: -Math.PI / 6,                 // Slightly right of top
      orbitIndex: 1                             // Middle orbit
    },
    {
      radius: (INNER_ORBIT + ORBIT_GAP * 4), // Third orbit radius
      startAngle: Math.PI / 3,                   // Upper right
      orbitIndex: 2                              // Outer orbit
    }
  ];

  const childCircles = childOrbitConfigs.map((config, index) => {
    return (
      <AnimatePresence key={`child-${index}`}>
        {isHovered && (
          <motion.div
            className="absolute"
            style={{
              width: "16%",
              height: "16%",
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <motion.div
              className="w-full h-full"
              initial={{
                x: Math.cos(config.startAngle) * config.radius,
                y: Math.sin(config.startAngle) * config.radius,
              }}
              animate={{
                x: Array.from({ length: 360 }).map(
                  (_, i) =>
                    Math.cos(config.startAngle + (i / 360) * Math.PI * 2) *
                    config.radius
                ),
                y: Array.from({ length: 360 }).map(
                  (_, i) =>
                    Math.sin(config.startAngle + (i / 360) * Math.PI * 2) *
                    config.radius
                ),
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle at center, ${gradientColors[index]}, ${
                    gradientColors[(index + 1) % gradientColors.length]
                  })`,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                  aspectRatio: "1",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div className="w-full h-full flex items-center justify-center">
                  <motion.img
                    src={logoSrc}
                    alt="Logo"
                    className="w-3/4 h-3/4 object-contain"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  });

  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {orbits}
      {childCircles}

      <motion.div
        className="absolute"
        style={{
          width: "35%",
          height: "35%",
          zIndex: 10,
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: 360,
        }}
        transition={{
          scale: {
            duration: 0.5,
          },
          rotate: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        }}
      >
        <motion.div
          className="w-full h-full rounded-full overflow-hidden"
          style={{
            background: `radial-gradient(circle at center, ${gradientColors.join(
              ", "
            )})`,
            boxShadow: isHovered
              ? "0 0 40px rgba(255, 255, 255, 0.5)"
              : "0 0 20px rgba(255, 255, 255, 0.2)",
          }}
        >
          <motion.div className="w-full h-full flex items-center justify-center">
            <motion.img
              src={logoSrc}
              alt="Logo"
              className="w-3/4 h-3/4 object-contain"
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Demo component
export const GradientCircleDemo = () => {
  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center">
      <GradientCircle 
        size="300px"
        gradientColors={["#FF0080", "#7928CA", "#00FFFF"]}
        logoSrc="/logomain.png"
      />
    </div>
  );
};

export default GradientCircle;