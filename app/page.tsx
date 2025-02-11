"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Icons } from "@/components/icon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Requestcomponents from "@/components/requestcomponets";
import { useEffect, useRef, useState } from "react";
import FloatingIcons from "@/components/floatingIcons";

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
};

export default function Home() {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

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

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let animating = true;

    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
    };

    const stars = Array.from(
      { length: Math.min(200, window.innerWidth / 5) },
      () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.8),
        size: Math.random() * 1,
        speed: 0.1 + Math.random() * 0.2,
        opacity: Math.random() * 0.5 + 0.5,
        pulse: Math.random() * Math.PI,
      })
    );

    const animate = () => {
      if (!animating) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.0008;

      // Optimized star rendering
      stars.forEach((star) => {
        star.pulse += 0.02;
        const opacity = star.opacity * (0.7 + 0.3 * Math.sin(star.pulse));

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x -= star.speed;
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * (canvas.height * 0.8);
        }
      });

      // Optimized glow effect
      const centerX = canvas.width / 2;
      const centerY = canvas.height * 1.6;
      const radius = canvas.width * 0.8 + Math.sin(time) * 80;

      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      );

      glow.addColorStop(0, "rgba(96, 165, 250, 0.2)");
      glow.addColorStop(0.6, "rgba(37, 99, 235, 0.3)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(setCanvasSize);
    resizeObserver.observe(canvas);

    setCanvasSize();
    animate();

    return () => {
      animating = false;
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ touchAction: "none" }}
      />

      <motion.div
        className="relative z-10 container mx-auto px-4 py-6 md:py-12 min-h-screen flex flex-col items-center justify-start mt-8 md:mt-12"
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

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight font-sans bg-gradient-to-b from-white via-blue-300 to-blue-600 text-transparent bg-clip-text pb-2">
              Ready-to-Use UI Components
              <br />
              <span className="font-serif font-light italic text-2xl md:text-4xl lg:text-5xl">
                Copy, Paste, and Relax
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Accelerate your project's growth with ready-to-use UI components
              that save time and elevate quality.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8 w-full">
            <div className="text-center">
              <h2 className="text-lg md:text-xl font-semibold text-gray-400 mb-4 md:mb-6">
                Built With
              </h2>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {["nextjs", "shadcn", "tailwind"].map((tech) => (
                  <Image
                    key={tech}
                    src={`./${tech}.svg`}
                    height={40}
                    width={
                      tech === "shadcn" ? 140 : tech === "tailwind" ? 120 : 90
                    }
                    alt={`${tech} logo`}
                    className="hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
              <Link href="/docs" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-400 to-blue-300 hover:from-blue-500 hover:to-blue-400 border border-blue-500/70 shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Explore Components
                </Button>
              </Link>

              <Link
                href="https://github.com/rohitk131/luminaui"
                className="w-full sm:w-auto"
              >
                <Button
                  className="w-full gap-3 rounded-2xl group hover:bg-white/20 transition-colors border border-gray-800/10"
                  variant="secondary"
                  size="lg"
                >
                  <Icons.gitHub className="w-5 h-5" />
                  <span>Star on GitHub</span>
                  {/* <span className="bg-white/10 px-2 py-1 rounded-lg text-sm">
                    {star}
                  </span> */}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
