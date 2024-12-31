"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      className="relative w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 dark:from-indigo-500 dark:to-purple-700 p-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 dark:focus:ring-offset-gray-900 dark:focus:ring-white"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center"
        >
          {theme === "light" ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-indigo-200" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}

function TransitionEffect() {
  const { theme } = useTheme();
  const [prevTheme, setPrevTheme] = React.useState<string | undefined>(
    undefined
  );

  React.useEffect(() => {
    if (theme !== prevTheme) {
      setPrevTheme(theme);
    }
  }, [theme, prevTheme]);

  return (
    <AnimatePresence mode="wait">
      {theme !== prevTheme && (
        <motion.div
          key={theme}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          <div className="w-full h-full bg-white dark:bg-gray-900 transition-colors duration-300" />
          <motion.div
            className="absolute"
            initial={{ scale: 0 }}
            animate={{ scale: 4 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {theme === "dark" ? (
              <Moon className="w-16 h-16 text-white" />
            ) : (
              <Sun className="w-16 h-16 text-yellow-400" />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col items-center justify-center p-24 transition-colors duration-300 ease-in-out dark:bg-gray-900">
        <ThemeToggle />
        <main className="mt-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Animated Theme Toggle Demo
          </h1>
        </main>
        <TransitionEffect />
      </div>
    </ThemeProvider>
  );
}
