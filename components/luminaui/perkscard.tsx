import React from "react";
import { Check } from "lucide-react";

// Types remain the same...
type Card = {
  title: string;
  content: string;
  icon: JSX.Element;
  colorClass: string;
};

type FeatureCardsProps = {
  info: Card[];
};

type ColorConfig = {
  text: string;
  bg: string;
  bgOpacity: string;
  border: string;
  gradientFrom: string;
  gradientTo: string;
  dotBg: string;
  hoverBorder: string;
};

type ColorClassMap = {
  [key: string]: ColorConfig;
};

const colorClassMap: ColorClassMap = {
  'pink-500': {
    text: 'text-pink-500',
    bg: 'bg-pink-500',
    bgOpacity: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    hoverBorder: 'group-hover:border-pink-500',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-pink-500',
    dotBg: 'bg-[radial-gradient(#EC4899_1px,transparent_1px)]',
  },
  'red-500': {
    text: 'text-red-500',
    bg: 'bg-red-500',
    bgOpacity: 'bg-red-500/10',
    border: 'border-red-500/20',
    hoverBorder: 'group-hover:border-red-500',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-red-500',
    dotBg: 'bg-[radial-gradient(#EF4444_1px,transparent_1px)]',
  },
  'purple-500': {
    text: 'text-purple-500',
    bg: 'bg-purple-500',
    bgOpacity: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    hoverBorder: 'group-hover:border-purple-500',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-purple-500',
    dotBg: 'bg-[radial-gradient(#A855F7_1px,transparent_1px)]',
  },
  'green-500': {
    text: 'text-green-500',
    bg: 'bg-green-500',
    bgOpacity: 'bg-green-500/10',
    border: 'border-green-500/20',
    hoverBorder: 'group-hover:border-green-500',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-green-500',
    dotBg: 'bg-[radial-gradient(#22C55E_1px,transparent_1px)]',
  },
};

const FeatureCards: React.FC<FeatureCardsProps> = ({ info = [] }) => {
  const getHoverColorClass = (colorClass: string) => {
    switch (colorClass) {
      case 'pink-500':
        return 'group-hover:text-pink-500';
      case 'red-500':
        return 'group-hover:text-red-500';
      case 'purple-500':
        return 'group-hover:text-purple-500';
      case 'green-500':
        return 'group-hover:text-green-500';
      default:
        return '';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 space-y-12 relative">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-white/60 bg-clip-text text-transparent tracking-tight">
          Why Developers Choose Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400/80 text-base sm:text-lg md:text-lg tracking-wide">
          Streamlined solutions for modern web development
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {info.map((card, index) => {
          const colorClass = colorClassMap[card.colorClass];
          const hoverColorClass = getHoverColorClass(card.colorClass);
          
          return (
            <div key={index} className="group relative h-[200px] sm:h-[220px] md:h-[240px] transition-all duration-700">
              <div className={`absolute inset-0 bg-gradient-to-tr ${colorClass.gradientFrom}/5 via-transparent to-transparent dark:${colorClass.gradientFrom}/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className={`relative h-full bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-md ${colorClass.border} ${colorClass.hoverBorder} transition-all duration-700 group-hover:bg-white/60 dark:group-hover:bg-black/40`}>
                <div className={`absolute inset-0 ${colorClass.dotBg} [background-size:18px_18px] [background-position:0_0] opacity-20 dark:opacity-25 transition-all duration-700 group-hover:opacity-30 dark:group-hover:opacity-40 group-hover:[background-size:14px_14px] group-hover:[background-position:7px_7px]`} />
                <div className="absolute inset-[1px] bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-black/80 rounded-xl" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full ${colorClass.bgOpacity} dark:${colorClass.bg}/20 flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700`}>

                  <div className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ${colorClass.text}`}
                  >
                    {card.icon}
                  </div>
                  
                    {/* <Check
                      strokeWidth={2.5}
                    /> */}
                  </div>

                  <div className="space-y-2">
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white/90 tracking-wide ${hoverColorClass} transition-colors`}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;