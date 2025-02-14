import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import NeonCardDemo from "./neoncard-demo"; // Updated import

const page = () => {
  return (
    <div>
      <PageTemplate title="Neon Card" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/neon-card/neoncard-demo.tsx">
          <NeonCardDemo />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-5"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/neoncards.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
