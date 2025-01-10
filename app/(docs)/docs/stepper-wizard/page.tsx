import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import StepperWizard from "./stepper-wizard-demo";
const page = () => {
  return (
    <div>
      <PageTemplate title="Stepper Wizard" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/stepper-wizard/stepper-wizard-demo.tsx">
          <StepperWizard />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Make Utils.ts file in lib and paste the code from Step-2
        </p>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Create stepper-wizard component & paste the code" },
          ]}
          withInstall
          codePath="lib/utils.ts"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
