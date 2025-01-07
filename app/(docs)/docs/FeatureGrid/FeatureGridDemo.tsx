'use client';

import {
  ZapIcon,
  SplineIcon,
  LifeBuoyIcon,
  PaletteIcon,
  ShieldCheckIcon,
  WaypointsIcon,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

// Wrapper container for animations
const Container = ({ children, className, delay = 0.2, reverse, simple }) => {
  return (
    <motion.div
      className={cn("w-full h-full", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: simple ? 0.2 : 0.4,
        type: simple ? "keyframes" : "spring",
        stiffness: simple && 100,
      }}
    >
      {children}
    </motion.div>
  );
};

// Section Badge Component
const SectionBadge = ({ title }) => {
    return (
      <div className="px-4 py-1 rounded-full bg-blue-500/20 cursor-pointer select-none">
        <div className="bg-[linear-gradient(110deg,#3b82f6,45%,#93c5fd,55%,#3b82f6)] bg-[length:200%_100%] bg-clip-text text-transparent font-medium text-sm animate-shimmer">
          {title}
        </div>
      </div>
    );
  };
  

// Updated PERKS data
const PERKS = [
  {
    icon: ZapIcon,
    title: "Lightning Speed",
    description:
      "Unleash top-tier performance with ultra-fast processing and delivery times.",
  },
  {
    icon: SplineIcon,
    title: "Actionable Insights",
    description:
      "Make data-driven decisions with intuitive and powerful analytics tools.",
  },
  {
    icon: LifeBuoyIcon,
    title: "Round-the-Clock Assistance",
    description:
      "Always here to help—24/7 customer support at your fingertips.",
  },
  {
    icon: PaletteIcon,
    title: "Creative Freedom",
    description:
      "Express your vision with fully customizable design solutions.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Rock-Solid Security",
    description:
      "Your data is safeguarded with top-notch security protocols.",
  },
  {
    icon: WaypointsIcon,
    title: "Effortless Integration",
    description:
      "Seamlessly blend into your workflow with easy platform compatibility.",
  },
];

// Perks Component
const Perks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      {/* Header Section */}
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Features" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold !leading-snug mt-6">
            Unlock Exclusive Benefits
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
            Explore the powerful features and tools designed to elevate your workflow
            and boost productivity.
          </p>
        </div>
      </Container>

      {/* Perks Grid Section */}
      <Container>
        <div className="mt-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full relative">
            {PERKS.map((perk, index) => (
              <Perk key={index} index={index} {...perk} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

// Single Perk Card Component
const Perk = ({ title, description, icon: Icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l",
        index < 3 && "lg:border-b"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-80 from-blue-950/45 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-80 from-blue-950/45 to-transparent pointer-events-none" />
      )}
      <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full">
        <div className="mb-4 relative z-10 px-10">
          <Icon
            strokeWidth={1.3}
            className="w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-foreground"
          />
        </div>
        <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
          <div className="absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-500 origin-center" />
          <span className="group-hover/feature:-translate-y-1 group-hover/feature:text-blue-400 transition duration-500 inline-block heading">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Perks;
