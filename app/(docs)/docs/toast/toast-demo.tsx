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
    initial: { opacity: 0, y: 50, scale: 0.3 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
  };

  const getGradient = () => {
    switch (type) {
      case "success":
        return "from-green-500 to-green-600";
      case "error":
        return "from-red-500 to-red-600";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5" />;
      case "error":
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      layout
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={`fixed bottom-4 right-4 flex items-center p-4 rounded-lg shadow-lg text-white backdrop-blur-md bg-opacity-90 bg-gradient-to-r ${getGradient()}`}
      style={{
        boxShadow: `0 0 15px 5px ${
          type === "success"
            ? "rgba(16, 185, 129, 0.2)"
            : type === "error"
            ? "rgba(239, 68, 68, 0.2)"
            : "rgba(59, 130, 246, 0.2)"
        }`,
      }}
    >
      <div className="mr-3">{getIcon()}</div>
      <p className="mr-2 text-sm font-medium">{message}</p>
      <motion.button
        onClick={onClose}
        className="ml-auto p-1 rounded-full hover:bg-white/20 transition-colors"
        aria-label="Close"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        <X size={16} />
      </motion.button>
    </motion.div>
  );
};

const ToastContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-4">
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
    <div className="flex flex-col items-center justify-center p-24 text-white">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Toast Notifications
      </h1>
      <div className="space-y-4">
        <motion.button
          onClick={() =>
            addToast("Operation completed successfully!", "success")
          }
          className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show Success Toast
        </motion.button>
        <motion.button
          onClick={() =>
            addToast("An error occurred. Please try again.", "error")
          }
          className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Show Error Toast
        </motion.button>
        <motion.button
          onClick={() => addToast("New update available!")}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
