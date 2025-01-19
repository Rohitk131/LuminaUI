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
        new: false,
      },
      {
        label: "Stacked Cards",
        value: "stackedcardsdemo",
        url: "/docs/stackedcards",
        new: false,
      },
      {
        label: "Grid Background",
        value: "grid-background",
        url: "/docs/grid-background",
        new: false,
      },
      {
        label: "Progress Bar",
        value: "progress-bar",
        url: "/docs/progress-bar",
        new: false,
      },
      {
        label: "Buttons",
        value: "buttonsDemo",
        url: "/docs/Buttons",
        new: true,
      },
      {
        label: "Github Chart",
        value: "githubchartdemo",
        url: "/docs/githubchart",
        new: true,
      },
      {
        label: "Perks Grid",
        value: "FeatureGridDemo",
        url: "/docs/Perks",
        new: false,
      },
      {
        label: "Plasma",
        value: "plasmabackground",
        url: "/docs/PlasmaBackground",
        new: true,
      },
      {
        label: "Navbar",
        value: "navbar",
        url: "/docs/navbar",
        new: false,
      },
      {
        label: "Animated Theme Toggle",
        value: "animated-theme-toggle",
        url: "/docs/animated-theme-toggle",
        new: false,
      },
      {
        label: "CTA Section",
        value: "cta-section",
        url: "/docs/cta-section",
        new: false,
      },
      {
        label: "Card Deck",
        value: "card-deck",
        url: "/docs/card-deck",
        new: true,
      },
      {
        label: "Countdown Timer",
        value: "countdown-timer",
        url: "/docs/countdown-timer",
        new: true,
      },
      {
        label: "Smart Input",
        value: "smart-input",
        url: "/docs/smart-input",
        new: false,
      },
      {
        label: "Space Background",
        value: "spacebackground-demo",
        url: "/docs/spacebackground",
        new: false,
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
        new: false,
      },
      {
        label: "Pagination",
        value: "pagination",
        url: "/docs/pagination",
        new: false,
      },
      {
        label: "Pricing",
        value: "pricing-section",
        url: "/docs/pricing",
        new: false,
      },
      {
        label: "Neon Card",
        value: "neoncard-demo",
        url: "/docs/neon-card",
        new: false,
      },
      {
        label: "Toast",
        value: "toast",
        url: "/docs/toast",
        new: false,
      },
      {
        label: "Accordion",
        value: "accordion",
        url: "/docs/accordion",
        new: false,
      },
      {
        label: "Calendar",
        value: "calendar",
        url: "/docs/calendar",
        new: false,
      },
      {
        label: "Gradient Circle",
        value: "GradientCircleDemo",
        url: "/docs/gradient-circle",
        new: false,
      },
      {
        label: "EyeOpener",
        value: "eyeopener",
        url: "/docs/eyeopener",
        new: false,
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
        new: false,
      },
      {
        label: "Circle Showcase",
        value: "circleshowcase",
        url: "/docs/circleshowcase",
        new: true,
      },
      {
        label: "Text Rain",
        value: "TextRain",
        url: "/docs/text-rain",
        new: true,
      },
      {
        label: "Code Block",
        value: "codeblockdemo",
        url: "/docs/codeblock",
        new: true,
      },
      {
        label: "File Structure",
        value: "filestructuredemo",
        url: "/docs/filestructure",
        new: true,
      },
    ],
  },
];
