import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import PlasmaPreview from "./plasmabackgrounddemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Plasma" className="mt-5 overflow-hidden">
        <PreviewCodeCard path="app/(docs)/docs/PlasmaBackground/plasmabackgrounddemo.tsx">
          <div className="w-full h-[800px]">
            <PlasmaPreview />
          </div>
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-5"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/plasma.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
