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
        "Exploring the frontiers of quantum computing and its potential to revolutionize data processing.",
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
        "Visualizing the future of augmented reality and its impact on human interaction.",
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
        "Connecting minds in the digital realm through advanced neural interfaces.",
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
        "Charting a course through the cosmos with next-generation propulsion systems.",
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
    <div className="bg-gray-950 flex items-center justify-center p-4">
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
              animate={{
                y: index * 20,
                opacity: 1,
                rotateX: -2,
              }}
              exit={{
                y: cards.length * 50,
                opacity: 0,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1],
              }}
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
