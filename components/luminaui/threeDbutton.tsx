'use client'
import React from 'react';

interface Button3DProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button3D: React.FC<Button3DProps> = ({ 
  text, 
  onClick, 
  className = '' 
}) => {
  return (
    <div className={`w-full h-28 m-0 p-0 ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        <button 
          type="button"
          onClick={onClick}
          className="w-[140px] h-[50px] relative bg-transparent outline-none border-none p-0 m-0 group"
        >
          <div className="top w-full h-full bg-[#ffffe8] font-['Poppins'] text-base font-medium text-[#242622] flex items-center justify-center rounded-[7mm] outline outline-2 outline-[#242622] transition-transform duration-200 relative overflow-hidden group-active:translate-y-[10px]">
            {text}
          </div>
          <div className="bottom absolute w-full h-full bg-[#e5e5c7] top-[10px] left-0 rounded-[7mm] outline outline-2 outline-[#242622] -z-[1]" />
          
          {/* Shadow layer */}
          <div className="absolute w-[calc(100%+2px)] h-full bg-[#8c8c8c] top-[14px] left-[-1px] rounded-[7mm] outline outline-2 outline-[#242622] -z-[2]" />
        </button>
      </div>

      <style jsx>{`
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

        button:active .top::before {
          left: calc(100% + 20px);
        }

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
      `}</style>
    </div>
  );
};

export default Button3D;