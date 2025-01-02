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
        label: "Space Background",
        value: "spacebackground-demo",
        url: "/docs/spacebackground",
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
    ],
  },
];
