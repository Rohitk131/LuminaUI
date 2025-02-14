"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePagination } from "@/hooks/use-pagination";
import Pagination from "@/components/luminaui/pagination";

export default function PaginationDemo() {
  const { currentPage, card, totalPages, handlePageChange } = usePagination();

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
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
