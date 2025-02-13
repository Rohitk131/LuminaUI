'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Globe, Rocket, Sparkles, Zap } from 'lucide-react';
import { motion } from "framer-motion";
import gsap from 'gsap';
import exploreone from "../../public/assets/exploreone.webp";
import explorethree from "../../public/assets/explorethree.webp";
import exploretwo from "../../public/assets/exploretwo.webp";

const icons = {
  Sparkles: <Sparkles className="w-10 h-10 text-white" />,
  Zap: <Zap className="w-10 h-10 text-white" />,
  Globe: <Globe className="w-10 h-10 text-white" />,
  Rocket: <Rocket className="w-10 h-10 text-white" />
};

const images = {
  exploreone,
  explorethree,
  exploretwo
};

const Cursor = ({ cardRef, isHovered }) => {
  const size = isHovered ? 60 : 30;
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef<HTMLDivElement>(null);
  const delayedMouse = useRef({ x: 0, y: 0 });

  const manageMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      mouse.current = { x: centerX + deltaX, y: centerY + deltaY };

      if (circle.current) {
        circle.current.style.opacity = "1";
      }
    } else {
      if (circle.current) {
        circle.current.style.opacity = "0";
      }
      return;
    }
    
    moveCircle(mouse.current.x, mouse.current.y);
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    if (!circle.current) return;
    gsap.set(circle.current, {
      x: x,
      y: y,
      xPercent: -50,
      yPercent: -50
    });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.1),
      y: lerp(y, mouse.current.y, 0.1)
    };
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (cardRef.current && circle.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouse.current = { x: centerX, y: centerY };
      delayedMouse.current = { x: centerX, y: centerY };
      moveCircle(centerX, centerY);
    }

    const animationFrame = requestAnimationFrame(animate);
    const currentRef = cardRef.current;

    if (currentRef) {
      currentRef.addEventListener('mousemove', manageMouseMove);
      return () => {
        currentRef.removeEventListener('mousemove', manageMouseMove);
        cancelAnimationFrame(animationFrame);
      };
    }
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [cardRef]);

  return (
    <div 
      ref={circle} 
      style={{
        width: size,
        height: size,
        opacity: 1,
        pointerEvents: 'none',
        filter: `blur(${isHovered ? 10 : 0}px)`,
        transition: 'height 0.25s ease-out, width 0.25s ease-out, filter 0.25s ease-out',
      }} 
      className='absolute bg-[#BCE4F2] rounded-full mix-blend-difference z-50 pointer-events-none'
    />
  );
};

const CardQueue = ({ cards }) => {
  const random = () => Math.random() * 10 - 5;
  const cardRotations = useRef(cards.map(() => random()));
  const [hoveredStates, setHoveredStates] = useState(Array(cards.length).fill(false));

  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
    Array(cards.length).fill(null).map(() => React.createRef<HTMLDivElement>())
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("h2 span", {
        y: 100,
        opacity: 0,
        stagger: 0.25,
        duration: 0.25,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (index: number, isHovered: boolean) => {
    setHoveredStates(prev => {
      const newStates = [...prev];
      newStates[index] = isHovered;
      return newStates;
    });
  };

  return (
    <div className="w-full lg:h-[70vh] overflow-y-auto hide-scrollbar p-20" ref={containerRef}>
      <div className="flex flex-col items-center justify-center gap-10">
        {cards.map((card, index) => (
          
          <motion.div
            key={card.id}
            ref={cardRefs.current[index]}
            className="flex flex-col md:flex-row h-auto lg:h-[50vh] w-[40vh] md:w-[50vw] bg-black rounded-2xl sticky top-0 relative overflow-hidden isolation"
            style={{ rotate: `${cardRotations.current[index]}deg` }}
          >
            <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-screen h-full dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
            <svg
              aria-hidden="true"
              className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
            >
              <defs>
                <pattern
                  id="grid-pattern"
                  width="72"
                  height="56"
                  patternUnits="userSpaceOnUse"
                  x="-12"
                  y="4"
                >
                  <path d="M.5 56V.5H72" fill="none" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#grid-pattern)"
              />
            </svg>
          </div>
        </div>
      </div>

            <div className="left w-full md:w-1/2 h-full text-white flex flex-col items-center justify-center gap-6 absolute z-10 px-6 md:px-12">
              <h2 className="text-xl md:text-3xl font-extrabold tracking-wide text-center leading-tight">
                {card.title.split('').map((char, index) => (
                  <span className="inline-block" key={index}>{char}</span>
                ))}
              </h2>

              <h5 
                onMouseEnter={() => handleHover(index, true)} 
                onMouseLeave={() => handleHover(index, false)} 
                className="text-sm md:text-lg text-center px-6 md:px-14 leading-relaxed text-gray-200"
              >
                {card.content}
              </h5>
              <div className='flex flex-row gap-3'>

              <h3 className="mt-2">
                <div className=" rounded-full bg-white/10 flex items-center justify-center">
                  {icons[card.icon]}
                </div>
              </h3>

              <button 
                onClick={() => window.open("https://luminaui.in", "_blank")} 
                className="bg-white text-black rounded-lg py-0 px-6 font-semibold text-base md:text-lg shadow-lg hover:scale-105 transition-transform"
                >
                Explore
              </button>
             
                </div>
            </div>

            <div className="right w-full md:w-1/2 flex items-center justify-center absolute top-1/2 right-0 md:right-8 -translate-y-1/2 z-10">
              <Image className="w-[160px] md:w-[240px] object-contain drop-shadow-lg" src={images[card.img]} alt="" />
            </div>

            <Cursor isHovered={hoveredStates[index]} cardRef={cardRefs.current[index]} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardQueue;
