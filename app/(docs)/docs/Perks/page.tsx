import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import FeaturesGrid from "./FeatureGridDemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Perks Grid" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/Perks/FeatureGridDemo.tsx">
          <FeaturesGrid />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/perkscard.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
