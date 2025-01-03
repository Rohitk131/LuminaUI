"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 5000,
  onClose,
}) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const variants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.3 } },
  };

  const typeStyles = {
    success: {
      gradient: "from-green-700 via-emerald-600 to-green-500",
      shadow: "rgba(16, 185, 129, 0.3)",
      icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    },
    error: {
      gradient: "from-red-700 via-rose-600 to-red-500",
      shadow: "rgba(239, 68, 68, 0.3)",
      icon: <AlertCircle className="w-6 h-6 text-rose-400" />,
    },
    info: {
      gradient: "from-blue-700 via-sky-600 to-blue-500",
      shadow: "rgba(59, 130, 246, 0.3)",
      icon: <Info className="w-6 h-6 text-sky-400" />,
    },
  }[type];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={`relative flex items-center w-full max-w-sm p-4 rounded-xl shadow-lg bg-gradient-to-br ${typeStyles.gradient} backdrop-blur-xl bg-opacity-90 `}
      style={{ boxShadow: `0px 8px 30px ${typeStyles.shadow}` }}
    >
      <div className="flex items-center justify-center w-10 h-10 mr-4 bg-black bg-opacity-30 rounded-full">
        {typeStyles.icon}
      </div>
      <div className="flex-grow">
        <p className="text-sm font-medium text-gray-100">{message}</p>
      </div>
      <motion.button
        onClick={onClose}
        className="flex items-center justify-center w-8 h-8 ml-4 text-gray-100 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Close"
      >
        <X size={18} />
      </motion.button>
    </motion.div>
  );
};

const ToastContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="fixed bottom-6 right-6 flex flex-col space-y-4 items-end sm:bottom-8 sm:right-8 z-50">
    <AnimatePresence>{children}</AnimatePresence>
  </div>
);

export default function Home() {
  const [toasts, setToasts] = React.useState<
    Array<{ id: number; message: string; type: ToastProps["type"] }>
  >([]);

  const addToast = (message: string, type: ToastProps["type"] = "info") => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-10 text-gray-200 ">
      <h1 className="mb-10 text-4xl font-bold text-center text-gray-100">
         Toast Notifications
      </h1>
      <div className="space-y-4">
        <motion.button
          onClick={() =>
            addToast("Operation completed successfully!", "success")
          }
          className="w-full px-6 py-3 text-gray-100 bg-gradient-to-br from-green-700 to-green-500 rounded-lg hover:from-green-600 hover:to-green-400 transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show Success Toast
        </motion.button>
        <motion.button
          onClick={() =>
            addToast("An error occurred. Please try again.", "error")
          }
          className="w-full px-6 py-3 text-gray-100 bg-gradient-to-br from-red-700 to-red-500 rounded-lg hover:from-red-600 hover:to-red-400 transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show Error Toast
        </motion.button>
        <motion.button
          onClick={() => addToast("A new update is available!", "info")}
          className="w-full px-6 py-3 text-gray-100 bg-gradient-to-br from-blue-700 to-blue-500 rounded-lg hover:from-blue-600 hover:to-blue-400 transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show Info Toast
        </motion.button>
      </div>
      <ToastContainer>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </ToastContainer>
    </div>
  );
}
