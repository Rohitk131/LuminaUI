"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <motion.button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors relative ${
            currentPage === i ? "text-white" : "text-gray-400 hover:text-white"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="relative z-10">{i}</span>
          <AnimatePresence>
            {currentPage === i && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-700 shadow-inner rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-8 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-400/10 relative">
      <motion.button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={18} />
      </motion.button>
      <div className="flex space-x-1">{renderPageNumbers()}</div>
      <motion.button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={18} />
      </motion.button>
    </div>
  );
};

export default Pagination;
