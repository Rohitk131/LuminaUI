import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import SpaceBackground from "./spacebackground-demo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Space Background" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/spacebackground/spacebackground-demo.tsx">
          <SpaceBackground />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-5"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/spacebackground.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
