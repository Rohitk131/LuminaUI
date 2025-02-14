import LeftSide from "@/app/(docs)/layout-parts/left-side/left-side";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import RequestComponents from "@/components/requestcomponets";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mt-24 flex flex-col lg:flex-row">
      <LeftSide />
      <section className="flex flex-1 flex-col overflow-auto px-4 sm:px-6" role="main" aria-label="Main content">
        <div className="flex-1">
          <div className="mb-4">
            <RequestComponents />
          </div>
          {children}
        </div>
      </section>
      <Toaster />
    </main>
  );
}
