import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import CTASection from "./ctaSection-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="CTA Section" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/cta-section/ctaSection-demo.tsx">
          <CTASection />
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
          codePath="components/luminaui/ctaSection.tsx"
        />
        
      </PageTemplate>
    </div>
  );
};

export default page;
