import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import AnimatedIconsOrbit from "./animatediconorbitdemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Buttons" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/animatediconorbit/animatediconorbitdemo.tsx">
          <AnimatedIconsOrbit />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-4"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/animated-theme-toggle.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
