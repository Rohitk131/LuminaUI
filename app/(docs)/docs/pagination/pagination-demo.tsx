"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_PAGES = 10;

const generateCardContent = (page: number) => ({
  id: page,
  title: `Cosmic Discovery #${page}`,
  content: `Exploring the wonders of the universe on page ${page}.`,
});

const Pagination: React.FC<{
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}> = ({ totalPages, currentPage, onPageChange }) => {
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
     
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
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

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [card, setCard] = useState(generateCardContent(currentPage));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setCard(generateCardContent(page));
  };

  return (
    <div className="flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500">
        Pagination
      </h1>
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8 relative overflow-hidden border border-gray-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50" />
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
              <p className="text-gray-300">{card.content}</p>
            </div>
            <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-slate-500 to-zinc-400 rounded-full opacity-20 filter blur-xl" />
            <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full opacity-20 filter blur-xl" />
          </motion.div>
        </AnimatePresence>
      </div>
      <Pagination
        totalPages={TOTAL_PAGES}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
