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
    ],
  },
];
