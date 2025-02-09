'use client'

import Image from 'next/image';
import React, { useRef } from 'react';
import ione from '../../public/assets/ione.webp'; 
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const CircleShowcase = () => {
    const containerRef = useRef(null);

    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 min-h-64 relative">
             <div 
        className="absolute inset-0 opacity-50" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.6) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
            <h1 className="text-4xl text-green-400 font-bold flex gap-10">Our Team</h1>
            <div className="flex items-center justify-center gap-10 relative group">
                {/* Circular Text Around the Image */}
                <motion.svg
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    width="300"
                    height="300"
                    viewBox="0 0 300 300"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute z-10"
                >
                    {/* Circular Path */}
                    <path
                        id="circlePath"
                        d="M150,150 m-120,-10 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                        fill="transparent"
                    />
                    <motion.text
                        fontSize="16"
                        fontFamily="Arial"
                        fill="white"
                        textAnchor="middle"
                    >
                        <textPath href="#circlePath" startOffset="25%" className='font-oswald'>
                            Team Member | Designer | Artist | LuminaUI  
                        </textPath>
                    </motion.text>
                </motion.svg>

                {/* Image */}
                <Image
                    ref={containerRef}
                    className="rounded-full grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
                    src={ione}
                    width={240}
                    height={240}
                    alt="Team Member"
                />

                <motion.button
                    onClick={() => {
                        window.open("https://Murtazadev-one.vercel.app", "_blank");
                    }}
                    className="font-bold w-20 absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out bg-white text-black rounded-lg flex items-center justify-center py-1 text-sm font-oswald z-20"
                >
                    Jay <MdArrowOutward />
                </motion.button>
            </div>
        </div>
    );
};

export default CircleShowcase;
