import {
  AnimatedThemeToggle,
  TransitionEffect,
} from "@/components/luminaui/animated-theme-toggle";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-24">
      <AnimatedThemeToggle />
      <TransitionEffect />
    </div>
  );
}
