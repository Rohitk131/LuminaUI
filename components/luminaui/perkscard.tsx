import React from 'react';
import { cn } from "@/lib/utils"; // Utility for conditional class names (optional)

interface SlideCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  border: string;
  iconBg: string;
  hoverText: string;
  patternColor: string;
}

const SlideCard: React.FC<SlideCardProps> = ({ 
  icon, 
  title, 
  description, 
  gradient, 
  border, 
  iconBg, 
  hoverText, 
  patternColor 
}) => {
  return (
    <div className="group relative h-[240px] transition-all duration-700">
      <div className={cn("absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700", gradient)} />
      <div className={cn(
        "relative h-full bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-xl p-8 border overflow-hidden transition-all duration-700 group-hover:bg-white/60 dark:group-hover:bg-black/40",
        border
      )}>
        <div 
          className={cn("absolute inset-0 opacity-20 dark:opacity-25 transition-all duration-700 group-hover:opacity-30 dark:group-hover:opacity-40", patternColor)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-black" />

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className={cn("h-12 w-12 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700", iconBg)}>
            {icon}
          </div>

          <div className="space-y-2">
            <h3 className={cn("text-2xl font-semibold text-gray-900 dark:text-white/90 tracking-wide transition-colors", hoverText)}>
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
