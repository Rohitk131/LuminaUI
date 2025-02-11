import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import DynamicGradient from "./dynamic-gradient-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="Dynamic Gradient" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/dynamic-gradient/dynamic-gradient-demo.tsx">
          <DynamicGradient />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className=""
          installScript="npm i framer-motion"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/dynamic-gradient.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
