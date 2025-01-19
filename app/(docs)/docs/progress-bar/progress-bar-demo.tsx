'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Hourglass } from "lucide-react";
interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
}

const ProgressBarDemo: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = () => {
    setUploading(true);
    setProgress(0);
  };

  useEffect(() => {
    if (uploading && progress < 100) {
      const timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + Math.random() * 20, 100));
      }, 500);

      return () => clearInterval(timer);
    }

    if (progress === 100) {
      setUploading(false);
    }
  }, [uploading, progress]);

  return (
    <div className="p-6 max-w-96 mx-auto space-y-4 bg-gray-800/40 border border-blue-400/20 rounded-lg text-white relative">
       <div 
        className="absolute inset-0 opacity-60 dark:opacity-60" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      
 
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <h1 className="text-xl font-bold text-center">File Upload Simulation</h1>
      <div>
        <ProgressBar progress={progress} />
      </div>
      <button
        onClick={handleFileUpload}
        disabled={uploading}
        className={`w-full py-2 font-medium rounded-lg transition ${
          uploading
            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {uploading ? "Uploading..." : "Start Upload"}
      </button>
    </div>
  );
};

export default ProgressBarDemo;



const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
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
                style={{ filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))" }}
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


