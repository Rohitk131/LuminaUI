'use client'
import { useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';

const PasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [beamRotation, setBeamRotation] = useState(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    const mouseY = event.clientY;
    const rotationRange = 8;
    const rotationAngle = (mouseY / window.innerHeight) * rotationRange - rotationRange / 2;
    setBeamRotation(-rotationAngle);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div 
      className="w-full h-60 bg-black flex items-center justify-center transform-gpu"
      onMouseMove={handleMouseMove}
    >
      <style>
        {`
          @keyframes beamGlow {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }

          .beam {
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translate(0, -50%) rotate(${beamRotation}deg);
            clip-path: polygon(0 0, 0% 100%, 100% 50%);
            background: linear-gradient(90deg, 
              rgba(255,255,0,0) 0%,
              rgba(255,255,0,0.3) 50%,
              rgba(255,255,0,0.8) 100%
            );
            width: 100vw;
            height: 25vh;
            z-index: 1;
            transition: transform 0.2s ease-out;
            transform-origin: 100% 50%;
            pointer-events: none;
            max-height: 0;
            overflow: hidden;
            animation: beamGlow 2s infinite;
          }

          .beam.on {
            max-height: 25vh;
          }

          .input-container {
            position: relative;
            z-index: 2;
          }

          .input-outline {
            border: 0.6mm dashed white;
            box-shadow: inset 0 0 0 2px black;
            transition: all 0.3s ease;
          }

          .input-outline:focus {
            border-color: yellow;
          }

          .password-input {
            position: relative;
            background: transparent !important;
          }

          .password-input.beam-visible {
            background: rgba(255, 255, 0, 0.1) !important;
            color: white !important;
            text-shadow: 0 0 8px rgba(0,0,0,0.5);
          }

          .eye-button {
            position: relative;
            z-index: 3;
          }

          .eye-button svg {
            filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
          }
        `}
      </style>

      <form className="w-fit h-fit flex flex-col items-center justify-center">
        <div className="w-[350px] h-fit relative flex flex-col items-start mb-6">
          <label className="font-poppins text-xl text-white mb-1">
            Password
          </label>
          <div className="input-container relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className={`password-input w-full h-14 px-4 pr-12 input-outline font-poppins text-lg tracking-wider outline-none text-white ${
                showPassword ? 'beam-visible' : ''
              }`}
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer">
              <button
                type="button"
                onClick={togglePassword}
                className="eye-button text-white hover:text-yellow-400 transition-colors"
              >
                {showPassword ? (
                  <Eye className="w-6 h-6" />
                ) : (
                  <EyeOff className="w-6 h-6" />
                )}
              </button>
              <div className={`beam ${showPassword ? 'on' : ''}`} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;