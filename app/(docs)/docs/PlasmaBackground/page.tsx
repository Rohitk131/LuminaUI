import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import Plasma from "./plasmabackgrounddemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Plasma" className="mt-5 overflow-hidden">
        <PreviewCodeCard path="app/(docs)/docs/PlasmaBackground/plasmabackgrounddemo.tsx">
          <div className="w-full h-[800px]">
            <Plasma />
          </div>
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
