"use client";
import { useEffect, useState } from "react";
import ProgressBar from "@/components/luminaui/progress-bar";

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
