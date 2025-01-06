import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { GradientCircleDemo } from "./GradientCircleDemo"; // Updated import
import { Steppers } from "@/components/ui/steppers";

const page = () => {
  return (
    <div>
      <PageTemplate title="Gradient Circle" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/gradient-circle/GradientCircleDemo.tsx">
          <GradientCircleDemo />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          No additional packages required. Just copy the component code.
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react"
          steps={[{ title: "Create Gradient Circle component & paste the code" }]}
          withInstall
          codePath="lib/utils.ts"
        />
      </PageTemplate>
    </div>
  );
};

export default page;