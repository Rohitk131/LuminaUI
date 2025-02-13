"use client";
import { SlideCard } from '@/components/luminaui/slidecard';

const teamMembers = [
  {
    name: "Bertram Gilfoyle",
    role: "System Architecture",
    imageSrc: "https://imgs.search.brave.com/R8M4EKyirh7MFMCQasRx36ti7nVO47SniRFE88A5Tnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Np/bGljb24tdmFsbGV5/L2ltYWdlcy8yLzIw/L0JlcnRyYW1fR2ls/Zm95bGUuanBnL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzIz/NT9jYj0yMDIxMDEw/NDIwMjYyOA",
    bio: "Expert systems architect specializing in cryptography, network security, and distributed computing infrastructure.",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
  },
  // Add more team members here
];

export const SlideCardDemo = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 relative  p-8">
      <div
        className="absolute inset-0 opacity-60 dark:opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.6) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

    
      {teamMembers.map((member) => (
        <SlideCard key={member.name} {...member} />
      ))}
    </div>
  );
};

export default SlideCardDemo;