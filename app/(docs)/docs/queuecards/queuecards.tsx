import CardQueue from "@/components/luminaui/queue-cards";

const cardData = [
  {
    id: 1,
    title: "Quantum Leap",
    content: "Exploring the frontiers of quantum computing and its potential to revolutionize data processing.",
    color: "from-cyan-500 to-blue-500",
    icon: "Sparkles",
    img: "exploreone"
  },
  {
    id: 2,
    title: "Neon Dreams",
    content: "Visualizing the future of augmented reality and its impact on human interaction.",
    color: "from-purple-500 to-pink-500",
    icon: "Zap",
    img: "explorethree"
  },
  {
    id: 3,
    title: "Cyber Nexus",
    content: "Connecting minds in the digital realm through advanced neural interfaces.",
    color: "from-green-500 to-emerald-500",
    icon: "Globe",
    img: "exploretwo"
  },
  {
    id: 4,
    title: "Stellar Voyage",
    content: "Charting a course through the cosmos with next-generation propulsion systems.",
    color: "from-orange-500 to-red-500",
    icon: "Rocket",
    img: "explorethree"
  },
];

export default function CardsQueuePreview() {
  return <CardQueue cards={cardData} />;
}