"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface Step {
  title: string;
}

interface StepperWizardProps {
  steps: Step[];
  onComplete: () => void;
}

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const StepperWizard: React.FC<StepperWizardProps> = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  }, [currentStep, steps.length, onComplete]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-gray-900 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-800 relative">
      <div className="flex justify-between mb-12 relative">
        {/* Connecting Line */}
        <div
          className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 z-0"
          style={{
            background: `linear-gradient(to right, ${
              currentStep >= 1 ? "green" : "gray"
            } 0%, ${currentStep >= 1 ? "green" : "gray"} ${
              (currentStep / (steps.length - 1)) * 100
            }%, gray ${(currentStep / (steps.length - 1)) * 100}%, gray 100%)`,
          }}
        />

        {/* Step Indicators */}
        {steps.map((_, index) => (
          <motion.div
            key={index}
            className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
              index <= currentStep ? "bg-gray-800" : "bg-gray-900"
            } border-2 ${
              index < currentStep
                ? "border-green-500"
                : index === currentStep
                ? "border-indigo-500"
                : "border-gray-700"
            }`}
            initial={false}
            animate={{
              scale: index === currentStep ? 1.1 : 1,
              boxShadow:
                index === currentStep
                  ? "0 0 0 4px rgba(99,102,241,0.2)"
                  : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="text-white font-bold"
              initial={false}
              animate={{
                opacity: index <= currentStep ? 1 : 0.5,
              }}
              transition={{ duration: 0.3 }}
            >
              {index < currentStep ? (
                <Check size={20} className="text-green-500" />
              ) : (
                index + 1
              )}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, type: "spring" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Step {currentStep + 1}
          </h2>
          <p className="text-gray-400">{steps[currentStep].title}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between">
        <motion.button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="mr-7 px-6 py-3 bg-gray-800 text-white rounded-lg flex items-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} className="mr-2" />
          Previous
        </motion.button>
        <motion.button
          onClick={nextStep}
          className={`px-6 py-3 ${
            currentStep === steps.length - 1
              ? "bg-gradient-to-r from-green-600 to-green-900 hover:from-green-700 hover:to-green-900"
              : "bg-indigo-600 hover:bg-indigo-700"
          } text-white rounded-lg flex items-center transition-colors`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentStep === steps.length - 1 ? "Complete" : "Next"}
          <ChevronRight size={20} className="ml-2" />
        </motion.button>
      </div>
    </div>
  );
};

export default StepperWizard;
