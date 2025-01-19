"use client";
import * as React from "react";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface SlideCardProps extends Omit<MotionProps, "onAnimationStart" | "onAnimationComplete"> {
  className?: string;
  imageSrc: string;
  name: string; 
  role: string; 
  bio: string;
  socialLinks:string;
}
const MovingGradient = () => (
  <div className="absolute inset-0 h-full w-full overflow-hidden">
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent animate-[beam_3s_infinite]" />
    <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-[pulse_4s_infinite]" />
  </div>
);

const BorderGradient = () => (
  <>
    <div className="absolute top-0 left-0 w-[20%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-cyan-500 animate-[borderSlideRight_2s_infinite]" />
    <div className="absolute top-0 right-0 h-[20%] w-[2px] bg-gradient-to-b from-transparent via-cyan-500 to-emerald-500 animate-[borderSlideDown_2s_infinite]" />
    <div className="absolute bottom-0 right-0 w-[20%] h-[2px] bg-gradient-to-l from-transparent via-emerald-500 to-cyan-500 animate-[borderSlideLeft_2s_infinite]" />
    <div className="absolute bottom-0 left-0 h-[20%] w-[2px] bg-gradient-to-t from-transparent via-cyan-500 to-emerald-500 animate-[borderSlideUp_2s_infinite]" />
  </>
);

export const SlideCardDemo = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 relative">
       <div 
        className="absolute inset-0 opacity-60 dark:opacity-60" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.6) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      
 
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <SlideCard
        name="Bertram Gilfoyle"
        role="System Architecture"
        imageSrc="https://imgs.search.brave.com/R8M4EKyirh7MFMCQasRx36ti7nVO47SniRFE88A5Tnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Np/bGljb24tdmFsbGV5/L2ltYWdlcy8yLzIw/L0JlcnRyYW1fR2ls/Zm95bGUuanBnL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzIz/NT9jYj0yMDIxMDEw/NDIwMjYyOA"
        bio="Expert systems architect specializing in cryptography, network security, and distributed computing infrastructure."
        socialLinks={{
          github: "https://github.com/",
          linkedin: "https://linkedin.com/in/",
          twitter: "https://twitter.com/",
        }}
      />
    </div>
  );
};

const SlideCard = React.forwardRef<HTMLDivElement, SlideCardProps>(
  ({ className, imageSrc, name, role, bio, socialLinks, ...props }, ref) => {
    const [isHovered, setHovered] = React.useState(false);

    return (
      <motion.div
        ref={ref}
        className={cn(
          "h-[500px] w-[280px] md:w-[300px]",
          "group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl p-3",
          "bg-[#0B1120]",
          "before:absolute before:inset-0 before:rounded-2xl before:p-[2px]",
          "before:bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.2)_50%,transparent_75%,transparent_100%)]",
          "before:bg-[length:250%_250%] before:animate-[borderGradient_8s_linear_infinite]",
          "after:absolute after:inset-[1px] after:rounded-2xl after:bg-[#0B1120]/90",
          "hover:before:bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.3)_50%,transparent_75%,transparent_100%)]",
          className
        )}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        {...props}
      >
        <BorderGradient />
        <div className="relative z-10 w-full h-full flex flex-col">
          <motion.div
            className="w-full bg-[#111827] rounded-xl p-4 relative overflow-hidden border border-cyan-950"
            animate={{
              boxShadow: isHovered
                ? "0 0 25px 5px rgba(6, 182, 212, 0.2)"
                : "0 0 15px 2px rgba(6, 182, 212, 0.1)",
            }}
          >
            <MovingGradient />
            <div className="relative z-10 flex justify-between items-center">
              <div>
                <motion.h3
                  className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundSize: isHovered ? "200% 200%" : "100% 100%",
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {name}
                </motion.h3>
                <motion.p
                  className="text-sm text-cyan-200/60"
                  animate={{
                    color: isHovered
                      ? "rgb(103 232 249 / 0.8)"
                      : "rgb(103 232 249 / 0.6)",
                  }}
                >
                  {role}
                </motion.p>
              </div>
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-full animate-[spin_3s_linear_infinite]" />
                    <img
                      src={imageSrc}
                      alt={name}
                      className="w-16 h-16 rounded-full relative z-10 border-2 border-[#111827]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="flex-1 flex items-center justify-center py-6">
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div
                  key="image"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: -180 }}
                  transition={{ type: "spring", damping: 20 }}
                  className="relative group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-full blur-xl opacity-20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 animate-[spin_8s_linear_infinite]" />
                    <img
                      src={imageSrc}
                      alt={name}
                      className="w-48 h-48 rounded-full relative z-10 border-4 border-[#0B1120] p-[2px]"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="px-6 text-center space-y-6"
                >
                  <motion.p
                    className="text-cyan-200/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {bio ||
                      `${name} is a talented professional with expertise in their field.`}
                  </motion.p>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-sm font-semibold text-emerald-400/80">
                      Connect
                    </h4>
                    <div className="flex justify-center gap-4">
                      {socialLinks?.github && (
                        <motion.a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#111827] to-[#0B1120] text-emerald-400 shadow-lg shadow-cyan-500/20 border border-cyan-950 hover:border-cyan-500/50"
                        >
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </motion.a>
                      )}
                      {socialLinks?.linkedin && (
                        <motion.a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#111827] to-[#0B1120] text-cyan-400 shadow-lg shadow-cyan-500/20 border border-cyan-950 hover:border-cyan-500/50"
                        >
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </motion.a>
                      )}
                      {socialLinks?.twitter && (
                        <motion.a
                          href={socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#111827] to-[#0B1120] text-emerald-400 shadow-lg shadow-cyan-500/20 border border-cyan-950 hover:border-cyan-500/50"
                        >
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  }
);

SlideCard.displayName = "SlideCard";

export { SlideCard };
export default SlideCard;
