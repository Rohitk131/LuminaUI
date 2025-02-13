"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Icons } from "@/components/icon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Requestcomponents from "@/components/requestcomponets";
import { useEffect, useRef, useState } from "react";
import FloatingIcons from "@/components/floatingIcons";
import GradientCircle from "./(docs)/docs/gradient-circle/GradientCircleDemo";
import Component from './examples/page';
import CardsQueuePreview from "./(docs)/docs/queuecards/queuecards";
import Spacebackground from "./(docs)/docs/spacebackground/spacebackground-demo";
import PerksCard from './(docs)/docs/Perks/FeatureGridDemo';
import SlideCard from './(docs)/docs/slide-card/SlideCard';

// Animations config moved outside component to prevent recreating on each render
const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  floating: {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  shine: {
    initial: { backgroundPosition: "200% 0" },
    animate: {
      backgroundPosition: ["-200% 0", "200% 0"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
};

export default function Home() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   axios
  //     .get("https://api.github.com/repos/rohitk131/luminaui", {
  //       signal: controller.signal,
  //     })
  //     .then((response) => setStar(response.data.stargazers_count))
  //     .catch((error) => {
  //       if (error.name !== "AbortError") {
  //         console.error("Error fetching GitHub data:", error);
  //       }
  //     });

  //   return () => controller.abort();
  // }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * (canvas.height * 0.8),
      size: Math.random() * 1 + 0,
      speed: 0.1 + Math.random() * 0.2,
      opacity: Math.random() * 0.5 + 0.5,
      pulse: Math.random() * Math.PI,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Enhanced star animation
      stars.forEach((star) => {
        star.pulse += 0.02;
        const currentOpacity = star.opacity * (0.7 + 0.3 * Math.sin(star.pulse));

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(200, 220, 255, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fill();

        star.x -= star.speed;
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * (canvas.height * 0.8);
        }
      });

      // Enhanced glow effect
      const time = Date.now() * 0.0008;
      const centerX = canvas.width / 2;
      const centerY = canvas.height * 1.6;
      const baseRadius = canvas.width * 0.8;
      const radius = baseRadius + Math.sin(time) * 80;

      const glow = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );

      glow.addColorStop(0, "rgba(96, 165, 250, 0.4)");
      glow.addColorStop(0.3, "rgba(59, 130, 246, 0.0)");
      glow.addColorStop(0.5, "rgba(0, 0, 0, 0)");
      glow.addColorStop(0.6, "rgba(37, 99, 235, 0.6)");
      glow.addColorStop(0.8, "rgba(0, 0, 0, 0)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.beginPath();
      ctx.fillStyle = glow;
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);


  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden text-zinc-800 dark:text-white">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full opacity-20 dark:opacity-100"
        style={{ touchAction: "none" }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto w-full max-w-screen-xl px-4 py-6 md:py-12 min-h-screen flex flex-col items-center justify-start mt-8 md:mt-12 lg:mt-0"
        variants={animations.container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-4xl w-full space-y-6 md:space-y-8 flex flex-col items-center justify-center md:mt-0 mt-8"
          variants={animations.item}
        >
          <div className="w-full flex justify-center">
            <Requestcomponents />
          </div>

          <div className="text-center space-y-4 md:space-y-6">
            <div className="lg:flex hidden">
              <FloatingIcons />
            </div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sans bg-gradient-to-b from-white via-blue-300 to-blue-600  text-transparent bg-clip-text pb-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ready-to-Use UI Components
              <br />
              <motion.span
                className="font-serif font-light italic"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Copy, Paste, and Relax
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base md:text-xl text-zinc-600 dark:text-gray-400 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Accelerate your project's growth with ready-to-use UI components
              that save time and elevate quality.
            </motion.p>
          </div>

          <div className="space-y-6 md:space-y-8 w-full backdrop-blur-sm bg-transparent dark:bg-transparent p-8 rounded-2xl border border-zinc-200 dark:border-gray-800/10">
            <div className="text-center">
              <motion.h2
                className="text-lg md:text-xl font-semibold text-zinc-700 dark:text-gray-400 mb-4 md:mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Built With
              </motion.h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {["nextjs", "shadcn", "tailwind"].map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={`./${tech}.svg`}
                      height={40}
                      width={
                        tech === "shadcn" ? 140 : tech === "tailwind" ? 120 : 90
                      }
                      alt={`${tech} logo`}
                      className="transition-transform filter dark:brightness-100 brightness-75"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
              <Link href="/docs" className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="w-full rounded-2xl bg-zinc-800 hover:bg-zinc-900 dark:bg-blue-500/80 dark:hover:bg-blue-500 border border-zinc-700 dark:border-blue-500/70 shadow-lg shadow-zinc-200 hover:shadow-zinc-300 dark:shadow-blue-500/20 dark:hover:shadow-blue-500/50 transition-all text-white"
                  >
                    Explore Components
                  </Button>
                </motion.div>
              </Link>

              <Link
                href="https://github.com/rohitk131/luminaui"
                className="w-full sm:w-auto"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full gap-3 rounded-2xl group hover:bg-zinc-100 dark:hover:bg-white/20 transition-colors border border-zinc-200 dark:border-gray-800/10 bg-white/80 dark:bg-transparent backdrop-blur-sm"
                    variant="secondary"
                    size="lg"
                  >
                    <Icons.gitHub className="w-5 h-5" />
                    <span>Star on GitHub</span>
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>


        </motion.div>

      </motion.div>
      <section className="relative z-10 bg-gradient-to-b from-transparent to-black/90 dark:to-black/50 py-24 rounded-2xl border-gray-400/20 border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
            Component Demos
          </h2>
          <p className="text-center text-lg text-zinc-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Discover our collection of beautiful, ready-to-use components for your next project.
          </p>

          <div className="space-y-16">
          <motion.div
              className="p-8 rounded-2xl bg-black/80 border border-gray-300/20"
              variants={animations.item}
            >
            
              <Spacebackground/>
            </motion.div>
            <motion.div
              className="p-8 rounded-2xl bg-black/80 border border-gray-300/20"
              variants={animations.item}
            >
            
              <PerksCard/>
            </motion.div>
            <motion.div
              className="p-8 rounded-2xl bg-black/80 border border-gray-300/20"
              variants={animations.item}
            >
              <h3 className="text-2xl font-semibold text-center text-white mb-8">
                Scroll me
              </h3>
              <CardsQueuePreview />
            </motion.div>
            <motion.div
              className="p-8 rounded-2xl bg-black/80 border border-gray-300/20"
              variants={animations.item}
            >
              <h3 className="text-2xl font-semibold text-center text-white mb-8">
                Hover me
              </h3>
              <div className="flex justify-center">
                <GradientCircle
                  size="300px"
                  gradientColors={["#FF0080", "#7928CA", "#00FFFF"]}
                  logoSrc="/logomain.png"
                />
              </div>
            </motion.div>

          
            <motion.div
              className="p-8 rounded-2xl bg-black/80 border border-gray-300/20"
              variants={animations.item}
            >
          
              <SlideCard/>
            </motion.div>
            
          </div>
        </div>
      </section>
      
    </div>
  );
}