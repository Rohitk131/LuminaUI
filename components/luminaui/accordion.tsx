// ./components/luminaui/accordion.tsx
'use client';

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  children, 
  isActive, 
  onToggle 
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    gsap.killTweensOf(element);

    if (isActive) {
      gsap.to(element, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(element, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      });
    }
  }, [isActive]);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg mb-2 overflow-hidden bg-white dark:bg-gray-900 shadow-sm">
      <button
        className={`
          w-full text-left p-4 flex items-center justify-between
          transition-colors duration-200
          ${isActive ? 
            'bg-violet-50 dark:bg-violet-900/20 text-violet-900 dark:text-violet-100' : 
            'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
          }
        `}
        onClick={onToggle}
      >
        <span className="font-medium">{title}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="text-violet-500 dark:text-violet-400"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <div
        ref={contentRef}
        style={{ height: 0, opacity: 0, overflow: 'hidden' }}
        className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="p-4 text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: ReactNode }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};