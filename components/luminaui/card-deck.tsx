"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  id: number;
  title?: string;
  content?: string;
  color?: string;
  icon?: React.ReactNode;
  stats?: { label: string; value: string }[];
}

interface CardDeckProps {
  cards: Card[];
}

const CardDeck: React.FC<CardDeckProps> = ({ cards: initialCards }) => {
  const [cards, setCards] = useState<Card[]>(initialCards);

  const moveCardToBottom = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const [firstCard] = newCards.splice(0, 1);
      return [...newCards, firstCard];
    });
  };

  return (
    <div className="flex items-center justify-center p-4 w-full relative">
      <div className="absolute inset-0 opacity-60" />
      <div className="relative max-w-2xl h-[400px] w-[600px]">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`absolute inset-0 ${
                index === 0 ? "cursor-pointer" : ""
              }`}
              style={{
                zIndex: cards.length - index,
                transformOrigin: "50% 100%",
              }}
              initial={{
                y: index === cards.length - 1 ? -20 : index * 50,
                opacity: index === cards.length - 1 ? 0 : 1,
              }}
              animate={{ y: index * 20, opacity: 1, rotateX: -2 }}
              exit={{
                y: cards.length * 50,
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
              onClick={index === 0 ? moveCardToBottom : undefined}
            >
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-white/20 to-white/5">
                <div
                  className={`h-full w-full rounded-2xl bg-gradient-to-br ${card.color} p-1 overflow-hidden`}
                >
                  <div className="relative h-full bg-gray-900/90 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-white">
                        {card.title}
                      </h2>
                      <div className="bg-white/10 p-2 rounded-full">
                        {card.icon}
                      </div>
                    </div>
                    <p className="text-lg text-gray-200 mb-6">{card.content}</p>
                    <div className="grid grid-cols-3 gap-3">
                      {card.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="bg-black/30 rounded-lg p-2"
                        >
                          <div className="text-sm text-gray-400">
                            {stat.label}
                          </div>
                          <div className="text-lg font-semibold text-white">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-6 right-6 text-6xl font-bold text-white/5">
                      {card.id}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardDeck;
