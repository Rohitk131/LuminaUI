"use client";
import { motion } from "framer-motion";
import { Sparkles, Hourglass } from "lucide-react";

const ProgressBar = ({ progress }) => {
  return (
    <div
      className="space-y-6"
      role="progressbar"
      aria-label="Progress Bar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      {/* Progress Bar Container */}
      <div className="relative pt-4">
        <div className="h-4 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20 shadow-md">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 relative"
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-shine animate-shine" />

            {/* Sparkle Effect */}
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
            >
              <Sparkles
                className="w-5 h-5 text-white"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Tooltip */}

        {/* Hourglass Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
          className="absolute -right-5 top-1 bg-blue-500/30 p-2 rounded-full backdrop-blur-md shadow-inner"
        >
          <Hourglass
            className="w-5 h-5 text-blue-300 animate-spin"
            style={{ animationDuration: "1.2s" }}
          />
        </motion.div>
      </div>

      {/* Progress Label */}
      <div className="flex justify-between items-center">
        <span className="text-blue-400 text-sm font-medium tracking-wide">
          Progress
        </span>
        <motion.span
          key={progress}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className=" bg-blue-700/90 text-white text-xs font-semibold px-3 py-1 rounded-lg shadow-lg"
        >
          {progress.toFixed(1)}%
        </motion.span>
      </div>
    </div>
  );
};

export default ProgressBar;
