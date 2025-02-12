import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import ThreeDButton from "./ThreeDButtonDemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="3D Button" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/ThreeDButton/ThreeDButtonDemo.tsx">
          <ThreeDButton />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-4"
          installScript="npm i gsap framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/threeDbutton.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
