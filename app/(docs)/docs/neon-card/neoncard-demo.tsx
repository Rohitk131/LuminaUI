"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColors?: string[];
  glowIntensity?: number;
}

const NeonCard = ({
  children,
  className = "",
  gradientColors = ["#FF0080", "#7928CA", "#FF0080"],
  glowIntensity = 0.5,
}: NeonCardProps) => {
  const { theme } = useTheme();
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  const getRandomPosition = () => {
    if (!divRef.current) return { x: 0, y: 0 };
    const bounds = divRef.current.getBoundingClientRect();
    return {
      x: Math.random() * bounds.width,
      y: Math.random() * bounds.height,
    };
  };

  if (!mounted) return null;

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`group relative rounded-2xl p-[2px] transition-all duration-500 hover:scale-[1.02] ${className}`}
      style={{
        background: `linear-gradient(90deg, ${gradientColors.join(", ")})`,
        backgroundSize: "200% 100%",
        animation: "shimmer 2s linear infinite",
        boxShadow: `0 0 20px 2px rgba(${gradientColors[0]}15, ${glowIntensity})`,
      }}
    >
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-75 blur-xl transition-all duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(1000px circle at ${position.x}px ${position.y}px, ${gradientColors[0]}15, transparent 40%)`,
        }}
      />

      <div
        className="relative h-full w-full rounded-2xl border border-white/10 bg-slate-900/[0.85] p-8 transition-all duration-500 group-hover:bg-slate-900/70"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `
              radial-gradient(800px circle at ${position.x}px ${position.y}px, 
                rgba(255,255,255,0.08),
                transparent 40%
              )
            `,
          }}
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none"
            >
              {[...Array(10)].map((_, i) => {
                const startPos = getRandomPosition();
                const endPos = getRandomPosition();

                return (
                  <motion.div
                    key={i}
                    className="absolute h-2 w-2 rounded-full"
                    style={{
                      background: gradientColors[i % gradientColors.length],
                      boxShadow: `0 0 15px 2px ${
                        gradientColors[i % gradientColors.length]
                      }`,
                    }}
                    initial={{
                      x: startPos.x,
                      y: startPos.y,
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: endPos.x,
                      y: endPos.y,
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 h-full">{children}</div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default function NeonCardDemo() {
  return (
    <div className="flex h-[500px] w-full flex-col gap-6 p-8 lg:h-[250px] lg:flex-row">
      <NeonCard
        className="flex-1"
        gradientColors={["#FF0080", "#7928CA", "#FF0080"]}
        glowIntensity={0.6}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-5xl font-bold text-transparent drop-shadow-lg">
            Neon Card
          </span>
          <p className="text-center text-sm font-medium text-gray-300/90">
            Hover and move your cursor to see the magic ✨
          </p>
        </div>
      </NeonCard>

      <NeonCard
        className="flex-1"
        gradientColors={["#00FFFF", "#0066FF", "#00FFFF"]}
        glowIntensity={0.5}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-300 bg-clip-text text-5xl font-bold text-transparent drop-shadow-lg">
            Neon Card
          </span>
          <p className="text-center text-sm font-medium text-gray-300/90">
            Experience smooth animations ⚡
          </p>
        </div>
      </NeonCard>
    </div>
  );
}
