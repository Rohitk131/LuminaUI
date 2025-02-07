"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ToastContainer } from "@/components/luminaui/toast";

export default function ToastDemo() {
  const [toasts, setToasts] = React.useState<
    Array<{ id: number; message: string; type: "success" | "error" | "info" }>
  >([]);

  const addToast = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-10 text-white relative w-full">
      <h1 className="mb-10 text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
        Toast Notifications Demo
      </h1>
      <div className="space-y-6 w-full max-w-xs">
        <motion.button
          onClick={() =>
            addToast("Operation completed successfully!", "success")
          }
          className="w-full px-6 py-3 text-white border border-green-400/40 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Show Success Toast
        </motion.button>
        <motion.button
          onClick={() =>
            addToast("An error occurred. Please try again.", "error")
          }
          className="w-full px-6 py-3 text-white border border-red-400/40 bg-gradient-to-r from-red-400 to-rose-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Show Error Toast
        </motion.button>
        <motion.button
          onClick={() => addToast("A new update is available!", "info")}
          className="w-full px-6 py-3 text-white border-blue-400/40 border bg-gradient-to-r from-blue-400 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Show Info Toast
        </motion.button>
      </div>
      <ToastContainer toasts={toasts} />
    </div>
  );
}
