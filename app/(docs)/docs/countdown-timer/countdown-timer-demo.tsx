"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 30, label: "D" },
    { value: 12, label: "H" },
    { value: 30, label: "M" },
    { value: 0, label: "S" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = [...prevTime];
        newTime[3].value -= 1;
        console.log(newTime[3].value);

        for (let i = 3; i > 0; i--) {
          if (newTime[i].value < 0) {
            newTime[i].value = i === 3 ? 59 : i === 2 ? 59 : i === 1 ? 23 : 30;
            newTime[i - 1].value -= 1;
          }
        }

        if (newTime.every((unit) => unit.value === 0)) {
          clearInterval(timer);
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-4xl relative">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle, rgba(29,78,216,0.3) 0%, rgba(30,64,175,0) 50%)",
              "radial-gradient(circle, rgba(167,139,250,0.3) 0%, rgba(167,139,250,0) 50%)",
              "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(16,185,129,0) 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Electric arcs */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 100 Q 250 50, 500 100 T 1000 100"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="1" />
              <stop offset="100%" stopColor="#2DD4BF" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Timer display */}
        <div className="h-[150px] w-[500px] relative grid grid-cols-4 gap-4">
          <AnimatePresence>
            {timeLeft.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="relative w-full aspect-square"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
                  <motion.div
                    className="absolute inset-1 bg-gray-950 rounded-xl flex items-center justify-center overflow-hidden"
                    whileHover={{
                      boxShadow: "0 0 25px rgba(59, 130, 246, 0.7)",
                    }}
                  >
                    <motion.div
                      key={unit.value}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400"
                    >
                      {unit.value.toString().padStart(2, "0")}
                    </motion.div>
                    {/* Animated particles */}
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500 rounded-full"
                        animate={{
                          x: [0, Math.random() * 60 - 30],
                          y: [0, Math.random() * 60 - 30],
                          scale: [0, 1, 0],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: Math.random() * 2 + 1,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                    ))}
                  </motion.div>
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-blue-500"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <motion.div
                  className="mt-2 text-sm text-gray-400 font-medium"
                  whileHover={{
                    scale: 1.2,
                    color: "#60A5FA",
                    textShadow: "0 0 8px rgba(96, 165, 250, 0.8)",
                  }}
                >
                  {unit.label}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pulsating line */}
        <motion.div
          className="mt-8 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default CountdownTimer;
