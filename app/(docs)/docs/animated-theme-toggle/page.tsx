import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import AnimatedThemeToggle from "./animated-theme-toggle-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="Animated Theme Toggle" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/animated-theme-toggle/animated-theme-toggle-demo.tsx">
          <AnimatedThemeToggle />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react next-themes"
          steps={[
            {
              title: "Implement the code as demonstrated in the preview",
            },
          ]}
          withInstall
          codePath="components/luminaui/animated-theme-toggle.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
