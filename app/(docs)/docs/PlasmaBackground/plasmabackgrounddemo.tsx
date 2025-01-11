'use client';

import React, { useEffect, useRef } from "react";

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
        };

        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        const particles = Array.from({ length: 120 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            hue: Math.random() * 50 + 180, // Aqua to blue range
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(10, 10, 40, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw particles
            particles.forEach((particle, i) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 2
                );
                gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, 0.9)`);
                gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);
                ctx.fillStyle = gradient;
                ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
                ctx.fill();

                // Draw connections between particles
                particles.forEach((p2, j) => {
                    if (i === j) return;
                    const dx = particle.x - p2.x;
                    const dy = particle.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `hsla(${particle.hue}, 100%, 70%, ${0.2 * (1 - distance / 120)})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            // Enhanced glow effect
            const centerX = canvas.width / 2; // Horizontal center
            const centerY = canvas.height; // Bottom center
            const time = Date.now() * 0.002; // Increase time speed for noticeable pulse

            const glow = ctx.createRadialGradient(
                centerX, centerY, 0,               // Inner circle
                centerX, centerY, canvas.height * 0.8 // Outer circle
            );

            glow.addColorStop(0, `hsla(220, 100%, 70%, ${0.5 + Math.sin(time) * 0.2})`);
            glow.addColorStop(0.5, `hsla(240, 100%, 60%, ${0.3 + Math.sin(time * 1.5) * 0.1})`);
            glow.addColorStop(1, "hsla(260, 100%, 50%, 0)");

            ctx.globalCompositeOperation = "screen"; // Ensure it blends nicely
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "source-over";

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
        };
    }, []);

    return (
        <div className="relative w-full  " >
        <canvas ref={canvasRef} className="absolute " />
    </div>
    );
};

export default ParticleBackground;
