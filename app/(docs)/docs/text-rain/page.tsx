import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import TextRain from "./text-rain-demo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Text Rain" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/text-rain/text-rain-demo.tsx">
          <TextRain />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-5"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/text-rain.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
