"use client";

import { useState } from "react";

const TOTAL_PAGES = 10;

export const generateCardContent = (page: number) => ({
  id: page,
  title: `Cosmic Discovery #${page}`,
  content: `Exploring the wonders of the universe on page ${page}.`,
});

export const usePagination = (totalPages = TOTAL_PAGES) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [card, setCard] = useState(generateCardContent(1));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setCard(generateCardContent(page));
  };

  return { currentPage, card, totalPages, handlePageChange };
};
