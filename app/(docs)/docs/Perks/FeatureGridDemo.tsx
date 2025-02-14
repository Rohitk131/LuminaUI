import FeatureCards from "@/components/luminaui/perkscard";
import { Check, Code, FireExtinguisher, NotebookIcon , Gauge, Cpu } from "lucide-react";

export default function PerksGrid() {
  const info = [
    {
      title: 'Feature Card',
      content: 'Forever free and community-driven, backed by MIT license freedom.',
      icon: <Check />,
      colorClass: 'pink-500',
    },
    {
      title: 'Lightweight',
      content: '90% smaller footprint than alternatives, without compromising power.',
      icon: <Gauge />,
      colorClass: 'red-500',
    },
    {
      title: 'Enterprise-Grade',
      content: 'Battle-tested TypeScript codebase with comprehensive testing.',
      icon: <Code />,
      colorClass: 'purple-500',
    },
    {
      title: 'Maximum Performance',
      content: 'Seamlessly blends JS flexibility with GPU-powered acceleration.',
      icon: <Cpu />,
      colorClass: 'green-500',
    }
  ];

  return (
    <FeatureCards info={info} />
  );
}