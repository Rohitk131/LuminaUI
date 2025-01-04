import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import GridBackground from "./grid-background-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="Grid Background" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/grid-background/grid-background-demo.tsx">
          <GridBackground />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Make Utils.ts file in lib and paste the code from Step-2
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react"
          steps={[{ title: "Create pagination component & paste the code" }]}
          withInstall
          codePath="lib/utils.ts"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
