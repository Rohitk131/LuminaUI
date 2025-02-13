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
        <Steppers
          className="my-5"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="lib/utils.ts"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
