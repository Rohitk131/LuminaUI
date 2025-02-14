import StackedCards from "@/components/luminaui/stacked-cards";
import { Boxes, Brain, Rocket, Sparkles } from "lucide-react";

const StackedCardsPreview = () => {
  const cards = [
    {
      subtitle: "Neural Engine",
      content: "Train models at light speed",
      bgGradient: "bg-gradient-to-br from-[#0ea5e9] via-[#2563eb] to-[#4f46e5]",
      icon: <Sparkles className="text-sky-100" size={28} />,
      blur: "bg-blue-500/30",
      border: "border-blue-400/20",
      metric: "500x",
      description: "Faster Training",
    },
    {
      subtitle: "Hyper Compute",
      content: "Unlimited processing power",
      bgGradient: "bg-gradient-to-br from-[#f43f5e] via-[#e11d48] to-[#9f1239]",
      icon: <Rocket className="text-rose-100" size={28} />,
      blur: "bg-rose-500/30",
      border: "border-rose-400/20",
      metric: "10TB/s",
      description: "Processing Speed",
    },
    {
      subtitle: "Smart Scaling",
      content: "Auto-scaling architecture",
      bgGradient: "bg-gradient-to-br from-[#a855f7] via-[#9333ea] to-[#6b21a8]",
      icon: <Boxes className="text-purple-100" size={28} />,
      blur: "bg-purple-500/30",
      border: "border-purple-400/20",
      metric: "∞",
      description: "Scale Limit",
    },
    {
      subtitle: "Quantum Core",
      content: "Next-gen computation",
      bgGradient: "bg-gradient-to-br from-[#84cc16] via-[#65a30d] to-[#4d7c0f]",
      icon: <Brain className="text-lime-100" size={28} />,
      blur: "bg-lime-500/30",
      border: "border-lime-400/20",
      metric: "1ms",
      description: "Response Time",
    },
  ];

  return <StackedCards cards={cards} />;
};

export default StackedCardsPreview;
