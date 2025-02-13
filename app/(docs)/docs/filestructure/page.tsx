import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";
import { Steppers } from "@/components/ui/steppers";
import FileStructure from "./filestructuredemo";

const page = () => {
  return (
    <div>
      <PageTemplate title="File Structure" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/filestructure/filestructuredemo.tsx">
          <FileStructure />
        </PreviewCodeCard>
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          className="my-5"
          installScript="npm i framer-motion lucide-react"
          steps={[
            { title: "Implement the code as demonstrated in the preview" },
          ]}
          withInstall
          codePath="components/luminaui/filestructure.tsx"
        />
      </PageTemplate>
    </div>
  );
};

export default page;
