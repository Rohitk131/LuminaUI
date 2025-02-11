import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import CircleShowcase from "./circleshowcase";

const page = () => {
  return (
    <div>
      <PageTemplate title="Circle Showcase Section" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/circleshowcase/circleshowcase.tsx">
          <CircleShowcase />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-4"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/circle-showcase.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
