import { Accordion } from "@/components/luminaui/accordion";

export default function AccordionPreview() {
  const accordionItems = [
    {
      title: "What is an Accordion?",
      content:
        "An accordion is a vertically stacked set of interactive headings that each reveal a section of content.",
    },
    {
      title: "How do I use it?",
      content:
        "Click on any heading to expand or collapse the content. Only one section is open at a time.",
    },
    {
      title: "Why use an Accordion?",
      content:
        "Accordions are used to reduce page clutter and organize content efficiently.",
    },
  ];

  return <Accordion items={accordionItems} />;
}
