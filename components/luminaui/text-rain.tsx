"use client";

import { useState, useEffect } from "react";

const TextRain = ({ heading, subheading }) => {
  const [letters, setLetters] = useState([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const [hoveredLetter, setHoveredLetter] = useState(null);

  useEffect(() => {
    const headingLetters = heading.split("").map((char, i) => ({
      char,
      id: `h-${i}`,
      isHeading: true,
      index: i,
      startDelay: Math.random() * 200,
      xOffset: Math.random() * 60 - 30,
    }));

    const subheadingLetters = subheading.split("").map((char, i) => ({
      char,
      id: `s-${i}`,
      isHeading: false,
      index: i,
      startDelay: Math.random() * 200 + 100,
      xOffset: Math.random() * 40 - 20,
    }));

    // Set letters immediately
    setLetters([...headingLetters, ...subheadingLetters]);

    const maxDelay = Math.max(
      ...[...headingLetters, ...subheadingLetters].map((l) => l.startDelay)
    );
    setTimeout(() => {
      setIsAnimating(false);
    }, maxDelay + 100);
  }, []);

  const getNeighborIndices = (id) => {
    const currentIndex = letters.findIndex((l) => l.id === id);
    return letters
      .map((l, i) => ({ id: l.id, distance: Math.abs(i - currentIndex) }))
      .filter(({ distance }) => distance <= 3);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-blue-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-1/2 h-1/2 bg-blue-500/20 rounded-full filter blur-[120px] -top-1/4 -left-1/4 animate-pulse" />
        <div className="absolute w-1/2 h-1/2 bg-purple-500/20 rounded-full filter blur-[120px] -bottom-1/4 -right-1/4 animate-pulse delay-1000" />
        <div className="absolute w-1/3 h-1/3 bg-cyan-500/20 rounded-full filter blur-[100px] top-1/2 left-1/2 animate-pulse delay-500" />
      </div>

      {/* Particle effect background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 perspective-1000">
        <div className="text-center">
          {/* Heading Container */}
          <div className="relative h-20 sm:h-24 md:h-32 mb-8 overflow-visible">
            <div className="flex justify-center flex-wrap">
              {letters
                .filter((l) => l.isHeading)
                .map((letter) => (
                  <div
                    key={letter.id}
                    className="relative inline-block transform-gpu"
                    onMouseEnter={() =>
                      !isAnimating && setHoveredLetter(letter.id)
                    }
                    onMouseLeave={() => setHoveredLetter(null)}
                    style={{
                      transform: isAnimating
                        ? `translateY(-100vh) translateX(${letter.xOffset}px) rotateX(360deg)`
                        : "translateY(0) translateX(0) rotateX(0)",
                      transition: `transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${letter.startDelay}ms`,
                    }}
                  >
                    <span
                      className="text-4xl sm:text-5xl md:text-7xl font-bold relative inline-block transition-all duration-300 cursor-pointer px-0.5"
                      style={{
                        transform:
                          !isAnimating &&
                          getNeighborIndices(letter.id).some(
                            (n) => n.id === hoveredLetter
                          )
                            ? `translateY(${
                                Math.sin(
                                  getNeighborIndices(letter.id).find(
                                    (n) => n.id === hoveredLetter
                                  ).distance
                                ) * 8
                              }px) 
                           scale(${
                             1 +
                             1 /
                               (getNeighborIndices(letter.id).find(
                                 (n) => n.id === hoveredLetter
                               ).distance +
                                 1)
                           })`
                            : "translateY(0) scale(1)",
                        color: getNeighborIndices(letter.id).some(
                          (n) => n.id === hoveredLetter
                        )
                          ? `hsl(${
                              210 +
                              getNeighborIndices(letter.id).find(
                                (n) => n.id === hoveredLetter
                              ).distance *
                                15
                            }, 100%, 70%)`
                          : "white",
                        textShadow: getNeighborIndices(letter.id).some(
                          (n) => n.id === hoveredLetter
                        )
                          ? "0 0 15px rgba(255,255,255,0.5)"
                          : "0 0 10px rgba(255,255,255,0.2)",
                        transition:
                          "transform 0.3s ease-out, color 0.3s ease-out, text-shadow 0.3s ease-out",
                      }}
                    >
                      {letter.char}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Subheading Container */}
          <div className="relative h-12 sm:h-16 md:h-20 overflow-visible">
            <div className="flex justify-center flex-wrap">
              {letters
                .filter((l) => !l.isHeading)
                .map((letter) => (
                  <div
                    key={letter.id}
                    className="relative inline-block transform-gpu"
                    onMouseEnter={() =>
                      !isAnimating && setHoveredLetter(letter.id)
                    }
                    onMouseLeave={() => setHoveredLetter(null)}
                    style={{
                      transform: isAnimating
                        ? `translateY(-100vh) translateX(${letter.xOffset}px) rotateX(360deg)`
                        : "translateY(0) translateX(0) rotateX(0)",
                      transition: `transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${letter.startDelay}ms`,
                    }}
                  >
                    <span
                      className="text-xl sm:text-2xl md:text-3xl font-light relative inline-block transition-all duration-300 cursor-pointer px-0.5"
                      style={{
                        transform:
                          !isAnimating &&
                          getNeighborIndices(letter.id).some(
                            (n) => n.id === hoveredLetter
                          )
                            ? `translateY(${
                                Math.sin(
                                  getNeighborIndices(letter.id).find(
                                    (n) => n.id === hoveredLetter
                                  ).distance
                                ) * 4
                              }px)
                           scale(${
                             1 +
                             0.5 /
                               (getNeighborIndices(letter.id).find(
                                 (n) => n.id === hoveredLetter
                               ).distance +
                                 1)
                           })`
                            : "translateY(0) scale(1)",
                        color: getNeighborIndices(letter.id).some(
                          (n) => n.id === hoveredLetter
                        )
                          ? `hsl(${
                              170 +
                              getNeighborIndices(letter.id).find(
                                (n) => n.id === hoveredLetter
                              ).distance *
                                20
                            }, 100%, 80%)`
                          : "rgb(148, 163, 184)",
                        textShadow: getNeighborIndices(letter.id).some(
                          (n) => n.id === hoveredLetter
                        )
                          ? "0 0 10px rgba(255,255,255,0.3)"
                          : "0 0 5px rgba(255,255,255,0.1)",
                        transition:
                          "transform 0.3s ease-out, color 0.3s ease-out, text-shadow 0.3s ease-out",
                      }}
                    >
                      {letter.char}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Enhanced ground reflection */}
        <div className="absolute bottom-0 w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="h-24 bg-gradient-to-t from-blue-950/50 to-transparent" />
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-80" />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          75% {
            transform: translateY(20px) translateX(-10px);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TextRain;
