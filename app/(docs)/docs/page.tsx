import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function IntroductionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 px-6">
      {/* Hero Section */}
      <div className="text-start space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">Lumina UI</h1>
        <p className="text-lg text-gray-600">
          A collection of elegant, reusable UI components designed for modern web apps. Fully customizable and easy to integrate.
        </p>
        <div className="flex justify-start gap-4">
          <Button asChild>
            <Link href="/docs/installation">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/Rohitk131/LuminaUI">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Why Lumina UI?</h2>
        <p className="text-gray-600">
          Lumina UI provides a carefully crafted selection of components that you can copy and integrate into your projects effortlessly. Built for performance, accessibility, and ease of use.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Plug & Play</h3>
            <p>
              No need to install a package—just copy, paste, and tweak to fit your project’s needs.
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="font-semibold mb-2">Fully Customizable</h3>
            <p>
              Every component is designed to be easily styled and adapted to your design system.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is Lumina UI a component library?</AccordionTrigger>
            <AccordionContent>
              No, it’s a collection of high-quality, reusable components that you can copy and integrate into your projects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I use Lumina UI in commercial projects?</AccordionTrigger>
            <AccordionContent>
              Yes, all components are free to use for both personal and commercial projects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What frameworks are supported?</AccordionTrigger>
            <AccordionContent>
              Lumina UI components work with any React-based framework, including Next.js, Remix, and Gatsby.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Do I need TypeScript?</AccordionTrigger>
            <AccordionContent>
              No, you can use Lumina UI with JavaScript. However, TypeScript support ensures better maintainability and developer experience.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Credits Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Built With</h2>
        <p className="text-gray-600">
          Powered by modern technologies like {" "}
          <Link href="https://react.dev" className="font-medium underline underline-offset-4">
            React
          </Link>
          , {" "}
          <Link href="https://nextjs.org" className="font-medium underline underline-offset-4">
            Next.js
          </Link>
          , {" "}
          <Link href="https://www.typescriptlang.org" className="font-medium underline underline-offset-4">
            TypeScript
          </Link>
          , and {" "}
          <Link href="https://tailwindcss.com" className="font-medium underline underline-offset-4">
            Tailwind CSS
          </Link>
          , ensuring a seamless development experience.
        </p>
      </div>
    </div>
  );
}
