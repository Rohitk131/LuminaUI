'use client';
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
          .beam {
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translate(0, -50%) rotate(${beamRotation}deg);
            clip-path: polygon(0 0, 0% 100%, 100% 50%);
            background: rgba(255, 255, 0, 0.5);
            width: 100vw;
            height: 25vh;
            z-index: 1;
            transition: 0.2s ease-out;
            transform-origin: 100% 50%;
            pointer-events: none;
            max-height: 0;
            overflow: hidden;
          }
          .beam.on {
            max-height: 25vh;
          }
          .input-outline {
            border: 0.6mm dashed white;
            box-shadow: inset 0 0 0 2px black;
          }
          .input-outline:focus {
            border-color: yellow;
          }
          .password-wrapper {
            position: relative;
            z-index: 2;
          }
          .password-input {
            color: white !important;
            background: transparent;
          }
          .password-input.beam-visible {
            color: white !important;
            background: rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      <form className="w-fit h-fit flex flex-col items-center justify-center">
        <div className="w-[350px] h-fit relative flex flex-col items-start mb-6">
          <label className="font-poppins text-xl text-white mb-1">
            Password
          </label>
          <div className="password-wrapper relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className={`password-input w-full h-14 px-4 pr-12 input-outline font-poppins text-lg tracking-wider outline-none ${
                showPassword ? 'beam-visible' : ''
              }`}
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer">
              <button
                type="button"
                onClick={togglePassword}
                className="text-white"
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
