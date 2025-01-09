"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Globe, Rocket } from "lucide-react";

interface Card {
  id: number;
  title: string;
  content: string;
  color: string;
  icon: React.ReactNode;
  stats: { label: string; value: string }[];
}

const CardDeck: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      title: "Quantum Leap",
      content:
        "Exploring the frontiers of quantum computing and its potential to revolutionize data processing and cryptography.",
      color: "from-cyan-500 to-blue-500",
      icon: <Sparkles className="w-8 h-8" />,
      stats: [
        { label: "Qubits", value: "1024" },
        { label: "Coherence", value: "100μs" },
        { label: "Error Rate", value: "0.1%" },
      ],
    },
    {
      id: 2,
      title: "Neon Dreams",
      content:
        "Visualizing the future of augmented reality and its impact on entertainment, education, and daily life.",
      color: "from-purple-500 to-pink-500",
      icon: <Zap className="w-8 h-8" />,
      stats: [
        { label: "Resolution", value: "8K" },
        { label: "FOV", value: "210°" },
        { label: "Latency", value: "<5ms" },
      ],
    },
    {
      id: 3,
      title: "Cyber Nexus",
      content:
        "Connecting minds in the digital realm through advanced neural interfaces and immersive virtual environments.",
      color: "from-green-500 to-emerald-500",
      icon: <Globe className="w-8 h-8" />,
      stats: [
        { label: "Bandwidth", value: "1 Tbps" },
        { label: "Users", value: "1B+" },
        { label: "Uptime", value: "99.99%" },
      ],
    },
    {
      id: 4,
      title: "Stellar Voyage",
      content:
        "Charting a course through the cosmos with next-generation propulsion systems and interstellar navigation.",
      color: "from-orange-500 to-red-500",
      icon: <Rocket className="w-8 h-8" />,
      stats: [
        { label: "Speed", value: "0.1c" },
        { label: "Range", value: "50 ly" },
        { label: "Efficiency", value: "99.9%" },
      ],
    },
  ]);

  const moveCardToBottom = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const [firstCard] = newCards.splice(0, 1);
      return [...newCards, firstCard];
    });
  };

  return (
    <div>
      <div className="relative h-[32rem] mb-12">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`absolute inset-x-0 w-full bg-gradient-to-br ${
                card.color
              } rounded-2xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden ${
                index === 0 ? "cursor-pointer" : ""
              }`}
              style={{
                top: 0,
                height: `calc(100% - ${index * 60}px)`,
                zIndex: cards.length - index,
              }}
              initial={index === 0 ? { y: -50, opacity: 0 } : { y: index * 60 }}
              animate={{
                y: index * 60,
                opacity: 1,
                scale: 1 - index * 0.05,
              }}
              exit={{
                y: -50,
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { type: "spring", stiffness: 300, damping: 30 },
              }}
              onClick={index === 0 ? moveCardToBottom : undefined}
            >
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl z-[-1]" />
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-4xl font-bold text-white tracking-wider">
                  {card.title}
                </h2>
                <div className="bg-white bg-opacity-20 p-2 rounded-full">
                  {card.icon}
                </div>
              </div>
              <p className="text-xl text-gray-100 leading-relaxed mb-6">
                {card.content}
              </p>
              <div className="grid grid-cols-3 gap-4 mb-20">
                {card.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="bg-black bg-opacity-30 p-3 rounded-lg"
                  >
                    <div className="text-sm text-gray-300">{stat.label}</div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-white opacity-70">
                  Card {card.id} of {cards.length}
                </div>
              </div>
              {index === 0 && (
                <div className="absolute bottom-4 right-8 text-9xl font-bold text-white opacity-10">
                  {card.id}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="text-center text-white text-xl font-medium">
        Click on the top card to reveal the next one
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4">
      <CardDeck />
    </div>
  );
}
