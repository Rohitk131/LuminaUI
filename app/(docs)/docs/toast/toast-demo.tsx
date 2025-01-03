"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function Home() {
  const [toasts, setToasts] = React.useState<
    Array<{ id: number; message: string; type: "success" | "error" | "info" }>
  >([]);

  const addToast = (message: string, type: "success" | "error" | "info" = "info") => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.95 }
  };

  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-10  text-white">
      <h1 className="mb-10 text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
        Toast Notifications
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
          className="w-full px-6 py-3 text-white  border  border-red-400/40 bg-gradient-to-r from-red-400 to-rose-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
      <ToastContainer>
        <AnimatePresence>
          {toasts.map((toast, index) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: index * 0.1 } }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            >
              <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => removeToast(toast.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ToastContainer>
    </div>
  );
}


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
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev > 0) {
          return prev - 100 / (duration / 1000);
        }
        clearInterval(timer);
        return 0;
      });
    }, 1000);

    const closeTimer = setTimeout(onClose, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  const variants = {
    initial: { opacity: 0, y: 50, scale: 0.5 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.5, 
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      } 
    },
  };

  const typeStyles = {
    success: {
      gradient: "from-green-400 to-emerald-600",
      icon: <CheckCircle className="w-6 h-6 text-emerald-100" />,
    },
    error: {
      gradient: "from-red-400 to-rose-600",
      icon: <AlertCircle className="w-6 h-6 text-rose-100" />,
    },
    info: {
      gradient: "from-blue-400 to-indigo-600",
      icon: <Info className="w-6 h-6 text-indigo-100" />,
    },
  }[type];

  return (
    <motion.div
      layout
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={`relative flex items-center w-full max-w-sm p-4 rounded-lg shadow-lg bg-gradient-to-br ${typeStyles.gradient} backdrop-blur-xl`}
      style={{ 
        boxShadow: `0 10px 30px -5px rgba(0, 0, 0, 0.3)`,
      }}
    >
      <div className="flex items-center justify-center w-10 h-10 mr-4 bg-white bg-opacity-25 rounded-full">
        {typeStyles.icon}
      </div>
      <div className="flex-grow pr-8">
        <p className="text-sm font-medium text-white">{message}</p>
      </div>
      <motion.button
        onClick={onClose}
        className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 text-white bg-black bg-opacity-25 rounded-full hover:bg-opacity-40 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Close"
      >
        <X size={14} />
      </motion.button>
      <div className="absolute bottom-0 left-0 h-1 bg-white bg-opacity-50 rounded-full" style={{ width: `${progress}%`, transition: 'width 1s linear' }} />
    </motion.div>
  );
};

export const ToastContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="fixed bottom-6 right-6 flex flex-col space-y-4 items-end sm:bottom-8 sm:right-8 z-50">
    <AnimatePresence>{children}</AnimatePresence>
  </div>
);


