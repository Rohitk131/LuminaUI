"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Mail, Lock } from "lucide-react";

type ValidationType = "email" | "password";

interface ValidationProps {
  type: ValidationType;
  value: string;
}

const validateEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

const validatePassword = (password: string) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasNonalphas = /\W/.test(password);
  const hasMinLength = password.length >= 8;

  return {
    isValid:
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasNonalphas &&
      hasMinLength,
    strength: [
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasNonalphas,
      hasMinLength,
    ].filter(Boolean).length,
  };
};

const ValidationFeedback: React.FC<ValidationProps> = ({ type, value }) => {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    if (type === "email") {
      const valid = validateEmail(value);
      setIsValid(valid);
      setMessage(
        valid ? "Valid email address" : "Please enter a valid email address"
      );
    } else if (type === "password") {
      const { isValid, strength } = validatePassword(value);
      setIsValid(isValid);
      setStrength(strength);
      setMessage(
        isValid
          ? "Strong password"
          : "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters"
      );
    }
  }, [type, value]);

  return (
    <div className="mt-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={message}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`text-sm ${isValid ? "text-green-400" : "text-red-400"}`}
        >
          {message}
        </motion.div>
      </AnimatePresence>
      {type === "password" && (
        <div className="mt-2 flex space-x-1">
          {[1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              className="h-1 w-full rounded-full bg-gray-700"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: strength >= index ? 1 : 0 }}
              style={{
                originX: 0,
                backgroundColor:
                  strength >= 4
                    ? "#10B981"
                    : strength >= 3
                    ? "#FBBF24"
                    : strength >= 2
                    ? "#F59E0B"
                    : strength >= 1
                    ? "#EF4444"
                    : "#374151",
              }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const InputWithValidation: React.FC<{ type: ValidationType }> = ({ type }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const isValid =
    type === "email" ? validateEmail(value) : validatePassword(value).isValid;

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <input
          type={type === "email" ? "email" : "password"}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-10 py-2 text-lg rounded-lg bg-gray-800 text-white border-2 transition-all duration-300 ${
            isFocused
              ? "border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              : isValid
              ? "border-green-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              : value
              ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
              : "border-gray-600"
          }`}
          placeholder={
            type === "email" ? "Enter your email" : "Enter your password"
          }
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          {type === "email" ? (
            <Mail
              className={`w-5 h-5 ${
                value
                  ? isValid
                    ? "text-green-400"
                    : "text-red-400"
                  : "text-gray-400"
              }`}
            />
          ) : (
            <Lock
              className={`w-5 h-5 ${
                value
                  ? isValid
                    ? "text-green-400"
                    : "text-red-400"
                  : "text-gray-400"
              }`}
            />
          )}
        </div>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <AnimatePresence mode="wait">
            {value && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isValid ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <X className="w-5 h-5 text-red-400" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <ValidationFeedback type={type} value={value} />
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Smart Input with Validation
      </h1>
      <div className="space-y-8 w-full max-w-md">
        <InputWithValidation type="email" />
        <InputWithValidation type="password" />
      </div>
    </div>
  );
}
