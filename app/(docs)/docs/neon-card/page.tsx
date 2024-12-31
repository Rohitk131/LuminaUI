import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import NeonCardDemo from "./neoncard-demo";  // Updated import

const page = () => {
  return (
    <div>
      <PageTemplate title="Neon Card" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/neon-card/neoncard-demo.tsx"> 
          <NeonCardDemo />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          No additional packages required. Just copy the component code.
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react"
          steps={[{ title: "Create Neon Card component & paste the code" }]}
          withInstall
          codePath="lib/utils.ts"
        />
      </PageTemplate>
    </div>
  );
};

export default page;