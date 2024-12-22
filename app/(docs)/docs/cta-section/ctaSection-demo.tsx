'use client'
import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const element = document.getElementById('cta-container');
    element?.addEventListener('mousemove', handleMouseMove);
    return () => element?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="cta-container"
      className="relative w-full min-h-[600px] bg-gradient-to-b from-gray-900 via-black to-gray-900 
                 flex items-center justify-center overflow-hidden rounded-3xl px-6"
    >

      <div
        className="absolute pointer-events-none w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                   rounded-full blur-[150px]"
        style={{
          left: `${mousePosition.x - 200}px`,
          top: `${mousePosition.y - 200}px`,
          transition: 'transform 0.2s ease',
        }}
      ></div>


      <div className="absolute inset-0 bg-gradient-radial from-purple-950/40 via-transparent to-transparent animate-pulse"></div>

      <div className="relative z-10 text-center max-w-3xl">
 
        <div className="inline-block bg-gray-800 text-gray-300 text-xs px-4 py-2 rounded-full mb-6 border border-gray-700 shadow-md">
          <span>🚀 Elevate Your Experience</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-400 to-purple-400 
                       bg-clip-text text-transparent tracking-tight mb-6 leading-tight">
          Simplify, Automate, <br />
          <span className="text-blue-400">and Transform</span> Your Workflow
        </h1>

        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Unlock the power of AI for effortless task management. Automate processes, gain insights, and achieve more with less effort.
        </p>

     
        <button
          className="relative group inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r 
                     from-blue-500 to-purple-500 text-white text-lg font-medium rounded-xl shadow-lg 
                     overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-3">
            Get Started Free
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
        </button>


        <div className="mt-10 flex justify-center gap-6">
          {[
            { icon: <CheckCircle className="text-green-400 w-6 h-6" />, text: 'Free 14-day trial' },
            { icon: <CheckCircle className="text-green-400 w-6 h-6" />, text: 'No credit card required' },
            { icon: <CheckCircle className="text-green-400 w-6 h-6" />, text: 'Cancel anytime' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-400 bg-gray-800 rounded-full 
                         border border-gray-700 shadow-md"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
