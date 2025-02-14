"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import StepperWizard from "@/components/luminaui/stepper-wizard";

export default function Demo() {
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
