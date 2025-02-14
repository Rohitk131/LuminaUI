"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GradientCircleProps {
  size?: string;
  gradientColors?: string[];
  logoSrc: string;
  orbitImages: string[];  // Array of image URLs for orbit circles
}

const GradientCircle = ({
  size = "200px",
  gradientColors = [
    "rgba(238, 174, 202, 0.7)",  // Soft pink
    "rgba(148, 187, 233, 0.7)",  // Light blue
    "rgba(203, 166, 247, 0.7)",  // Lavender
  ],
  logoSrc,
  orbitImages,
}: GradientCircleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Constants for orbit sizing
  const INNER_ORBIT = 80;
  const ORBIT_GAP = 45;

  // Modern gradient combinations for each orbit
  const orbitGradients = [
    `linear-gradient(135deg, ${gradientColors[0]}, rgba(255, 255, 255, 0.2))`,
    `linear-gradient(225deg, ${gradientColors[1]}, rgba(255, 255, 255, 0.2))`,
    `linear-gradient(315deg, ${gradientColors[2]}, rgba(255, 255, 255, 0.2))`
  ];

  // Create three orbits with equal spacing
  const orbits = Array.from({ length: 3 }).map((_, index) => {
    const orbitSize = INNER_ORBIT + (index * ORBIT_GAP);

    return (
      <motion.div
        key={`orbit-${index}`}
        className="absolute rounded-full border border-white/60"
        style={{
          width: `${orbitSize}%`,
          height: `${orbitSize}%`,
          backdropFilter: "blur(4px)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
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
      radius: (INNER_ORBIT + ORBIT_GAP*0.8),
      startAngle: -Math.PI,
      orbitIndex: 0
    },
    {
      radius: (INNER_ORBIT + ORBIT_GAP*2.3),
      startAngle: -Math.PI / 6,
      orbitIndex: 1
    },
    {
      radius: (INNER_ORBIT + ORBIT_GAP * 3.9),
      startAngle: Math.PI / 3,
      orbitIndex: 2
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
                className="w-full h-full rounded-full overflow-hidden flex items-center justify-center backdrop-blur-sm"
                style={{
                  background: orbitGradients[index],
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
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
                    src={orbitImages[index]}
                    alt={`Orbit Image ${index + 1}`}
                    className="w-3/4 h-3/4 object-contain"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
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
          className="w-full h-full rounded-full overflow-hidden backdrop-blur-sm"
          style={{
            background: `linear-gradient(135deg, ${gradientColors.join(
              ", "
            )})`,
            boxShadow: isHovered
              ? "0 8px 32px rgba(0, 0, 0, 0.15)"
              : "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <motion.div className="w-full h-full flex items-center justify-center">
            <motion.img
              src={logoSrc}
              alt="Main Logo"
              className="w-3/4 h-3/4 object-contain"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GradientCircle;