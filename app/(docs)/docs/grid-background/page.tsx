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
        <Steppers
          className=""
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
