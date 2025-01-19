'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CircularSlider = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [value, setValue] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const knobRef = useRef<HTMLDivElement>(null);
    const pointerRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<SVGCircleElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isRotating && knobRef.current && pointerRef.current && circleRef.current) {
                const knobRect = knobRef.current.getBoundingClientRect();
                const knobX = knobRect.left + knobRect.width / 2;
                const knobY = knobRect.top + knobRect.height / 2;

                const deltaX = e.clientX - knobX;
                const deltaY = e.clientY - knobY;

                const angleRad = Math.atan2(deltaY, deltaX);
                const angleDeg = (angleRad * 180) / Math.PI;

                let rotationAngle = (angleDeg - 135 + 360) % 360;

                if (rotationAngle <= 270) {
                    pointerRef.current.style.transform = `rotate(${rotationAngle - 45}deg)`;
                    const progressPercent = rotationAngle / 270;
                    circleRef.current.style.strokeDashoffset = `${880 - 660 * progressPercent}`;
                    setValue(Math.round(progressPercent * 100));
                }
            }
        };

        const handleMouseUp = () => {
            setIsRotating(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isRotating]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.target instanceof Element && e.target.closest('.knob')) {
            setIsRotating(true);
        }
    };

    // Get color based on value
    const getColor = () => {
        if (value < 33) return 'from-red-500 to-orange-500';
        if (value < 66) return 'from-orange-500 to-yellow-500';
        return 'from-green-400 to-emerald-500';
    };

    return (
        <div className="w-full h-96 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute inset-0 opacity-50">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            </div>

            <div className="w-full h-full flex items-center justify-center">
                <motion.div 
                    className="w-[300px] h-[300px] flex items-center justify-center relative select-none"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div
                        ref={knobRef}
                        className="knob w-[220px] h-[220px] bg-gradient-to-br from-slate-300 to-slate-100 dark:from-slate-700 dark:to-slate-900 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer"
                        onMouseDown={handleMouseDown}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <motion.div 
                            className="w-[180px] h-[180px] bg-gradient-to-br from-white to-slate-200 dark:from-slate-600 dark:to-slate-800 rounded-full shadow-lg flex items-center justify-center relative z-[1]"
                            animate={{
                                boxShadow: isHovered 
                                    ? '0 10px 30px -10px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.9)'
                                    : '0 5px 15px -5px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.9)'
                            }}
                        >
                            <motion.div 
                                className={`w-16 h-16 bg-gradient-to-br ${getColor()} rounded-full flex items-center justify-center shadow-lg`}
                                animate={{ scale: isRotating ? 1.1 : 1 }}
                            >
                                <span className="text-xl font-bold text-white">{value}</span>
                            </motion.div>
                        </motion.div>
                        
                        {/* Modern pointer indicator */}
                        <div
                            ref={pointerRef}
                            className="pointer absolute w-6 h-6 flex items-center justify-center"
                            style={{
                                top: "calc(50% - 12px)",
                                left: 0,
                                transformOrigin: '110px 12px',
                                transform: 'rotate(-45deg)'
                            }}
                        >
                            <motion.div
                                className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"
                                animate={{
                                    scale: isRotating ? 1.2 : 1,
                                    boxShadow: isRotating 
                                        ? '0 0 20px 2px rgba(59, 130, 246, 0.5)'
                                        : '0 0 10px 1px rgba(59, 130, 246, 0.3)'
                                }}
                            />
                        </div>
                    </div>

                    <svg className="w-[300px] h-[300px]">
                        <circle
                            cx="150"
                            cy="150"
                            r="140"
                            className="fill-none stroke-slate-300/20 dark:stroke-slate-700/20 stroke-[15px]"
                            style={{
                                strokeDasharray: 660,
                                transformOrigin: 'center',
                                transform: 'rotate(135deg)',
                                strokeLinecap: 'round'
                            }}
                        />
                        <circle
                            ref={circleRef}
                            cx="150"
                            cy="150"
                            r="140"
                            className="fill-none stroke-[url(#gradient)] stroke-[15px]"
                            style={{
                                strokeDasharray: 880,
                                strokeDashoffset: 880,
                                transformOrigin: 'center',
                                transform: 'rotate(135deg)',
                                strokeLinecap: 'round'
                            }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: 'rgb(239, 68, 68)' }} />
                                <stop offset="50%" style={{ stopColor: 'rgb(249, 115, 22)' }} />
                                <stop offset="100%" style={{ stopColor: 'rgb(16, 185, 129)' }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>
        </div>
    );
};

export default CircularSlider;