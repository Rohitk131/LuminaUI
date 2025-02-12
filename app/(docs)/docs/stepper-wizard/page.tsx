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
