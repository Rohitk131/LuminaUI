import NeonCard from "@/components/luminaui/neoncards";

export default function NeonCardDemo() {
  const info = [
    { id:1 , title: 'Neon Card', content: 'Hover and move your cursor to see the magic ✨' , gradientColors : ["#FF0080", "#7928CA", "#FF0080"] , titleColor: "from-pink-400 to-pink-500" , glowIntensity:0.6},
    { id:2 , title: 'Neon Card', content: 'Experience smooth animations ⚡' , gradientColors : ["#00FFFF", "#0066FF", "#00FFFF"]  , titleColor: "from-cyan-200 to-cyan-300" , glowIntensity : 0.5 }
  ]
  return (
    <NeonCard info={info} />
  );
}
