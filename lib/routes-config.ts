// Define base path only once
const BASE_PATH = "";

// Routes for page navigation and left sidebar sorting
export const ROUTES = [
  {
    groupKey: "gettingStart",
    groupValue: "Getting Started",
    children: [
      {
        label: "Introduction",
        value: "introduction",
        url: `${BASE_PATH}`,
      },
    ],
  },
  {
    groupKey: "components",
    groupValue: "Components",
    children: [
      {
        label: "Gradient Circle",
        value: "gradient-circle",
        url: `${BASE_PATH}/gradient-circle`,
      },
      {
        label: "Eye Opener",
        value: "eye-opener",
        url: `${BASE_PATH}/eyeopener`,
      },
      {
        label: "Circular Slider",
        value: "circular-slider",
        url: `${BASE_PATH}/circularslider`,
      },
      {
        label: "3D Button",
        value: "threeDButton",
        url: `${BASE_PATH}/ThreeDButton`,
      },
      {
        label: "Card Deck",
        value: "card-deck",
        url: `${BASE_PATH}/card-deck`,
      },
      {
        label: "Cards Queue",
        value: "queuecards",
        url: `${BASE_PATH}/queuecards`,
      },
      {
        label: "Navbar",
        value: "navbar",
        url: `${BASE_PATH}/navbar`,
      },
      { label: "Accordion", value: "accordion", url: `${BASE_PATH}/accordion` },
    ],
  },
];

// Flatten routes for simpler navigation
export const page_routes = ROUTES.map(({ children }) => {
  return children.map((link) => ({
    title: link.label,
    href: link.url,
  }));
}).flat();
