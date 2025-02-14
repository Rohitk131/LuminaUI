"use client";

import React from "react";
import GradientCircle from "@/components/luminaui/gradientcircles";

export const GradientCircleDemo = () => {
  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center">
      <span className="pointer-events-none py-2 mb-7 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      
      </span>
      <GradientCircle 
        size="300px"
        gradientColors={["#FF0080", "#7928CA", "#00FFFF"]}
        logoSrc="/logomain.png"
        orbitImages={[
          "https://www.svgrepo.com/show/475687/tinder-color.svg",
          "https://www.svgrepo.com/show/452080/paper-rocket.svg",
          "https://www.svgrepo.com/show/353735/firebase.svg"
        ]}
      />
    </div>
  );
};

export default GradientCircleDemo;