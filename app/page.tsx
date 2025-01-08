"use client";

import { motion } from "framer-motion";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import { Icons } from "@/components/icon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Requestcomponents from "@/components/requestcomponets";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [star, setStar] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/arihantcodes/spectrum-ui")
      .then((response) => setStar(response.data.stargazers_count))
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, []);

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
      size: Math.random() * 2 + 0.5,
      speed: 0.1 + Math.random() * 0.4,
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
      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height + 50;
      const baseRadius = canvas.width * 0.9;
      const radius = baseRadius + Math.sin(time) * 50;

      const glow = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );

      glow.addColorStop(0, "rgba(96, 165, 250, 0.4)");
      glow.addColorStop(0.3, "rgba(59, 130, 246, 0.3)");
      glow.addColorStop(0.6, "rgba(37, 99, 235, 0.2)");
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
    <div className="relative min-h-screen w-full overflow-hidden ">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />

      <motion.div
        className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="max-w-4xl w-full space-y-8"
          variants={staggerItem}
        >
          <Requestcomponents />

          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-sans">
              Ready-to-Use UI Components 
              Simply{' '}
          
                <span className="text-neutral-100 font-serif">Copy, Paste, and Relax</span>
           
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Accelerate your project's growth with ready-to-use UI components that save time and elevate quality
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-400 mb-6">Built With</h2>
              <div className="flex flex-wrap justify-center gap-8">
                <Image src="./nextjs.svg" height={40} width={90} alt="next js" className="hover:scale-110 transition-transform" />
                <Image src="./shadcn.svg" height={40} width={140} alt="shadcn ui" className="hover:scale-110 transition-transform" />
                <Image src="./tailwind.svg" height={40} width={120} alt="tailwind css" className="hover:scale-110 transition-transform" />
                <Image src="./aceternity.svg" height={40} width={160} alt="acternity ui" className="hover:scale-110 transition-transform" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 border-0 shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Explore Components
                </Button>
              </Link>
              <Link href="https://github.com/arihantcodes/spectrum-ui">
                <Button
                  className="w-full sm:w-auto gap-3 rounded-2xl group hover:bg-white/20 transition-colors"
                  variant="secondary"
                  size="lg"
                >
                  <Icons.gitHub className="w-5 h-5" />
                  <span>Star on GitHub</span>
                  <span className="bg-white/10 px-2 py-1 rounded-lg text-sm">
                    {star}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}