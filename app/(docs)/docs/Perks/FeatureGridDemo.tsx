import React from 'react';
import PerksCard from '@/components/luminaui/perkscard';
import { Check, Gauge, Code, Cpu } from 'lucide-react';

const FeatureCards = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-12 relative">
      {/* Background patterns */}
      <div 
        className="absolute inset-0 opacity-60 dark:opacity-40" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-white/60 bg-clip-text text-transparent tracking-tight">
          Why Developers Choose Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400/80 text-lg tracking-wide">
          Streamlined solutions for modern web development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PerksCard
          icon={<Check className="h-6 w-6 text-pink-600 dark:text-pink-500" strokeWidth={2.5} />} 
          title="Zero Cost" 
          description="Forever free and community-driven, backed by MIT license freedom."
          gradient="bg-gradient-to-tr from-pink-500/5 via-transparent to-transparent dark:from-pink-500/10"
          border="border-pink-500/20 hover:border-pink-500/50"
          iconBg="bg-pink-500/10 dark:bg-pink-500/20"
          hoverText="group-hover:text-pink-600 dark:group-hover:text-pink-400"
          patternColor="bg-[radial-gradient(#FF13F0_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0]"
        />
        
        <PerksCard 
          icon={<Gauge className="h-6 w-6 text-purple-600 dark:text-purple-500" strokeWidth={2.5} />} 
          title="Lightweight" 
          description="90% smaller footprint than alternatives, without compromising power."
          gradient="bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent dark:from-purple-500/10"
          border="border-purple-500/20 hover:border-purple-500/50"
          iconBg="bg-purple-500/10 dark:bg-purple-500/20"
          hoverText="group-hover:text-purple-600 dark:group-hover:text-purple-400"
          patternColor="bg-[radial-gradient(#A855F7_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0]"
        />
        
        <PerksCard 
          icon={<Code className="h-6 w-6 text-blue-600 dark:text-blue-500" strokeWidth={2.5} />} 
          title="Enterprise-Grade" 
          description="Battle-tested TypeScript codebase with comprehensive testing."
          gradient="bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10"
          border="border-blue-500/20 hover:border-blue-500/50"
          iconBg="bg-blue-500/10 dark:bg-blue-500/20"
          hoverText="group-hover:text-blue-600 dark:group-hover:text-blue-400"
          patternColor="bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0]"
        />
        
        <PerksCard 
          icon={<Cpu className="h-6 w-6 text-emerald-600 dark:text-emerald-500" strokeWidth={2.5} />} 
          title="Maximum Performance" 
          description="Seamlessly blends JS flexibility with GPU-powered acceleration."
          gradient="bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent dark:from-emerald-500/10"
          border="border-emerald-500/20 hover:border-emerald-500/50"
          iconBg="bg-emerald-500/10 dark:bg-emerald-500/20"
          hoverText="group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
          patternColor="bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0]"
        />
      </div>
    </div>
  );
};

export default FeatureCards;
