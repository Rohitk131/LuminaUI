import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import Eyes from "./eyeopener";

const page = () => {
  return (
    <div>
      <PageTemplate title="Eye Opener Section" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/eyeopener/eyeopener.tsx">
          <Eyes />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-4"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/eyeopener.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
