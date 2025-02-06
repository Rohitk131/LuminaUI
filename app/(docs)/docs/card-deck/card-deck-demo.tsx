import CardDeck from "@/components/luminaui/card-deck";
import { Sparkles, Zap, Globe, Rocket } from "lucide-react";

export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Quantum Leap",
      content:
        "Exploring the frontiers of quantum computing and its potential to revolutionize data processing.",
      color: "from-blue-500 to-indigo-500",
      icon: <Sparkles className="w-8 h-8" />,
      stats: [
        { label: "Qubits", value: "1024" },
        { label: "Coherence", value: "100μs" },
        { label: "Error Rate", value: "0.1%" },
      ],
    },
    {
      id: 2,
      title: "Neon Dreams",
      content:
        "Visualizing the future of augmented reality and its impact on human interaction.",
      color: "from-red-500 to-yellow-500",
      icon: <Zap className="w-8 h-8" />,
      stats: [
        { label: "Resolution", value: "8K" },
        { label: "FOV", value: "210°" },
        { label: "Latency", value: "<5ms" },
      ],
    },
    {
      id: 3,
      title: "Cyber Nexus",
      content:
        "Connecting minds in the digital realm through advanced neural interfaces.",
      color: "from-teal-500 to-green-500",
      icon: <Globe className="w-8 h-8" />,
      stats: [
        { label: "Bandwidth", value: "1 Tbps" },
        { label: "Users", value: "1B+" },
        { label: "Uptime", value: "99.99%" },
      ],
    },
    {
      id: 4,
      title: "Stellar Voyage",
      content:
        "Charting a course through the cosmos with next-generation propulsion systems.",
      color: "from-pink-500 to-purple-500",
      icon: <Rocket className="w-8 h-8" />,
      stats: [
        { label: "Speed", value: "0.1c" },
        { label: "Range", value: "50 ly" },
        { label: "Efficiency", value: "99.9%" },
      ],
    },
  ];

  return <CardDeck cards={cards} />;
}
