import React from "react";
import CodeCard from "@/app/(docs)/docs/components/code-card/code-card";
import fs from "fs/promises";
import { cn } from "@/lib/utils";

interface PreviewCodeCardProps {
  className?: string;
  path: string;
  children?: React.ReactNode;
}

const PreviewCodeCard = async ({
  className,
  path,
  children,
}: PreviewCodeCardProps) => {
  const demoCode = await fs.readFile(path, "utf8");

  if (!demoCode) {
    console.error(`No demo code found in ${path}`);
    return null;
  }

  return (
    <CodeCard code={demoCode} className={cn("mb-14 mt-5", className)}>
      <div className="absolute top-[100px] left-[600px] w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[150px] right-[200px] w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="flex items-center justify-center ">{children}</div>
    </CodeCard>
  );
};

export default PreviewCodeCard;
