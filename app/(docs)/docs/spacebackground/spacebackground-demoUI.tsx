import React, { useMemo } from "react";

const SpaceBackground = () => {
  const starLayers = useMemo(() => {
    const generateStars = (count, sizeRange, opacityRange, speedRange) =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]),
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity:
          opacityRange[0] + Math.random() * (opacityRange[1] - opacityRange[0]),
        animationDuration: `${
          speedRange[0] + Math.random() * (speedRange[1] - speedRange[0])
        }s`,
        animationDelay: `${Math.random() * -speedRange[1]}s`,
      }));

    return {
      small: generateStars(100, [1, 2], [0.3, 0.6], [4, 8]),
      medium: generateStars(50, [2, 3], [0.5, 0.8], [6, 12]),
      large: generateStars(20, [3, 4], [0.7, 1], [10, 20]),
    };
  }, []);

  return (
    <div style={styles.container}>
      {/* Star layers */}
      {Object.entries(starLayers).map(([size, stars]) => (
        <div key={size} style={styles.layer}>
          {stars.map((star) => (
            <div
              key={star.id}
              style={{
                ...styles.star,
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: star.top,
                left: star.left,
                opacity: star.opacity,
                animation: `float ${star.animationDuration} infinite ease-in-out`,
                animationDelay: star.animationDelay,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${
                  star.opacity * 0.8
                })`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Nebula effects */}
      <div style={styles.nebulaOne} />
      <div style={styles.nebulaTwo} />

      {/* Keyframes */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translate(0, 0);
              opacity: 0.8;
            }
            25% {
              transform: translate(5px, -5px);
              opacity: 1;
            }
            50% {
              transform: translate(-5px, 5px);
              opacity: 0.6;
            }
            75% {
              transform: translate(5px, 10px);
              opacity: 0.9;
            }
            100% {
              transform: translate(0, 0);
              opacity: 0.8;
            }
          }
        `}
      </style>
    </div>
  );
};

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "relative",
    width: "100%",
    height: "60vh",
    overflow: "hidden",
    background: "linear-gradient(to bottom, #000000, #1a1a1a)",
  },
  layer: {
    position: "absolute",
    inset: 0,
  },
  star: {
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: "white",
  },
  nebulaOne: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle, rgba(128, 0, 128, 0.1), transparent 70%)",
  },
  nebulaTwo: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle, rgba(0, 128, 255, 0.05), transparent 70%)",
    transform: "translate(30%, 20%)",
  },
};

export default SpaceBackground;
