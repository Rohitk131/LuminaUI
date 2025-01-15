"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react";

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
  const [isChecking, setIsChecking] = useState(false);
  const [isStep1Checked, setIsStep1Checked] = useState(false);

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === steps.length - 1) {
      onComplete();
    }
  }, [currentStep, steps.length, onComplete]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const checkStep1 = useCallback(() => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setIsStep1Checked(true);
    }, 1500);
  }, []);

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-gray-900 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-800 relative">
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
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

      <div className="flex flex-col gap-4">
        {currentStep === 0 && !isStep1Checked && (
          <motion.button
            onClick={checkStep1}
            className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isChecking ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Check className="mr-2 h-4 w-4" />
            )}
            Check Step 1
          </motion.button>
        )}
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
            disabled={currentStep === 0 && !isStep1Checked}
            className={`px-6 py-3 ${
              currentStep === steps.length - 1
                ? "bg-gradient-to-r from-green-600 to-green-900 hover:from-green-700 hover:to-green-900"
                : "bg-indigo-600 hover:bg-indigo-700"
            } text-white rounded-lg flex items-center transition-colors ${
              currentStep === 0 && !isStep1Checked
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentStep === steps.length - 1 ? "Complete" : "Next"}
            <ChevronRight size={20} className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [completed, setCompleted] = useState(false);

  const steps = [
    { title: "Initiate Process" },
    { title: "Configure Settings" },
    { title: "Final Review" },
  ];

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {!completed ? (
          <StepperWizard steps={steps} onComplete={handleComplete} />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="text-center bg-gray-900 p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-800"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check size={40} className="text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Process Completed!
            </h2>
            <p className="text-gray-400">
              Thank you for completing all the steps.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
