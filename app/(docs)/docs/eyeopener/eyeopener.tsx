'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const EyeOpener = () => {
    const [rotate, setRotate] = useState(0);
    const [hoveredLeft, setHoveredLeft] = useState(false);
    const [hoveredRight, setHoveredRight] = useState(false);

    const leftEyeAudioRef = useRef(null);
    const rightEyeAudioRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e : any) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const playSound = (audioRef : any) => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; 
            audioRef.current.volume = 1.0; 
            audioRef.current.muted = false; 
            audioRef.current
                .play()
                .catch((err : any) => console.error("Audio playback error:", err));
        }
    };

    const concentricCircleAnimation = {
        animate: {
            scale: [0.5, 1, 1.5 ],
            opacity: [1, 0.5, 0 ],
        },
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeOut",
        },
    };

    return (
        <div className="upper h-full w-full flex items-center justify-center p-4">
            <div className="w-full flex flex-col items-center justify-center gap-5">
                <div className="eyes p-10 rounded-md z-10 flex flex-col items-center justify-center w-full max-w-screen-lg">
                    <div className="flex items-center justify-center gap-6 w-full h-full">
                        {/* Left Eye */}
                        <motion.div
                            style={{ transform: `rotate(${rotate}deg)` }}
                            className="flex items-center justify-center w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] aspect-[1/1] bg-zinc-200 rounded-full"
                        >
                            <motion.div
                                onHoverStart={() => {
                                    playSound(leftEyeAudioRef);
                                    setHoveredLeft(true)
                                }}
                                whileHover={{ scale: 1.2, opacity: 1 }}
                                transition={{ duration: 2 }}
                                onHoverEnd={() => setHoveredLeft(false)}
                                className="flex items-center w-[13vw] h-[13vw] bg-black rounded-full relative overflow-hidden"
                            >
                                {hoveredLeft ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {[...Array(5)].map((_, index) => (
                                            <motion.div
                                                key={index}
                                                className="absolute -translate-x-1/2 left-[.2rem] text-sm bg-zinc-900 rounded-full"
                                                style={{
                                                    width: `${5 + index * 4}vw`,
                                                    height: `${5 + index * 4}vw`,
                                                    borderWidth: "2px",
                                                    borderColor: "white",
                                                }}
                                                {...concentricCircleAnimation}
                                            >Fuck You</motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex items-center bg-white w-[5vw] sm:w-[4vw] md:w-[3vw] lg:w-[2vw] h-[5vw] sm:h-[4vw] md:h-[3vw] lg:h-[2vw] rounded-full">
                                        <motion.div
                                            className="bg-zinc-700 w-[4vw] sm:w-[3vw] md:w-[2vw] lg:w-[1.5vw] h-[4vw] sm:h-[3vw] md:h-[2vw] lg:h-[1.5vw] rounded-full"
                                        ></motion.div>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                        {/* Right Eye */}
                        <motion.div
                            style={{ transform: `rotate(${rotate}deg)` }}
                            className="flex items-center justify-center w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[15vw] aspect-[1/1] bg-zinc-200 rounded-full"
                        >
                            <motion.div
                                onHoverStart={() => {
                                    setHoveredRight(true);
                                    playSound(leftEyeAudioRef);
                                    
                                } }
                                onHoverEnd={() => setHoveredRight(false)}
                                whileHover={{ scale: 1.2, opacity: 1 }}
                                transition={{ duration: 2 }}

                                className="flex items-center w-[13vw] h-[13vw] bg-black rounded-full relative overflow-hidden"
                            >
                                {hoveredRight ? (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {[...Array(3)].map((_, index) => (
                                            <motion.div
                                                key={index}
                                                className="absolute text-black bg-white rounded-full text-center"
                                                style={{
                                                    width: `${5 + index * 4}vw`,
                                                    height: `${5 + index * 4}vw`,
                                                    borderWidth: "2px",
                                                    borderColor: "white",
                                                }}
                                                {...concentricCircleAnimation}
                                            ></motion.div>
                                        ))} <motion.span className="text-white">Fuck You</motion.span>
                                    </div>
                                ) : (
                                    <div className="flex items-center bg-white w-[5vw] sm:w-[4vw] md:w-[3vw] lg:w-[2vw] h-[5vw] sm:h-[4vw] md:h-[3vw] lg:h-[2vw] rounded-full">
                                        <motion.div
                                            className="bg-zinc-700 w-[4vw] sm:w-[3vw] md:w-[2vw] lg:w-[1.5vw] h-[4vw] sm:h-[3vw] md:h-[2vw] lg:h-[1.5vw] rounded-full"
                                        ></motion.div>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* Audio Elements */}
            <audio ref={leftEyeAudioRef} src="/sound.mp3" preload="auto"></audio>
            <audio ref={rightEyeAudioRef} src="/sound.mp3" preload="auto"></audio>
        </div>
    );
};

export default EyeOpener;
