'use client'
import React from 'react';

const Button3D = () => {
  return (
    <div className="w-full h-28  m-0 p-0">
      <div className="w-full h-full flex items-center justify-center">
        <button 
          type="button"
          className="w-[140px] h-[50px] relative bg-transparent outline-none border-none p-0 m-0"
        >
          <div className="top w-full h-full bg-[#ffffe8] font-['Poppins'] text-base font-medium text-[#242622] flex items-center justify-center rounded-[7mm] outline outline-2 outline-[#242622] transition-transform duration-200 relative overflow-hidden">
            Click Me!
          </div>
          <div className="bottom absolute w-full h-full bg-[#e5e5c7] top-[10px] left-0 rounded-[7mm] outline outline-2 outline-[#242622] -z-[1]" />
        </button>
      </div>

      <style jsx>{`
        /* Base styles */
        button {
          position: relative;
        }

        /* Bottom edge styling */
        .bottom::before,
        .bottom::after {
          position: absolute;
          content: "";
          width: 2px;
          height: 9px;
          background: rgb(36, 38, 34);
          bottom: 0;
        }

        .bottom::before {
          left: 15%;
        }

        .bottom::after {
          left: 85%;
        }

        /* Button press animation */
        button:active .top {
          transform: translateY(10px);
        }

        /* Shadow layer */
        button::before {
          position: absolute;
          content: "";
          width: calc(100% + 2px);
          height: 100%;
          background: rgb(140, 140, 140);
          top: 14px;
          left: -1px;
          border-radius: 7mm;
          outline: 2px solid rgb(36, 38, 34);
          z-index: -1;
        }

        /* Shine effect */
        .top::before {
          position: absolute;
          content: "";
          width: 15px;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
          transform: skewX(30deg);
          left: -20px;
          transition: 0.25s;
        }

        /* Shine animation on click */
        button:active .top::before {
          left: calc(100% + 20px);
        }

        /* Optional hover effect */
        button:hover .top {
          background: rgb(250, 250, 230);
        }

        /* Add some depth to the button when pressing */
        button:active::before {
          transform: translateY(1px);
        }

        /* Smooth transition for all effects */
        .top,
        .bottom,
        button::before {
          transition: all 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default Button3D;