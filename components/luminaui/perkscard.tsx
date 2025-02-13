import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string; // Tailwind color class for styling
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, colorClass }) => {
  return (
    <div className="group relative h-[240px] transition-all duration-700">
      {/* Hover Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-tr ${colorClass}/5 via-transparent to-transparent dark:${colorClass}/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />

      {/* Main Card */}
      <div className={`relative h-full bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-opacity-20 overflow-hidden hover:border-opacity-50 transition-all duration-700 group-hover:bg-white/60 dark:group-hover:bg-black/40 border-${colorClass}`}>
        {/* Background Dots */}
        <div 
          className="absolute inset-0 opacity-20 dark:opacity-25 transition-all duration-700 group-hover:opacity-30 dark:group-hover:opacity-40"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '18px 18px',
            backgroundPosition: '0 0',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-black" />

        {/* Card Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Icon */}
          <div className={`h-12 w-12 rounded-full ${colorClass}/10 dark:${colorClass}/20 flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700`}>
            {icon}
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <h3 className={`text-2xl font-semibold text-gray-900 dark:text-white/90 tracking-wide group-hover:text-${colorClass} transition-colors`}>
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
