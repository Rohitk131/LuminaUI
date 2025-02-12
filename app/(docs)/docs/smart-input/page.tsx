import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import SmartInput from "./smart-input-demo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Smart Input" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/smart-input/smart-input-demo.tsx">
          <SmartInput />
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
