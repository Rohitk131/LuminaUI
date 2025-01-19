"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Rocket,
  Brain,
  Shield,
  ArrowRight,
  Boxes,
} from "lucide-react";

const StackedCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      subtitle: "Neural Engine",
      content: "Train models at light speed",
      bgGradient: "bg-gradient-to-br from-[#0ea5e9] via-[#2563eb] to-[#4f46e5]",
      icon: <Sparkles className="text-sky-100" size={28} />,
      blur: "bg-blue-500/30",
      border: "border-blue-400/20",
      metric: "500x",
      description: "Faster Training",
    },
    {
      subtitle: "Hyper Compute",
      content: "Unlimited processing power",
      bgGradient: "bg-gradient-to-br from-[#f43f5e] via-[#e11d48] to-[#9f1239]",
      icon: <Rocket className="text-rose-100" size={28} />,
      blur: "bg-rose-500/30",
      border: "border-rose-400/20",
      metric: "10TB/s",
      description: "Processing Speed",
    },
    {
      subtitle: "Smart Scaling",
      content: "Auto-scaling architecture",
      bgGradient: "bg-gradient-to-br from-[#a855f7] via-[#9333ea] to-[#6b21a8]",
      icon: <Boxes className="text-purple-100" size={28} />,
      blur: "bg-purple-500/30",
      border: "border-purple-400/20",
      metric: "∞",
      description: "Scale Limit",
    },
    {
      subtitle: "Quantum Core",
      content: "Next-gen computation",
      bgGradient: "bg-gradient-to-br from-[#84cc16] via-[#65a30d] to-[#4d7c0f]",
      icon: <Brain className="text-lime-100" size={28} />,
      blur: "bg-lime-500/30",
      border: "border-lime-400/20",
      metric: "1ms",
      description: "Response Time",
    },
  ];

  const stackAreaRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const rotateCards = () => {
    let angle = 0;
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      if (card.classList.contains("away")) {
        card.style.transform = `translateY(-120vh) rotate(-48deg)`;
      } else {
        card.style.transform = `rotate(${angle}deg) translateZ(${index * 10}px)`;
        angle = angle - 10;
        card.style.zIndex = String(cards.length - index);
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!stackAreaRef.current) return;

      const distance = window.innerHeight * 0.5;
      const topVal = stackAreaRef.current.getBoundingClientRect().top;
      const index = Math.floor(-1 * (topVal / distance + 1));

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        if (i <= index) {
          card.classList.add("away");
        } else {
          card.classList.remove("away");
        }
      });

      rotateCards();
    };

    rotateCards();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={stackAreaRef}
      className="w-full h-[300vh] relative bg-gradient-to-br from-slate-950 via-black to-slate-950 flex"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#3b82f6,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_70%_20%,#8b5cf6,transparent)]" />
      </div>

      <div className="h-screen sticky top-0 left-0 basis-1/2 flex items-center justify-center flex-col px-8">
        <div className="max-w-[600px] relative group">
          <div className="absolute -top-20 left-0 flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 font-medium text-sm">
                Live Demo Available
              </span>
            </div>
          </div>

          <h1 className="text-8xl font-bold leading-[0.9] tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 inline-block mb-2">
              Future of
            </span>
            <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-violet-500 inline-block">
                Computing
              </span>
              <div className="absolute -right-12 -top-8 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            </span>
          </h1>

          <p className="text-lg text-slate-400 mt-8 leading-relaxed max-w-[480px] font-light">
            Experience quantum-level computing with our next-generation
            platform. Built for those who see beyond the limitations of
            traditional systems.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <button className="relative px-8 py-4 rounded-2xl overflow-hidden group bg-gradient-to-br from-blue-500 to-violet-500">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative font-medium text-white flex items-center gap-2">
                Start Building
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>
            <div className="h-12 w-[1px] bg-white/10" />
            <div className="flex gap-4">
              <button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <Brain className="text-slate-300" size={24} />
              </button>
              <button className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <Shield className="text-slate-300" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen sticky top-0 basis-1/2 perspective-[1500px]">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-[460px] h-[460px] rounded-[3rem] mb-3 absolute top-[calc(50%-230px)] left-[calc(50%-230px)]
              transition-all duration-500 ease-out origin-bottom-left ${card.bgGradient}
              hover:scale-[1.02] group cursor-pointer border border-white/10`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-[3rem] bg-white/5 backdrop-blur-sm opacity-50" />

            {/* Content wrapper */}
            <div className="relative h-full p-10 flex flex-col">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-4 rounded-2xl bg-white/10 backdrop-blur-xl border ${card.border}`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white/80">
                      {card.subtitle}
                    </p>
                    <p className="text-sm text-white/50 mt-0.5">
                      {card.description}
                    </p>
                  </div>
                </div>
                <span className="text-4xl font-bold text-white/90">
                  {card.metric}
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-4xl font-bold text-white leading-tight mb-6">
                  {card.content}
                </h3>
                <div className="flex justify-between items-end">
                  <div className="flex gap-3">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300
                          ${hoveredIndex === index ? "bg-white" : "bg-white/30"}
                          ${i === 0 ? "group-hover:h-4" : i === 1 ? "group-hover:h-3" : ""}`}
                      />
                    ))}
                  </div>
                  <ArrowRight
                    size={24}
                    className="text-white/80 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
