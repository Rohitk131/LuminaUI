import React from "react";
import { Check, Gauge, Code, Cpu } from "lucide-react";

const FeatureCards = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-12 relative">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-white/60 bg-clip-text text-transparent tracking-tight">
          Why Developers Choose Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400/80 text-lg tracking-wide">
          Streamlined solutions for modern web development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Free Card */}
        <div className="group relative h-[240px] transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 via-transparent to-transparent dark:from-pink-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative h-full bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20 overflow-hidden hover:border-pink-500/50 transition-all duration-700 group-hover:bg-white/60 dark:group-hover:bg-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(#FF13F0_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0] opacity-20 dark:opacity-25 transition-all duration-700 group-hover:opacity-30 dark:group-hover:opacity-40 group-hover:[background-size:14px_14px] group-hover:[background-position:7px_7px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-black" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-12 w-12 rounded-full bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700">
                <Check
                  className="h-6 w-6 text-pink-600 dark:text-pink-500"
                  strokeWidth={2.5}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white/90 tracking-wide group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  Zero Cost
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  Forever free and community-driven, backed by MIT license
                  freedom.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lightweight Card */}
        <div className="group relative h-[240px] transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent dark:from-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative h-full bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 overflow-hidden hover:border-purple-500/50 transition-all duration-700 group-hover:bg-white/60 dark:group-hover:bg-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(#A855F7_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0] opacity-20 dark:opacity-25 transition-all duration-700 group-hover:opacity-30 dark:group-hover:opacity-40 group-hover:[background-size:14px_14px] group-hover:[background-position:7px_7px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-black" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-12 w-12 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700">
                <Gauge
                  className="h-6 w-6 text-purple-600 dark:text-purple-500"
                  strokeWidth={2.5}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white/90 tracking-wide group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Lightweight
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  90% smaller footprint than alternatives, without compromising
                  power.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Card */}
        <div className="group relative h-[240px] transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent dark:from-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative h-full bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 overflow-hidden hover:border-blue-500/50 transition-all duration-700 group-hover:bg-white/60 dark:group-hover:bg-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0] opacity-20 dark:opacity-25 transition-all duration-700 group-hover:opacity-30 dark:group-hover:opacity-40 group-hover:[background-size:14px_14px] group-hover:[background-position:7px_7px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-black" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-12 w-12 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700">
                <Code
                  className="h-6 w-6 text-blue-600 dark:text-blue-500"
                  strokeWidth={2.5}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white/90 tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Enterprise-Grade
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  Battle-tested TypeScript codebase with comprehensive testing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Card */}
        <div className="group relative h-[240px] transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent dark:from-emerald-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative h-full bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-emerald-500/20 overflow-hidden hover:border-emerald-500/50 transition-all duration-700 group-hover:bg-white/60 dark:group-hover:bg-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:18px_18px] [background-position:0_0] opacity-20 dark:opacity-25 transition-all duration-700 group-hover:opacity-30 dark:group-hover:opacity-40 group-hover:[background-size:14px_14px] group-hover:[background-position:7px_7px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-black" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="h-12 w-12 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700">
                <Cpu
                  className="h-6 w-6 text-emerald-600 dark:text-emerald-500"
                  strokeWidth={2.5}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white/90 tracking-wide group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Maximum Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  Seamlessly blends JS flexibility with GPU-powered
                  acceleration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
