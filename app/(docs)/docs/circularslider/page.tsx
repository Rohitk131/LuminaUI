import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import CircularSlider from "./circularsliderdemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="Circular Slider" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/circularslider/circularsliderdemo.tsx">
          <CircularSlider />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-4"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/circularslider.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
