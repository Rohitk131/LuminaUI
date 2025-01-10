interface Documentation {
  groupKey: string;
  groupValue: string;
  children: DocumentationChild[];
}

interface DocumentationChild {
  label: string;
  value: string;
  url: string;
  new?: boolean;
}

export const DOCS: Documentation[] = [
  {
    groupKey: "Follow for more updates",
    groupValue: "Follow for more updates",
    children: [
      {
        label: "Twitter @",
        value: "Twitter @",
        url: "https://x.com/",
      },
    ],
  },
  {
    groupKey: "gettingStart",
    groupValue: "Getting Started",
    children: [
      {
        label: "Introduction",
        value: "introduction",
        url: "/docs",
      },
      {
        label: "Installation",
        value: "installation",
        url: "/docs/installation",
      },
    ],
  },
  {
    groupKey: "components",
    groupValue: "Components",
    children: [
      {
        label: "Footer",
        value: "footer",
        url: "/docs/footer",
        new: true,
      },
      {
        label: "Grid Background",
        value: "grid-background",
        url: "/docs/grid-background",
        new: true,
      },
      {
        label: "Progress Bar",
        value: "progress-bar",
        url: "/docs/progress-bar",
        new: true,
      },
      {
        label: "Perks Grid",
        value: "FeatureGridDemo",
        url: "/docs/Perks",
        new: true,
      },
      {
        label: "Navbar",
        value: "navbar",
        url: "/docs/navbar",
        new: true,
      },
      {
        label: "Animated Theme Toggle",
        value: "animated-theme-toggle",
        url: "/docs/animated-theme-toggle",
        new: true,
      },
      {
        label: "CTA Section",
        value: "cta-section",
        url: "/docs/cta-section",
        new: true,
      },
      {
        label: "Card Deck",
        value: "card-deck",
        url: "/docs/card-deck",
        new: true,
      },
      {
        label: "Smart Input",
        value: "smart-input",
        url: "/docs/smart-input",
        new: true,
      },
      {
        label: "Space Background",
        value: "spacebackground-demo",
        url: "/docs/spacebackground",
        new: true,
      },
      {
        label: "Stepper Wizard",
        value: "stepper-wizard",
        url: "/docs/stepper-wizard",
        new: true,
      },
      {
        label: "Flying Button",
        value: "flying-button",
        url: "/docs/flyingbutton",
        new: true,
      },
      {
        label: "Pagination",
        value: "pagination",
        url: "/docs/pagination",
        new: true,
      },
      {
        label: "Pricing",
        value: "pricing-section",
        url: "/docs/pricing",
        new: true,
      },
      {
        label: "Neon Card",
        value: "neoncard-demo",
        url: "/docs/neon-card",
        new: true,
      },
      {
        label: "Toast",
        value: "toast",
        url: "/docs/toast",
        new: true,
      },
      {
        label: "Accordion",
        value: "accordion",
        url: "/docs/accordion",
        new: true,
      },
      {
        label: "Calendar",
        value: "calendar",
        url: "/docs/calendar",
        new: true,
      },
      {
        label: "Gradient Circle",
        value: "GradientCircleDemo",
        url: "/docs/gradient-circle",
        new: true,
      },
      {
        label: "EyeOpener",
        value: "eyeopener",
        url: "/docs/eyeopener",
        new: true,
      },
      {
        label: "SocialMediaBar",
        value: "socialmediabar",
        url: "/docs/socialmediabar",
        new: true,
      },
      {
        label: "Slide Card",
        value: "SlideCard",
        url: "/docs/slide-card",
        new: true,
      },
      {
        label: "Circle Showcase",
        value: "circleshowcase",
        url: "/docs/circleshowcase",
        new: true,
      },
    ],
  },
];
