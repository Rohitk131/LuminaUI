'use client';

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isActive, onToggle }) => {
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

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.15) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200/50 dark:border-gray-800/50 shadow-xl">
        <AccordionItem
          title="What is an Accordion?"
          isActive={activeIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          An accordion is a vertically stacked set of interactive headings that each reveal a section of content.
        </AccordionItem>
        <AccordionItem
          title="How do I use it?"
          isActive={activeIndex === 1}
          onToggle={() => handleToggle(1)}
        >
          Click on any heading to expand or collapse the content. Only one section is open at a time.
        </AccordionItem>
        <AccordionItem
          title="Why use an Accordion?"
          isActive={activeIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          Accordions are used to reduce page clutter and organize content efficiently.
        </AccordionItem>
      </div>
    </div>
  );
};

export default Accordion;