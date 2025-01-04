'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);  
  const contentRef = useRef(null);  


  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);  
  };

  useEffect(() => {
    const element = contentRef.current;
    if (isOpen) {
      const contentHeight = element.scrollHeight; 

      gsap.to(element, {
        height: contentHeight,        
        opacity: 1,                   
        padding: '1rem',             
        duration: 0.5,
        ease: 'power2.out',           
        onComplete: () => {
          element.style.height = 'auto'; 
        },
      });
    } else {
      gsap.to(element, {
        height: 0,                  
        opacity: 0,                  
        padding: 0,                  
        duration: 0.3,              
        ease: 'power2.in',           
      });
    }
  }, [isOpen]);

  return (
    <div className="font-oswald border-b-2 rounded-lg mb-2 overflow-hidden">

      <button
        className="w-full text-left px-4 py-2 flex items-center justify-between bg-zinc-900"
        onClick={toggleAccordion} 
      >
        <span>{title}</span>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="transform transition-transform duration-300"
        >
          {'▼'} 
        </motion.div>
      </button>

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0 }}  
        whileHover={{ scale:1.01 }}
        animate={{ opacity: isOpen ? 1 : 0 }} 
        transition={{
          opacity: { duration: 0.3, ease: 'easeInOut' } 
        }}
        style={{
          height: 0,
          overflow: 'hidden',
          padding: 0,
        }}
        className="border-b-orange-950 transition-padding duration-500 bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent "
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Accordion;
