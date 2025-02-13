import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import ProgressBar from "./progress-bar-demo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Progress Bar" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/progress-bar/progress-bar-demo.tsx">
          <ProgressBar />
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
