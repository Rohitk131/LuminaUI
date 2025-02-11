import AnimatedIconOrbit from "@/components/luminaui/animatediconorbit";

export default function HeroAnimationPreview() {
  const urls = [
    "https://www.svgrepo.com/show/353735/firebase.svg",
    "https://www.svgrepo.com/show/353486/bitbucket.svg",
    "https://www.svgrepo.com/show/475681/snapchat-color.svg",
    "https://www.svgrepo.com/show/353964/kickstarter-icon.svg",
    "https://www.svgrepo.com/show/353709/eslint.svg",
    "https://www.svgrepo.com/show/353428/atlassian.svg",
  ];

  return <AnimatedIconOrbit url={urls} />;
}
