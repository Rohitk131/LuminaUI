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
        <p className="text-gray-400">
          Make Utils.ts file in lib and paste the code from Step-2
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion"
          steps={[
            { title: "Create dynamic-gradient component & paste the code" },
          ]}
          withInstall
          codePath="components/luminaui/dynamic-gradient.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
