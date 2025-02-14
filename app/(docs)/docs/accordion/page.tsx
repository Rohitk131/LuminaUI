import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import Accordion from "./accordion";

const page = () => {
  return (
    <div className="">
      <PageTemplate title="Accordion Section" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/accordion/accordion.tsx">
          <Accordion />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-4"
          installScript="npm i gsap framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/accordion.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
