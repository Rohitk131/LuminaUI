import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import SpaceBackground from "./spacebackground-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="CTA Section" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/spacebackground/spacebackground-demo.tsx">
          <SpaceBackground />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
           Make Utils.ts file in lib and paste the code from Step-2  
        </p>
        <Steppers
          className=""
          
          installScript="npm i framer-motion lucide-react"
          steps={[{ title: "Create feedback component & paste the code" }]}
          withInstall
          codePath="components/luminaui/spacebackground.tsx"
        />
        
      </PageTemplate>
    </div>
  );
};

export default page;
