import React from "react";
import SpaceBackground from "./spacebackground-demoUI";

const HomePage = () => {
    return (
        <div className="relative w-full ">

            <SpaceBackground />

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-center text-8xl font-extrabold leading-none text-transparent dark:from-gray-500 dark:via-gray-300 dark:to-gray-100 dark:shadow-lg shadow-black/20">
                    Space Background
                </span>

            </div>
        </div>
    );
};

export default HomePage;
