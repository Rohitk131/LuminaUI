"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion, useSpring, MotionValue } from "framer-motion";

export default function EnhancedCTASection({ ctaData }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { stiffness: 100, damping: 30 };

  const mouseSpringX: MotionValue<number> = useSpring(
    mousePosition.x,
    springConfig
  );
  const mouseSpringY: MotionValue<number> = useSpring(
    mousePosition.y,
    springConfig
  );

  

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left - 200,
          y: e.clientY - rect.top - 200,
        });
      }
    };

    const element = containerRef.current;
    element?.addEventListener("mousemove", handleMouseMove);
    return () => {
      element?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[700px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden rounded-3xl px-6 py-20"
    >
      <motion.div
        className="absolute pointer-events-none w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-[100px]"
        style={{
          x: mouseSpringX,
          y: mouseSpringY,
        }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-gray-800/50 text-gray-300 text-sm px-4 py-2 rounded-full mb-6 border border-gray-700/50 shadow-lg backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
          <span>Experience the Future of Productivity</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-100 via-blue-200 to-purple-200 bg-clip-text text-transparent tracking-tight mb-6 leading-tight"
        >
          Revolutionize Your <br />
          <span className="text-blue-400">Workflow</span> with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 text-xl mb-10 leading-relaxed"
        >
          Harness the power of AI to streamline tasks, boost productivity, and
          unlock your team's full potential.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-xl shadow-lg overflow-hidden transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-3">
            Start Your Journey
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {ctaData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 bg-gray-700/30 rounded-full border border-gray-700/30 shadow-md backdrop-blur-sm hover:bg-gray-700/50 transition-colors duration-300"
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
