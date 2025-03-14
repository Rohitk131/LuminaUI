// ./components/luminaui/hero-animation.tsx
'use client';
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { RocketLaunch } from 'phosphor-react';

type Position = {
  top: string;
  left: string;
};

interface HeroAnimationProps {
  url: string[];
}

const HeroAnimation: React.FC<HeroAnimationProps> = ({ url }) => {
  const outerCircleRadius = 160;
  const orbitAnimation = {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 25,
      ease: 'linear',
    },
  };

  const positions: Position[] = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 360) / 6;
    return {
      top: `calc(50% + ${outerCircleRadius * Math.sin((angle * Math.PI) / 180)}px)`,
      left: `calc(50% + ${outerCircleRadius * Math.cos((angle * Math.PI) / 180)}px)`,
    };
  });

  return (
    <div className="relative flex justify-center items-center h-[28rem] w-96 md:h-72 md:w-72 sm:h-48 sm:w-48 sm:mt-4 overflow-hidden md:overflow-visible">
      <motion.div
        className="absolute w-80 h-80 border-4 border-gray-700/40 rounded-full shadow-xl dark:border-gray-300/40"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      />
      
      <motion.div
        className="relative w-32 h-32 border-4 border-gradient-to-r from-blue-500 to-sky-400 shadow-xl bg-gradient-to-r from-blue-500/70 to-sky-400/70 text-white rounded-full flex justify-center items-center z-10 transition-all duration-300 ease-in-out transform hover:scale-110 dark:from-blue-400/70 dark:to-sky-300/70"
        whileHover={{ rotate: 360 }}
      >
        <RocketLaunch size={58} weight="bold" />
      </motion.div>
      
      <motion.div
        className="absolute w-full h-full flex justify-center items-center"
        animate={orbitAnimation}
      >
        {positions.map((position, index) => (
          <OrbitingIcon key={index} position={position} iconSrc={url[index]} />
        ))}
      </motion.div>
    </div>
  );
};

const OrbitingIcon: React.FC<{ position: Position; iconSrc: string }> = memo(({ position, iconSrc }) => {
  return (
    <div
      className="absolute border-4 border-gradient-to-r bg-gradient-to-r from-gray-400 to-gray-300 rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-360 dark:from-gray-600/70 dark:to-gray-500/70"
      style={{
        width: 90,
        height: 90,
        top: position.top,
        left: position.left,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img
        src={iconSrc}
        alt="Icon"
        className="w-3/4 h-3/4 object-contain rounded-full filter grayscale hover:filter-none transition-all duration-300 ease-in-out"
        onError={(e) => e.currentTarget.src = '/icons/placeholder.svg'}
      />
    </div>
  );
});

export default HeroAnimation;