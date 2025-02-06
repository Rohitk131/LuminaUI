"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownTimerProps {
  endTime: string;
}

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const end = new Date(endTime).getTime();
    const now = new Date().getTime();
    const difference = end - now;

    if (difference <= 0) {
      return [
        { value: 0, label: "D" },
        { value: 0, label: "H" },
        { value: 0, label: "M" },
        { value: 0, label: "S" },
      ];
    }

    return [
      { value: Math.floor(difference / (1000 * 60 * 60 * 24)), label: "D" },
      { value: Math.floor((difference / (1000 * 60 * 60)) % 24), label: "H" },
      { value: Math.floor((difference / (1000 * 60)) % 60), label: "M" },
      { value: Math.floor((difference / 1000) % 60), label: "S" },
    ];
  };

  const [timeLeft, setTimeLeft] = useState<TimeUnit[] | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  if (!timeLeft) {
    return null; // or a loading spinner if you prefer
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-4xl relative">
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
                  </motion.div>
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
      </div>
    </div>
  );
};

export default CountdownTimer;
